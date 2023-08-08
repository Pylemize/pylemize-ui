import { createApp } from "vue"
import "./style.css"
import App from "./App.vue"
import PylemizeUI from "../../dist/es/pylemize-ui"

const app = createApp(App)
app.use(PylemizeUI)
app.mount("#app")
