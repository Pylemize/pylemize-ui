import { createApp } from "vue"
import "./style.css"
import App from "./App.vue"

// 开发阶段引入
import PylemizeUI from "pylemize-ui"
import "@pylemize-ui/theme"

// 打包阶段引入
// import PylemizeUI from "../../dist"
// import "../../dist/dist/index.css"

const app = createApp(App)
app.use(PylemizeUI)
app.mount("#app")
