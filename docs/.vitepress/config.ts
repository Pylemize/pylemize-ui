import { defineConfig } from "vitepress"
import { demoblockPlugin, demoblockVitePlugin } from "vitepress-theme-demoblock"
import { nav } from "./config/nav"
import { sidebar } from "./config/side-bar"

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
  title: "Pylemize UI",
  description: "Documentation site for pylemize-ui",
  themeConfig: {
    logo: { src: "/logo.svg" },
    nav,
    sidebar
  },
  markdown: {
    config: md => {
      md.use(demoblockPlugin)
    }
  },

  vite: {
    plugins: [demoblockVitePlugin()]
  },
  lastUpdated: true,
  locales: {
    root: {
      lang: "zh-CN",
      label: "简体中文"
    },
    en: {
      lang: "en",
      label: "English"
    }
  }
})
