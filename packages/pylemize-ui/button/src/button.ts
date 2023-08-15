import type { ExtractPropTypes } from "vue"
import {
  setBooleanProp,
  setStringNumberProp,
  setStringProp,
  setFunctionProp
} from "../../_utils"
import {
  SizeType,
  SizeTypeList,
  HandleMouseType,
  ColorType
} from "../../_types"

type ButtonNativeType = "button" | "submit" | "reset"
const ButtonNativeTypeList = ["button", "submit", "reset"] as const

export const Props = {
  /**
   * 按钮样式
   */
  type: setStringProp<ColorType>(),
  /**
   * 二级按钮
   */
  secondary: setBooleanProp(),
  /**
   * 二级按钮
   */
  tertiary: setBooleanProp(),
  /**
   * 文本按钮
   */
  text: setBooleanProp(),
  /**
   * 按钮颜色
   */
  color: setStringProp(),
  /**
   * 是否禁用
   */
  disabled: setBooleanProp(),
  /**
   * 是否为圆形
   */
  circle: setBooleanProp(),
  /**
   * 是否为圆角
   */
  round: setBooleanProp(),
  /**
   * 字体大小
   */
  fontSize: setStringNumberProp(),
  /**
   * 字体颜色
   */
  textColor: setStringProp(),
  /**
   * 按钮尺寸
   *
   * @values large medium small tiny
   */
  size: setStringProp<SizeType>(undefined, (value: SizeType): boolean => {
    return SizeTypeList.includes(value) // 判断是否为 SizeTypeList 中的值
  }),
  /**
   * 原生 type 属性
   *
   * @values button submit reset
   * @default button
   * @see type https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/button#attr-type
   */
  nativeType: setStringProp<ButtonNativeType>(
    "button",
    (value: ButtonNativeType): boolean => {
      return ButtonNativeTypeList.includes(value) // 判断是否为 ButtonNativeTypeList 中的值
    }
  ),
  onClick: setFunctionProp<HandleMouseType>()
} as const

export type ButtonProps = ExtractPropTypes<typeof Props>
