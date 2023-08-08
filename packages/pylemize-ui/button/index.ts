import Button from "./src/button.vue"
import { install } from "../utils"

export const PButton = install(Button)
export type ButtonInstance = InstanceType<typeof Button>

export default PButton
