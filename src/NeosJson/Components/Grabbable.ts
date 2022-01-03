// Auto Generated File
import { ComponentBase, ComponentDataBase, ComponentDataBool } from "NeosJson/Components"

export class GrabbableBefore extends ComponentBase {
  Data: GrabbableInterface

  constructor (init?: InputGrabbable) {
    super("FrooxEngine.Grabbable")
    this.Data = new GrabbableInterface(init)
  }
}

class GrabbableInterface extends ComponentDataBase {
  ReparentOnRelease = new ComponentDataBool()

  constructor (arg?: InputGrabbable) {
    super()
    if (!arg) return
    for (const prop in arg) {
      // @ts-ignore
      this[prop].Data = arg[prop]
    }
  }
}

interface InputGrabbable {
  ReparentOnRelease: boolean
}
