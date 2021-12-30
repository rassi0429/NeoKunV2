import { Config } from "./config"

const Neos = require("@bombitmanbomb/neosjs")

export class NeosBot {
    private neos = new Neos()

    async init () {
      const config = Config.getNeosBotConfig()
      this.neos.Login(config.userId, config.password)

      this.neos.on("messageReceived", (message: any) => {
        console.log("message received")
        this.neos.SendTextMessage(message.SenderId, "Hello")
      })
    }
}
