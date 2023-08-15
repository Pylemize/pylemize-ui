import PylemizeUI from "../../../packages/pylemize-ui/index"
import "@pylemize-ui/theme"
import Theme from "vitepress/theme"
import "./style.scss"
import "vitepress-theme-demoblock/dist/theme/styles/index.css"
import Demo from "vitepress-theme-demoblock/dist/client/components/Demo.vue"
import DemoBlock from "vitepress-theme-demoblock/dist/client/components/DemoBlock.vue"

export default {
  ...Theme,
  enhanceApp: ({ app }) => {
    app.component("Demo", Demo)
    app.component("DemoBlock", DemoBlock)
    app.use(PylemizeUI)
  }
}
