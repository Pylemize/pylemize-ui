import installer from "./defaults"

export * from "@pylemize-ui/components"
export * from "./make-installer"

export const install = installer.install

// 默认导出 installer，用于全局注册组件，如 app.use(PylemizeUI)
export default installer
