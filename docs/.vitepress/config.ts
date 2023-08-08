import { defineConfig } from "vitepress"
import { demoblockPlugin, demoblockVitePlugin } from "vitepress-theme-demoblock"

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
  markdown: {
    config: md => {
      md.use(demoblockPlugin)
    }
  },
  vite: {
    plugins: [demoblockVitePlugin()]
  }
})
