import axios from "axios"
import lodash from "lodash"
import deepdash from "deepdash"
import { Config } from "./config"
import { Logger } from "./logger"
import { IEventName } from "./db/entity/event/eventName"
import { IEventDetail } from "./db/entity/event/eventDetail"
import { IEventLocation } from "./db/entity/event/eventLocation"
import { IEvent } from "./db/entity/event/event"
import { NeosJson } from "./NeosJson"

const Neos = require("@bombitmanbomb/neosjs")

export class NeosBot {
    neos: any

    constructor () {
      this.neos = new Neos()
    }

    async init () {
      const config = Config.getNeosBotConfig()
      this.neos.Login(config.userId, config.password)

      this.neos.on("messageReceived", (msg: any) => this.messageReceived(msg))
      this.neos.on("friendAdded", (friend: any) => this.addFriend(friend))
    }

    addFriend (friend: any) {
      if (friend.FriendStatus === "Requested") {
        this.neos.AddFriend(friend)
      }
    }

    async messageReceived (m: any) {
      Logger.info("Message Received", "Neos")
      try {
        const msg = JSON.parse(m.Content)
        if (!msg.assetUri) {
          this.neos.SendTextMessage(m.senderId, "hello")
        } else {
          const data = await JsonUtil.decompress7zbson(msg.assetUri)
          const itemData = new NeosJson(data)
          const itemType = itemData.getDynamicValueVariable("ItemType")
          if (!itemType) {
            this.neos.SendTextMessage(m.SenderId, "アイテムが認識できませんでした。")
          }
          switch (itemType) {
            case "AddEventForm":
              this.addEvent(itemData, m)
              break
            default:
              this.neos.SendTextMessage(m.SenderId, "アイテムが認識できませんでした。")
              break
          }
        }
      } catch (e) {
        this.neos.SendTextMessage(m.SenderId, "Hello")
      }
    }

    async addEvent (itemData: NeosJson, msg: any) {
      const name: IEventName = {
        en: itemData.getDynamicValueVariable("name.en"),
        ja: itemData.getDynamicValueVariable("name.ja"),
        ko: itemData.getDynamicValueVariable("name.ko")
      }
      const detail: IEventDetail = {
        en: itemData.getDynamicValueVariable("detail.en"),
        ja: itemData.getDynamicValueVariable("detail.ja"),
        ko: itemData.getDynamicValueVariable("detail.ko")
      }
      const location: IEventLocation = {
        worldName: itemData.getDynamicValueVariable("location.worldName"),
        userId: itemData.getDynamicValueVariable("location.userId"),
        sessionUrl: itemData.getDynamicValueVariable("location.sessionUrl")
      }
      const event: IEvent = {
        detail,
        location,
        name,
        start: Number(itemData.getDynamicValueVariable("start")),
        end: Number(itemData.getDynamicValueVariable("end")),
        recurrence: itemData.getDynamicValueVariable("recurrence"),
        twitterTag: itemData.getDynamicValueVariable("twitterTag")
      }
      await this.neos.SendTextMessage(msg.SenderId, JSON.stringify(name))
      await this.neos.SendTextMessage(msg.SenderId, JSON.stringify(detail))
      await this.neos.SendTextMessage(msg.SenderId, JSON.stringify(location))
      await this.neos.SendTextMessage(msg.SenderId, JSON.stringify({ start: event.start, end: event.end, twitterTag: event.twitterTag, recurrence: event.recurrence }))
    }
}

class JsonUtil {
  static async decompress7zbson (assetUrl: string): Promise<string> {
    const id = assetUrl.replace("neosdb:///", "").replace(".7zbson", "")
    const url = Config.getDecompUrl()
    const { data } = await axios.get(url + id)
    return data
  }
}
