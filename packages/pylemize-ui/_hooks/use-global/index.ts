import { SizeType, ColorType, ColorTypeList, SizeTypeList } from "../../_types"
import { ComputedRef, computed } from "vue"

/**
 * useGlobal 所需要的 prop 参数类型接口
 *
 * @param { string } [type] 组件的类型
 * @param { string } [size] 组件的尺寸
 */
export interface UseGlobalProp {
  type: ColorType | null
  size: SizeType | string | number
}

/**
 * useGlobal 返回值类型接口
 *
 * @param { Function } getType 获取组件的类型
 * @param { Function } getSize 获取组件的尺寸
 */
export interface UseGlobalReturn {
  getType: (def?: ColorType) => ComputedRef<ColorType>
  getSize: (
    def?: SizeType
    // parentSize?: SizeType | null
  ) => ComputedRef<SizeType>
}

/**
 * 获取组件所需要的配置项，有组件内部的 prop、全局配置和默认值三个参数
 *
 * @param { Object } prop 组件的 prop
 * @returns { Object } 根据优先级返回需要的参数
 */
export const useGlobal = (props?: Partial<UseGlobalProp>): UseGlobalReturn => {
  /**
   * 获取组件的类型
   *
   * @param { string } def 默认参数
   * @returns { Object } 类型
   */
  const getType = (
    def: string | ColorType = "default"
  ): ComputedRef<ColorType> => {
    return computed((): ColorType => {
      // 没有传入组件 props 就返回传入的 def 值或默认值（default）
      if (!props) {
        return def as ColorType
      }
      // 校验传入的 props.type 是否合法，不合法则返回默认值（default）
      if (props.type && !ColorTypeList.includes(props.type)) {
        return def as ColorType
      }
      // 合法就优先返回传入的 props.type，不存在就返回传入的指定 type 值
      return (props.type || def) as ColorType
    })
  }

  /**
   * 获取组件的尺寸
   *
   * @param { string } def 默认参数
   * @param { string } [parentSize] 父组件可能需要注入的依赖项
   * @returns { Object } 尺寸
   */
  const getSize = (
    def: string | SizeType = "medium"
  ): ComputedRef<SizeType> => {
    return computed((): SizeType => {
      if (!props) {
        return def as SizeType
      }
      // 校验传入的 props.size 是否合法，不合法则返回默认值（medium）
      if (props.size && !SizeTypeList.includes(props.size as SizeType)) {
        return def as SizeType
      }
      return (props.size || def) as SizeType
    })
  }

  return {
    getType,
    getSize
  }
}
