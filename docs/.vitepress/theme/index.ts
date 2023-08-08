import { PButton } from "../../../packages/pylemize-ui/button"
import PylemizeUI from "pylemize-ui"
import Theme from "vitepress/theme"

console.log(PButton)

export default {
  ...Theme,
  enhanceApp: ({ app }) => {
    app.use(PylemizeUI)
  }
}
