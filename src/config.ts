import path from "path"
// @ts-ignore
import config from "../config.json"

export interface INeosBotConfig {
    userId: string
    password: string
}

export class Config {
    static calenderToken = null

    static getCalenderToken (): any {
      if (!this.calenderToken) {
        this.calenderToken = require(path.join(__dirname, "../token.json"))
      }
      return this.calenderToken
    }

    static getNeosBotConfig (): INeosBotConfig {
      return config.NeosBot
    }

    static getDBConfig () {
      return config.db
    }

    static getDecompUrl () {
      return config.decompressUrl
    }

    static getDiscordConfig () {
      return config.discord
    }
}
