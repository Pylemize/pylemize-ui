import { isObject } from "lodash"
import { CSSProperties, camelize } from "vue"

// 类名分割成数组
export const classNameToArray = (cls = "") =>
  cls.split(" ").filter(item => !!item.trim())

// 判断是否含有指定类名
export const hasClass = (el: Element, cls: string): boolean => {
  if (!el || !cls) return false
  if (cls.includes(" ")) throw new Error("className should not contain space.")
  return el.classList.contains(cls)
}

// 添加类名
export const addClass = (el: Element, cls: string) => {
  if (!el || !cls.trim()) return
  el.classList.add(...classNameToArray(cls))
}

// 移除类名
export const removeClass = (el: Element, cls: string) => {
  if (!el || !cls.trim()) return
  el.classList.remove(...classNameToArray(cls))
}

// 设置 css 样式
export const setStyle = (
  element: HTMLElement,
  styleName: CSSProperties | keyof CSSProperties,
  value?: string | number
) => {
  if (!element || !styleName) return

  if (isObject(styleName)) {
    Object.entries(styleName).forEach(([prop, value]) =>
      setStyle(element, prop as keyof CSSProperties, value)
    )
  } else {
    const key: any = camelize(styleName)
    element.style[key] = value as any
  }
}

// 获取 css 样式
export const getStyle = (
  element: HTMLElement,
  styleName: keyof CSSProperties
): string => {
  let key = camelize(styleName)
  if (key === "float") key = "cssFloat"
  try {
    const style = (element.style as any)[key]
    if (style) return style
    const computed: any = document.defaultView?.getComputedStyle(element, "")
    return computed ? computed[key] : ""
  } catch {
    return (element.style as any)[key]
  }
}

// 生成 css 变量格式
export const getCssVarName = (name: string) => `var(${name})`
