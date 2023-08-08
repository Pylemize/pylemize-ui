import * as components from "./components"
import type { App } from "vue"
import { objectEntries } from "./utils/compatible"
import { version } from "./package.json"

/**
 * 注册组件
 *
 * @param { Object } app 应用实例
 * @returns { Object } 应用实例
 */
const install = (app: App): App => {
  /**
   * 注册组件
   *
   * @see registration https://cn.vuejs.org/guide/components/registration.html
   * @see Array.prototype.forEach() https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
   */
  objectEntries(components).forEach(([key, value]): void => {
    app.component(key, value)
  })

  return app
}

export default {
  version,
  install
}
