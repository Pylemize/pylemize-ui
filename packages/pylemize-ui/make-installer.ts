import type { App, Plugin } from "@vue/runtime-core"

interface Component {
  name: string
}

export const makeInstaller = (components: Component[] = []) => {
  const install = (app: App) => {
    components.forEach(c => app.component(c.name, c))
  }

  return {
    // TODO: 添加导出 version
    install
  }
}
