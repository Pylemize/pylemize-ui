import { ExtractPropTypes } from "vue"
import {
  setBooleanProp,
  setStringNumberProp,
  setStringProp
} from "../../_utils"

export const justifyValues = [
  "start",
  "end",
  "center",
  "space-around",
  "space-between",
  "space-evenly"
] as const
export type JustifyValueType = (typeof justifyValues)[number]

export const alignValues = ["top", "middle", "bottom", "baseline"] as const
export type AlignValueType = (typeof alignValues)[number]

export const Props = {
  /**
   * 间距大小，单位为 px，默认为 medium（8px）
   */
  size: setStringNumberProp("medium"),
  /**
   * 是否垂直排列，默认为 false
   * @default false
   */
  vertical: setBooleanProp(),
  /**
   * 是否换行，默认为 true
   * @default true
   */
  wrap: setBooleanProp(true),
  /**
   * 主轴对齐方式，默认为 start
   * @default start
   */
  justify: setStringProp("start", (value: JustifyValueType): boolean => {
    return justifyValues.includes(value)
  }),
  /**
   * 侧轴对齐方式，默认为 undefined
   */
  align: setStringProp(undefined, (value: AlignValueType): boolean => {
    return alignValues.includes(value)
  })
} as const

export type SpaceProps = ExtractPropTypes<typeof Props>
