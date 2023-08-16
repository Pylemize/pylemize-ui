import type { DefaultTheme, LocaleSpecificConfig } from "vitepress"

export const META_URL = "https://pylemize-ui.sion.ink"
export const META_TITLE = "Pylemize UI"
export const META_DESCRIPTION =
  "A Vue3 component library with a little bit, but not much"

export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  description: META_DESCRIPTION,
  themeConfig: {
    editLink: {
      pattern: "https://github.com/pylemize/pylemize-ui/docs/en/:path",
      text: "Suggest changes to this page"
    },
    nav: [
      { text: "Home", link: "/en/" },
      { text: "Docs", link: "/en/docs/", activeMatch: "^/en/docs/" },
      {
        text: "Components",
        link: "/en/components/button",
        activeMatch: "^/en/components/"
      }
    ],
    sidebar: {
      "/en/docs/": [
        {
          text: "Introduction",
          items: [
            {
              text: "Pylemize UI",
              link: "/en/docs/"
            }
          ]
        },
        {
          text: "Guide",
          items: [
            {
              text: "Install",
              link: "/en/docs/install"
            },
            {
              text: "Getting Started",
              link: "/en/docs/getting-started"
            }
          ]
        }
      ],
      "/en/components/": [
        {
          text: "Common Components",
          items: [
            {
              text: "Button",
              link: "/en/components/button"
            }
          ]
        },
        {
          text: "Layout Components",
          items: [
            {
              text: "Space",
              link: "/en/components/space"
            }
          ]
        }
      ]
    }
  }
}
