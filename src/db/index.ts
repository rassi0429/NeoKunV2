import { Connection, ConnectionOptions, createConnection } from "typeorm"
import { Config } from "../config"
import { User } from "./entity/user"
import { EventName } from "./entity/event/eventName"
import { Event } from "./entity/event/event"
import { EventLocation } from "./entity/event/eventLocation"
import { EventDetail } from "./entity/event/eventDetail"
import { EventImage } from "./entity/event/eventImage"

export class DB {
    private static connection?: Connection

    static async init () {
      const configDB = Config.getDBConfig()
      const options: ConnectionOptions = {
        type: "mariadb",
        host: configDB.host,
        port: configDB.port,
        username: configDB.username,
        password: configDB.password,
        database: configDB.database,
        synchronize: true,
        entities: [User, Event, EventName, EventLocation, EventDetail, EventImage]
      }

      DB.connection = await createConnection(options)
    }

    static getConnection () : Connection {
      if (!DB.connection) {
        throw new Error("DB not init")
      }
      return DB.connection
    }
}
