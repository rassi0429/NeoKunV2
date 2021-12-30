import { Calendar } from "./calendar"
import { NeosBot } from "./neosbot"
import { DB } from "./db"
import { Logger } from "./logger"

async function main () {
  Logger.info("NeoKun v2", "MAIN")
  const cal = new Calendar()
  const neosBot = new NeosBot()

  await cal.init()
  await DB.init()
  await neosBot.init()
  Logger.info("Init Done", "MAIN")
}

main()
