// 尺寸大小类型
export type SizeType = "tiny" | "small" | "medium" | "large"
// 尺寸大小类型列表
export const SizeTypeList = ["tiny", "small", "medium", "large"] as const

// 颜色类型
export type ColorType =
  | "primary"
  | "success"
  | "warning"
  | "error"
  | "info"
  | "default"
// 颜色类型列表
export const ColorTypeList = [
  "primary",
  "success",
  "warning",
  "error",
  "info",
  "default"
] as const

// class 类名集合类型
export type ClassList = (string | Record<string, unknown>)[]
