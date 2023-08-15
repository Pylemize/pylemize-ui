import Space from "./src/space.vue"
import { install } from "../_utils"

export const PSpace = install(Space)
export type SpaceInstance = InstanceType<typeof Space>

export default PSpace
