import axios from "axios"
import lodash from "lodash"
import deepdash from "deepdash"
import { Config } from "./config"
import { Logger } from "./logger"

const _ = deepdash(lodash)

const Neos = require("@bombitmanbomb/neosjs")

export class NeosBot {
    private neos = new Neos()

    async init () {
      const config = Config.getNeosBotConfig()
      this.neos.Login(config.userId, config.password)

      this.neos.on("messageReceived", this.messageReceived)
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
            this.neos.sendTextMessage(m.senderId, "アイテムが認識できませんでした。")
          }
          switch (itemType) {
            case "AddEventForm":
              this.addEvent(itemData)
              break
            default:
              this.neos.sendTextMessage(m.senderId, "アイテムが認識できませんでした。")
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
