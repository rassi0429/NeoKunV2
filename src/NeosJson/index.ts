import lodash from "lodash"
import deepdash from "deepdash"

const _ = deepdash(lodash)

export class NeosJson {
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
