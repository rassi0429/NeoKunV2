import { calendar_v3 as calenderV3, google } from "googleapis"
import { Config } from "./config"

export class Calendar {
  private client: any
  private calendar?: calenderV3.Calendar

  async init () {
    this.client = await google.auth.getClient({
      credentials: Config.getCalenderToken(),
      scopes: ["https://www.googleapis.com/auth/calendar"]
    })
    this.calendar = google.calendar({ version: "v3", auth: this.client })
  }

  async getTestData () {
    if (!this.calendar) {
      Error("calender not initialized")
      return
    }
    const { data } = await this.calendar.events.list({
      calendarId: "c_gdeb0s3soc139rad34qvcfcr5c@group.calendar.google.com",
      timeMin: (new Date()).toISOString(),
      maxResults: 10,
      singleEvents: true,
      orderBy: "startTime"
    })
    return data
  }
}
