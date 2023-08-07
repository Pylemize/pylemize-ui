import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
// import VueMacros from "unplugin-vue-macros/vite"
// import Vue from "@vitejs/plugin-vue"

// https://vitejs.dev/config/
export default defineConfig({
  // plugins: [VueMacros({ plugins: { vue: Vue() } })]
  plugins: [vue()]
})
