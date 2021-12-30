import axios from "axios"
import { Config } from "./config"
import { Event } from "./db/entity/event/event"

const api = `https://discord.com/api/v8/guilds/${Config.getDiscordConfig().guildId}/scheduled-events`
const headers = {
  Authorization: "Bot " + Config.getDiscordConfig().token
}

export class DiscordBot {
  async updateDiscordEvent (event: Event) {

  }

  async deleteEvent (event: Event) {

  }

  async updateEvent (event: Event) {

  }
}
