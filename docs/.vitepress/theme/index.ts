// import { PButton } from "pylemize-ui"
import PylemizeUI from "../../../packages/pylemize-ui/index"
import Theme from "vitepress/theme"
import "./style.css"

// console.log(PButton)

export default {
  ...Theme,
  enhanceApp: ({ app }) => {
    app.use(PylemizeUI)
  }
}
