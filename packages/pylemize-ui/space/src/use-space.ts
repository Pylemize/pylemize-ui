import { CSSProperties, ComputedRef, computed } from "vue"
import type { ClassList } from "../../_types"
import { isArray, isNumber, isString, sizeToStr } from "../../_utils"
import { SpaceProps } from "./space"
import { useGlobal } from "../../_hooks"

/**
 * useSpace 返回值类型接口
 */
export interface UseSpaceReturn {
  classList: ComputedRef<ClassList>
  styleList: ComputedRef<CSSProperties>
}

export const useSpace = (props: SpaceProps): UseSpaceReturn => {
  const { getSize } = useGlobal(props)

  const classList = computed((): ClassList => {
    const list = []

    return [
      "p-space",
      {
        [`p-space__${getSize().value}`]:
          !isNumber(props.size) && getSize().value,
        "p-space__wrap": props.wrap,
        "p-space__vertical": props.vertical
      }
    ]
  })
  const styleList = computed((): CSSProperties => {
    let list = {}
    if (!props) {
      return list
    }
    // 如果指定了 size 属性
    if (props.size) {
      if (isNumber(props.size)) {
        // 如果 size 是数字
        Object.assign(list, {
          "--space-column-gap": `${props.size}px`,
          "--space-row-gap": `${props.size}px`
        })
      } else if (isArray(props.size)) {
        // 如果 size 是数组，且都是数字（分别设置列间距和行间距）
        if (isNumber(props.size[0]) && isNumber(props.size[1])) {
          Object.assign(list, {
            "--space-column-gap": `${props.size[0]}px`,
            "--space-row-gap": `${props.size[1]}px`
          })
        }
      }
    }
    Object.assign(list, {
      "--space-align": props.align,
      "--space-justify": props.justify
    })
    return list
  })
  return {
    classList,
    styleList
  }
}
