import { defineConfig } from "vitepress"
import { demoblockPlugin, demoblockVitePlugin } from "vitepress-theme-demoblock"
import { zhConfig } from "./config.zh"
import { enConfig } from "./config.en"

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
  title: "Pylemize UI",
  description: "Documentation site for pylemize-ui",
  themeConfig: {
    logo: "/logo.svg",
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2023-present Sioncovy"
    }
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
      label: "简体中文",
      link: "/",
      ...zhConfig
    },
    en: {
      lang: "en-US",
      label: "English",
      link: "/en/",
      ...enConfig
    }
  }
})
