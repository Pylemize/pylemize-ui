import type { App, Component } from "vue"

export type Install<T> = T & {
  install(app: App): void
}

/**
 * 注册组件
 *
 * @param { Object } main 组件实例
 * @returns { Object } 组件实例
 */
export const install = <T extends Component>(main: T): Install<T> => {
  ;(main as Record<string, unknown>).install = (app: App): void => {
    const { name } = main
    name && app.component(name, main)
  }
  return main as Install<T>
}
