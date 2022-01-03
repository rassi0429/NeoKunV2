import lodash from "lodash"
import deepdash from "deepdash"
import { Slot } from "./slot"
import { NeosJsonUtil } from "./util"

const _ = deepdash(lodash)

export class NeosJson {
  rootSlot: Slot

  constructor (json: any) {
    this.rootSlot = new Slot("TestSlot")
    // _.merge(this.rootSlot, json?.Object)
  }

  getRootSlot () {
    return this.rootSlot
  }

  getDynamicValueVariable (path: string): string {
    const result = _.findValueDeep(this.rootSlot, (value, key, parent, context) => {
      if (key === "Data" && context.parent?.key === "Value" && context.parent?.parent?.value.VariableName.Data === path) {
        return true
      }
    })
    return result
  }

  //
  // attachComponent (component: "Grabbable", option: object, slot: any) {
  //   return this
  // }
  //
  // getSlotByName (name: string) {
  //   return this
  // }
  //
  // createChildSlot (name: string, slot?: any): NeosJson {
  //   const newSlot = NeosJsonUtil.generateSlot(name)
  //   if (!slot) {
  //     const num = this.data.Children?.push(newSlot)
  //     return this
  //   } else {
  //     // @ts-ignore
  //     const num = this.data[slot.path].Children.push(newSlot)
  //     return this
  //   }
  // }
  //
  // newSlot () {
  //   this.data = NeosJsonUtil.generateSlot("TestSlot")
  //   return this
  // }
}

const json = "{\"Object\":{\"ID\":\"f6dbe42f-970d-4cdd-bd35-1fa9734eb866\",\"Components\":{\"ID\":\"721b3fdc-9d00-4a2f-a577-870f15bd8167\",\"Data\":[{\"Type\":\"FrooxEngine.BoxMesh\",\"Data\":{\"ID\":\"7e39ab4a-53aa-4a3a-b040-719b53175d65\",\"persistent-ID\":\"33c8f5a9-394f-4127-b19d-7f35d14684cb\",\"UpdateOrder\":{\"ID\":\"8003da9e-dd4a-48e8-83d3-f4f90f1ebab3\",\"Data\":0},\"Enabled\":{\"ID\":\"6b491896-a390-487f-929e-da502128db5e\",\"Data\":true},\"HighPriorityIntegration\":{\"ID\":\"84542366-d170-4007-a58b-c58726db51fd\",\"Data\":false},\"OverrideBoundingBox\":{\"ID\":\"b2c546da-ae09-4960-a3d4-c172eac8b186\",\"Data\":false},\"OverridenBoundingBox\":{\"ID\":\"3f7bb5d4-d157-4313-9c20-0dace9d68860\",\"Data\":{\"Min\":[0.0,0.0,0.0],\"Max\":[0.0,0.0,0.0]}},\"Size\":{\"ID\":\"6888a573-e36c-4451-8049-33afebc93577\",\"Data\":[1.0,1.0,1.0]},\"UVScale\":{\"ID\":\"774a6dab-bb59-464a-8c5a-eed9404aa004\",\"Data\":[1.0,1.0,1.0]},\"ScaleUVWithSize\":{\"ID\":\"eb2a7fc7-4ffd-41ee-bb3e-16b1549b8ef5\",\"Data\":false}}},{\"Type\":\"FrooxEngine.MeshRenderer\",\"Data\":{\"ID\":\"2e32d814-01d8-4733-8201-bad81540c03a\",\"persistent-ID\":\"6cc802d5-076b-4536-9a66-b05891cdd5ac\",\"UpdateOrder\":{\"ID\":\"740bccc5-d72a-423a-8262-610c6b72f8fe\",\"Data\":0},\"Enabled\":{\"ID\":\"fad506a1-ea16-4bdf-b9d3-484f6c24bfce\",\"Data\":true},\"Mesh\":{\"ID\":\"9a54c13c-37a9-41bb-9ae7-4999eced76c5\",\"Data\":\"7e39ab4a-53aa-4a3a-b040-719b53175d65\"},\"Materials\":{\"ID\":\"8644194e-8ed2-4d03-ac16-78f10e632a64\",\"Data\":[{\"ID\":\"a7e61561-9044-4b50-8e3b-dea682345b82\",\"Data\":\"316086c4-6019-42ac-b5c5-8bf9f985abff\"}]},\"MaterialPropertyBlocks\":{\"ID\":\"eb5cbc16-79cb-4dbc-aa38-896a192b5965\",\"Data\":[]},\"ShadowCastMode\":{\"ID\":\"112a0392-13e4-4ad3-82f3-e17349666963\",\"Data\":\"On\"},\"MotionVectorMode\":{\"ID\":\"dc28724c-8ed6-4abb-b2ef-f2c4fd689b96\",\"Data\":\"Object\"},\"SortingOrder\":{\"ID\":\"d400da81-6d80-4413-acf7-2a0a5d3851e6\",\"Data\":0}}},{\"Type\":\"FrooxEngine.BoxCollider\",\"Data\":{\"ID\":\"6b9e17c4-afcb-468d-a4a6-ac019181a76b\",\"persistent-ID\":\"67d6521c-ee02-4f23-b863-9012585c1f82\",\"UpdateOrder\":{\"ID\":\"a6c783bb-c05f-4ae0-91c4-413e5bece0b2\",\"Data\":1000000},\"Enabled\":{\"ID\":\"60662789-607b-456b-94d0-865cbdce9d9c\",\"Data\":true},\"Offset\":{\"ID\":\"f1f89bcf-2d56-4855-93c4-c2dae30748d4\",\"Data\":[0.0,0.0,0.0]},\"Type\":{\"ID\":\"6db1985b-9c3c-4b41-a056-2b69e49602f5\",\"Data\":\"Static\"},\"Mass\":{\"ID\":\"9aeb9802-08f6-4a57-835b-34eddc50db67\",\"Data\":1.0},\"CharacterCollider\":{\"ID\":\"d59f0d05-8751-4bf2-985d-6a9049cbf450\",\"Data\":false},\"IgnoreRaycasts\":{\"ID\":\"b1adacbb-a5b1-462a-be1f-308b873dd043\",\"Data\":false},\"Size\":{\"ID\":\"61563f11-c333-4b8b-b19d-046948c70ee8\",\"Data\":[1.0,1.0,1.0]}}},{\"Type\":\"FrooxEngine.ValueCopy`1[[BaseX.float3, BaseX, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]\",\"Data\":{\"ID\":\"2d2dfe69-6069-404b-b497-16a727f6aaa0\",\"persistent-ID\":\"8dc83655-9314-4bfa-84cc-2d04d0edb61f\",\"UpdateOrder\":{\"ID\":\"a59f48c2-25af-4fbc-b3c4-09565088d8d1\",\"Data\":0},\"Enabled\":{\"ID\":\"e5aef821-25c4-49fa-9f45-9ba1893180e4\",\"Data\":true},\"Source\":{\"ID\":\"a218547d-24bc-4cff-b0b2-5a4c15e73909\",\"Data\":\"6888a573-e36c-4451-8049-33afebc93577\"},\"Target\":{\"ID\":\"ea152a2b-e2ec-4b09-8408-2365fe37482d\",\"Data\":\"61563f11-c333-4b8b-b19d-046948c70ee8\"},\"WriteBack\":{\"ID\":\"6a71a28a-1e7d-45d0-88ce-bc61d183cdf0\",\"Data\":false}}},{\"Type\":\"FrooxEngine.Grabbable\",\"Data\":{\"ID\":\"3bdb907d-de69-4a59-9ca4-fb06a08a5523\",\"persistent-ID\":\"6cebf133-6f0c-4f4b-95ee-0adf5b9f89a5\",\"UpdateOrder\":{\"ID\":\"411ac1d2-3333-461f-beae-ffac3a828c2d\",\"Data\":0},\"Enabled\":{\"ID\":\"ff4b23c2-3c22-4214-ae73-fdb69e5af6aa\",\"Data\":true},\"ReparentOnRelease\":{\"ID\":\"a137e002-3711-434c-b623-9cb08ce9f7d5\",\"Data\":true},\"PreserveUserSpace\":{\"ID\":\"99517f66-98aa-464c-8a6e-bcb5ac7d5e62\",\"Data\":true},\"DestroyOnRelease\":{\"ID\":\"2cbd5f5e-c5ab-4304-968a-6f662ec59fc2\",\"Data\":false},\"GrabPriority\":{\"ID\":\"b2fe9de1-7596-453d-ac46-e8f2703c72ae\",\"Data\":0},\"GrabPriorityWhenGrabbed\":{\"ID\":\"57718987-7ea5-41e4-a457-77d1d5d8f9c3\",\"Data\":null},\"CustomCanGrabCheck\":{\"ID\":\"3d4d0ffc-05df-4ddc-b3af-7ec80e1bfd34\",\"Data\":{\"Target\":null}},\"EditModeOnly\":{\"ID\":\"132700b2-41cd-4157-b903-166d7c1295b4\",\"Data\":false},\"AllowSteal\":{\"ID\":\"20a7aeb3-05b9-4209-a2d0-d9548fdb0296\",\"Data\":false},\"DropOnDisable\":{\"ID\":\"dc826605-fda5-4b37-abe9-30539e010d6d\",\"Data\":true},\"ActiveUserFilter\":{\"ID\":\"eea57913-02c8-4772-a0b9-42104fb12a2a\",\"Data\":\"Disabled\"},\"OnlyUsers\":{\"ID\":\"b61709df-0c64-4366-b976-2d149b823b69\",\"Data\":[]},\"Scalable\":{\"ID\":\"ffd24607-47e5-461c-bd34-baee297ac949\",\"Data\":true},\"Receivable\":{\"ID\":\"efd5ceb3-8f3b-4def-8bb1-8f749b23444d\",\"Data\":true},\"AllowOnlyPhysicalGrab\":{\"ID\":\"d86e7a99-17ed-435c-b364-daeabae0146f\",\"Data\":false},\"_grabber\":{\"ID\":\"dcca3796-75f3-4d68-b9d0-782f61ecb5f1\",\"Data\":null},\"_lastParent\":{\"ID\":\"9a06087c-91e8-4371-845a-9f1859da16f8\",\"Data\":null},\"_lastParentIsUserSpace\":{\"ID\":\"a30b5a7a-1d5f-454d-9ca0-4eebcf84b065\",\"Data\":true},\"__legacyActiveUserRootOnly-ID\":\"3c42ae57-96c9-429e-97e2-7fe531c7d461\"}},{\"Type\":\"FrooxEngine.GizmoLink\",\"Data\":{\"ID\":\"8a48932e-a8b3-43f3-ae04-f76bc2d0370d\",\"persistent-ID\":\"790fe7cb-becf-4a93-a821-376ff292620d\",\"UpdateOrder\":{\"ID\":\"25774caf-d22e-419c-b52a-752f570e9da2\",\"Data\":0},\"Enabled\":{\"ID\":\"e19e3352-5485-4ba9-a0b3-399079bbb1a6\",\"Data\":true},\"_worker\":{\"ID\":\"fa94b49b-0790-4dde-b65a-f32bac7be989\",\"Data\":\"7e39ab4a-53aa-4a3a-b040-719b53175d65\"},\"_gizmo\":{\"ID\":\"cefd1903-21a3-41be-9e42-e43060d0081e\",\"Data\":null},\"_type\":{\"ID\":\"b024babe-07e0-4c2e-a5ce-aaed603f634e\",\"Data\":\"FrooxEngine.BoxMeshGizmo\"}}}]},\"Name\":{\"ID\":\"d80fc03e-2f08-47ea-8952-5bc467ba9b6a\",\"Data\":\"Box\"},\"Tag\":{\"ID\":\"ccc8fc1b-49e9-4b2f-8514-4c3cb4bff4e5\",\"Data\":null},\"Active\":{\"ID\":\"3276ac00-9e0d-4980-a7f6-fcb861f641e3\",\"Data\":true},\"Persistent-ID\":\"10d10bcd-eb9a-4884-8e23-ca42efb55699\",\"Position\":{\"ID\":\"9e82c434-744e-4a0b-89b2-409f0c14c264\",\"Data\":[1.98403692,0.5655997,-2.78400636]},\"Rotation\":{\"ID\":\"2b17bd33-7507-4276-a96b-db10f3009880\",\"Data\":[3.690762E-07,0.99759835,1.1669249E-07,0.0692657]},\"Scale\":{\"ID\":\"cd762833-699d-47d6-a1e6-5326aae29d2f\",\"Data\":[0.330464631,0.330464572,0.3304645]},\"OrderOffset\":{\"ID\":\"e0412853-4923-4875-b558-2f926b16d48c\",\"Data\":0},\"ParentReference\":\"04cc23c4-b84f-4716-81fd-e4daf69b0017\",\"Children\":[]},\"Assets\":[{\"Type\":\"FrooxEngine.PBS_Metallic\",\"Data\":{\"ID\":\"316086c4-6019-42ac-b5c5-8bf9f985abff\",\"persistent\":{\"ID\":\"36375742-27b7-42aa-b5c0-8dbec08a24d7\",\"Data\":true},\"UpdateOrder\":{\"ID\":\"d7249ded-4859-4f5d-9359-36a5c52268c7\",\"Data\":0},\"Enabled\":{\"ID\":\"bc7dfecf-34d7-422f-8b65-2766ad2edf38\",\"Data\":true},\"HighPriorityIntegration\":{\"ID\":\"7a81106b-19b1-4935-95e5-6a02440c1cf6\",\"Data\":false},\"_shader-ID\":\"44cc4a21-7d7a-4c6b-b2f9-ecddfd100231\",\"TextureScale\":{\"ID\":\"fedfce01-a72f-4773-8429-2b6aa3fa002b\",\"Data\":[1.0,1.0]},\"TextureOffset\":{\"ID\":\"3396e38c-0705-4c26-ab8b-afb86f5e19f8\",\"Data\":[0.0,0.0]},\"DetailTextureScale\":{\"ID\":\"f55ac7bf-7d75-48f1-a889-e42fe307406b\",\"Data\":[1.0,1.0]},\"DetailTextureOffset\":{\"ID\":\"e66dec47-1e48-4910-870e-cd1f899db772\",\"Data\":[0.0,0.0]},\"AlbedoColor\":{\"ID\":\"99cd107c-398a-46b1-bb5c-50967c9fd2c6\",\"Data\":[1.0,1.0,1.0,1.0]},\"AlbedoTexture\":{\"ID\":\"cbb8ba5d-ed31-4c1f-a4b3-001f87eb2561\",\"Data\":null},\"EmissiveColor\":{\"ID\":\"10ff55d5-4657-49eb-90b9-43281b993fbf\",\"Data\":[0.0,0.0,0.0,1.0]},\"EmissiveMap\":{\"ID\":\"1b229248-5ad8-429d-822d-9f492aca5b53\",\"Data\":null},\"NormalScale\":{\"ID\":\"501f0f85-f2f4-40ff-8f2e-32cb7f5c9167\",\"Data\":1.0},\"NormalMap\":{\"ID\":\"82e931b8-ca8c-4098-8527-e1dfa290dc81\",\"Data\":null},\"HeightMap\":{\"ID\":\"79e1c14b-d534-4f4a-b0d3-e7a603294249\",\"Data\":null},\"HeightScale\":{\"ID\":\"8d61d309-d680-49e9-81ef-3102493e0862\",\"Data\":0.02},\"OcclusionMap\":{\"ID\":\"33f4abf0-9cd4-478c-9edd-80fa644b6859\",\"Data\":null},\"DetailAlbedoTexture\":{\"ID\":\"32f94b36-eb61-4966-a7ed-3a49a85d9061\",\"Data\":null},\"DetailNormalMap\":{\"ID\":\"75f87c43-ed06-4378-9c73-59ab73a9593c\",\"Data\":null},\"DetailNormalScale\":{\"ID\":\"b09159e6-b95f-4483-b78f-641e7d814d2e\",\"Data\":1.0},\"BlendMode\":{\"ID\":\"4def1fce-843b-4c81-a87a-43f2907211db\",\"Data\":\"Opaque\"},\"AlphaCutoff\":{\"ID\":\"b5d5c13b-c4f2-4d5b-8527-c0308e39189f\",\"Data\":0.5},\"OffsetFactor\":{\"ID\":\"7a7d1732-97bc-4cd3-90c6-910855cfe565\",\"Data\":0.0},\"OffsetUnits\":{\"ID\":\"b389fc37-a187-4d78-aab1-ab2d0c59eafe\",\"Data\":0.0},\"RenderQueue\":{\"ID\":\"2d381439-ae0d-4373-841c-0743886c799a\",\"Data\":-1},\"Metallic\":{\"ID\":\"ca17ff36-e61f-4b84-9687-81cca126fd15\",\"Data\":0.0},\"Smoothness\":{\"ID\":\"7a13b587-821f-4f69-ba18-3b93eb026113\",\"Data\":0.25},\"MetallicMap\":{\"ID\":\"756d36ca-06b1-4359-ab81-02d2a5457093\",\"Data\":null}}}],\"TypeVersions\":{\"FrooxEngine.BoxCollider\":1,\"FrooxEngine.Grabbable\":2}}"
const w = new NeosJson("test")
const mago = w.getRootSlot().addSlot("Mago dayo").addSlot("Hi Magodayo")
// mago.attachComponent()
console.log(mago.Name.Data)
mago.Name.Data = "okikae sita yo"
console.log(mago.Name.Data)
console.log(NeosJsonUtil.exportJson(w))
