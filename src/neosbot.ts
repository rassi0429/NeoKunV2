import axios from "axios"
import lodash from "lodash"
import deepdash from "deepdash"
import { Config } from "./config"
import { Logger } from "./logger"
import { IEventName } from "./db/entity/event/eventName"
import { IEventDetail } from "./db/entity/event/eventDetail"
import { IEventLocation } from "./db/entity/event/eventLocation"
import { IEvent } from "./db/entity/event/event"

const _ = deepdash(lodash)

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
              this.addEvent(itemData)
              break
            default:
              this.neos.SendTextMessage(m.SenderId, "アイテムが認識できませんでした。")
              break
          }
        }
      } catch (e) {
        console.log(e)
      }
    }

    addEvent (itemData: NeosJson) {

    }
}

class NeosJson {
    private data: Object

    constructor (json: string) {
      this.data = json
    }

    getDynamicValueVariable (path: string): string {
      const result = _.findValueDeep(this.data, (value, key, parent, context) => {
        if (key === "Data" && context.parent?.key === "Value" && context.parent?.parent?.value.VariableName.Data === path) {
          return true
        }
      })
      return result
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
