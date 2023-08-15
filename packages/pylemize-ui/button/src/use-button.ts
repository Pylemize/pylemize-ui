import type { ClassList } from "../../_types"
import { CSSProperties, Slots, ComputedRef, useSlots, computed } from "vue"
import type { ButtonProps } from "./button"
import { useColor, useGlobal } from "../../_hooks"
import { sizeToStr } from "../../_utils"

/**
 * useButton 返回值类型接口
 *
 * @param { Object } classList 类名列表
 * @param { Object } styleList 样式列表
 */
export interface UseButtonReturn {
  classList: ComputedRef<ClassList>
  styleList: ComputedRef<CSSProperties>
}

export const useButton = (props: ButtonProps): UseButtonReturn => {
  // 获取插槽
  const slot: Slots = useSlots()

  const { getType, getSize } = useGlobal(props)

  /**
   * 检测是否带有默认插槽
   *
   * 如果没有则返回真
   *
   * 用于限制前后 icon 的意外边距
   */
  const isIconButton = computed(
    (): boolean =>
      !(slot.default && slot.default() && slot.default()[0].children)
  )

  // 类名列表
  const classList = computed((): ClassList => {
    return [
      "p-button",
      `p-button__${getSize("medium").value}`,
      // 以对象的形式赋予类名，值为真则 vue 添加该类，值为假则不添加
      {
        // 动态属性 [变量]: 值
        [`p-button__${getType().value}`]: !props.color && getType().value,
        "p-button__secondary": props.secondary,
        "p-button__tertiary": props.tertiary,
        "p-button__text": props.text,
        "p-button__round": props.round,
        "p-button__disabled": props.disabled
      }
    ]
  })

  // 样式列表
  const styleList = computed((): CSSProperties => {
    const { fontSize, textColor, color } = props

    // 如果自定义了颜色，则优先使用自定义颜色
    if (props.color) {
      const { getLight, getDark } = useColor(props.color)

      return {
        "--button-background": color || null,
        "--button-hover": color ? getLight(0.4) : null,
        "--button-active": color ? getDark(0.2) : null,
        "--button-color": textColor,
        "--button-font-size": sizeToStr(fontSize)
      } as CSSProperties
    }

    return {
      "--button-color": textColor,
      "--button-font-size": sizeToStr(fontSize)
    } as CSSProperties
  })

  return { classList, styleList }
}
