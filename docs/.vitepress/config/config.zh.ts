import type { DefaultTheme, LocaleSpecificConfig } from "vitepress"

export const META_URL = "https://pylemize-ui.sion.ink"
export const META_TITLE = "Pylemize UI"
export const META_DESCRIPTION = "一个有点东西但还不多的 Vue3 组件库"

export const zhConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  description: META_DESCRIPTION,
  themeConfig: {
    editLink: {
      pattern: "https://github.com/pylemize/pylemize-ui/docs/:path",
      text: "对本页提出修改建议"
    },
    lastUpdated: {
      text: "上次更新"
    },
    // 右侧大纲标题
    outline: {
      label: "本页内容"
    },
    // 文档底部导航
    docFooter: {
      prev: "上一页",
      next: "下一页"
    },
    nav: [
      { text: "首页", link: "/" },
      { text: "文档", link: "/docs/" },
      { text: "组件", link: "/components/button" }
    ],
    sidebar: {
      "/docs/": [
        {
          text: "介绍",
          items: [
            {
              text: "Pylemize UI",
              link: "/docs/"
            }
          ]
        },
        {
          text: "指北",
          items: [
            {
              text: "安装",
              link: "/docs/install"
            },
            {
              text: "开始",
              link: "/docs/getting-started"
            }
          ]
        }
      ],
      "/components/": [
        {
          text: "通用组件",
          items: [
            {
              text: "按钮 Button",
              link: "/components/button"
            }
          ]
        },
        {
          text: "布局组件",
          items: [
            {
              text: "间距 Space",
              link: "/components/space"
            }
          ]
        }
      ]
    }
  }
}
