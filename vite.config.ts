import { copyFileSync } from "fs"
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import dts from "vite-plugin-dts"
import { resolve } from "path"
import { name, version } from "./packages/pylemize-ui/package.json"

export default defineConfig({
  plugins: [
    vue(),
    /**
     * 打包类型
     *
     * @see vite-plugin-dts https://github.com/qmhc/vite-plugin-dts
     */
    dts({
      staticImport: true /** 是否将动态引入转换为静态 */,
      insertTypesEntry: true /** 是否生成类型声明入口 */,
      cleanVueFileName: true /** 是否将 '.vue.d.ts' 文件名转换为 '.d.ts' */,
      copyDtsFiles: true /** 是否将源码里的 .d.ts 文件复制到 outputDir */,
      include: ["./packages/pylemize-ui"],
      outDir: ["dist/es", "dist/lib"],
      /** 构建后回调钩子 */
      afterBuild: (): void => {
        move()
      }
    })
  ],
  build: {
    target: "modules" /** 这是指 支持原生 ES 模块、原生 ESM 动态导入 */,
    minify: true /** 压缩代码 */,
    outDir: resolve(__dirname, "./dist"),
    /**
     * 库模式
     *
     * @see 库模式 https://cn.vitejs.dev/guide/build.html#library-mode
     */
    lib: {
      entry: resolve(__dirname, "packages/pylemize-ui/index.ts"),
      name: "PylemizeUI"
    },
    rollupOptions: {
      external: ["vue"],
      output: [
        {
          name: "PylemizeUI",
          format: "umd",
          exports: "named",
          sourcemap: false,
          dir: "dist/dist",
          entryFileNames: "index.umd.js",
          chunkFileNames: "[name].js",
          assetFileNames: "[name].[ext]",
          manualChunks: undefined,
          inlineDynamicImports: false,
          globals: {
            vue: "Vue"
          } /** 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量 */
        },
        {
          format: "es",
          exports: "named",
          // entryFileNames: '[name].js',
          /**
           * 使用原始模块名作为文件名
           *
           * @see output.preserveModules https://cn.rollupjs.org/configuration-options/#output-preservemodules
           */
          preserveModules: true,
          dir: "dist/es",
          sourcemap: false,
          /**
           * 输出的 chunk文件名
           *
           * @see output.chunkfilenames https://cn.rollupjs.org/configuration-options/#output-chunkfilenames
           */
          chunkFileNames: "[name].js",
          /**
           * 输出资产文件名
           *
           * @see output.assetfilenames https://cn.rollupjs.org/configuration-options/#output-assetfilenames
           */
          assetFileNames: "[name].[ext]",
          /**
           * @see output.inlinedynamicimports https://cn.rollupjs.org/configuration-options/#output-inlinedynamicimports
           */
          inlineDynamicImports: false,
          /**
           * @see output.manualchunks https://cn.rollupjs.org/configuration-options/#output-manualchunks
           */
          manualChunks: undefined,
          /**
           * 是否允许在自动生成的代码片断中使用
           *
           * @see output.generatedCode.symbols https://cn.rollupjs.org/configuration-options/#output-generatedcode-symbols
           */
          generatedCode: {
            symbols: true
          },
          entryFileNames: (chunkInfo): string => {
            return `${chunkInfo.name.slice(
              0,
              chunkInfo.name.lastIndexOf("/") + 1
            )}index.js`
          }
          // preserveModulesRoot: 'src'
        },
        {
          format: "cjs",
          exports: "named",
          preserveModules: true,
          dir: "dist/lib",
          chunkFileNames: "[name].js",
          assetFileNames: "[name].[ext]",
          inlineDynamicImports: false,
          manualChunks: undefined,
          entryFileNames: (chunkInfo): string => {
            return `${chunkInfo.name.slice(
              0,
              chunkInfo.name.lastIndexOf("/") + 1
            )}index.js`
          },
          generatedCode: {
            symbols: true
          }
        }
      ]
    }
  }
})

/** 打包结束之后将一些静态文件进行移入 */
const move = (): void => {
  const files = [
    { input: "./README.md", outDir: "dist/README.md" },
    {
      input: "./packages/pylemize-ui/package.json",
      outDir: "dist/package.json"
    }
    // { input: "./LICENSE", outDir: "dist/LICENSE" }
  ] as const

  files.forEach((item): void => {
    copyFileSync(item.input, item.outDir)
  })

  console.warn("\n" + `${name} ${version} 版本打包成功 🎉🎉🎉` + "\n")
}
