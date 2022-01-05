const components = require("./componentDataList.json")
const fs = require("fs")
const path = require("path/win32")

components.forEach(c => {
  console.log(c.name)
  // if (c.name.includes("<")) return
  c.name = c.name.replace("<", "").replace(">", "").replace(",", "")
  const code = getCode(c)
  const p = path.join(path.resolve("../"), "src/NeosJson", "Components", c.pathName.replace("<", "").replace(">", "").replace(",", ""))
  fs.mkdirSync(path.dirname(p), { recursive: true })
  fs.writeFileSync(p + ".ts", code)
  // console.log(code)
})

function getCode (arg) {
  const list = arg.syncmembers.filter(i => !(i.name === "Enabled" || i.name === "UpdateOrder" || i.name === "persistent"))
  const classMember = list.map(i => {
    return `${i.name} = new ${getType(i.type)}()`
  })
  const inputMember = list.map(i => {
    return `${i.name}?: ${getInputType(i.type)}`
  })

  let generic = ""
  if (arg.genericTypes) {
    generic = arg.genericTypes.map(t => `"${t.type}"`).join(" | ")
  }

  return `
import { ComponentBase, ComponentDataBase, ComponentDataBool, ComponentDataNumber, ComponentDataString, ComponentDataUnknown} from "NeosJson/Components"
export class ${arg.name} extends ComponentBase {
  Data: ${arg.name}Interface
  constructor (${generic ? "type: " + (generic || "string") + "," : ""}init?: Input${arg.name}) {
    ${generic ? "super(type)" : `super("${arg.fullName}")`}
    this.Data = new ${arg.name}Interface(init)
  }
}
class ${arg.name}Interface extends ComponentDataBase {
  ${classMember.join("\n  ")}
  
  constructor (arg?: Input${arg.name}) {
    super()
    if (!arg) return
    for (const prop in arg) {
      // @ts-ignore
      this[prop].Data = arg[prop]
    }
  }
}
  
interface Input${arg.name} {
  ${inputMember.join("\n  ")}
}
    `
}

// TODO
function getType (t) {
  switch (t) {
    case "FrooxEngine.Sync`1[System.Boolean]":
      return "ComponentDataBool"
    default:
      return "ComponentDataUnknown"
  }
}

// TODO
function getInputType (t) {
  switch (t) {
    case "FrooxEngine.Sync`1[System.Boolean]":
      return "boolean"
    default:
      return "any"
  }
}
