import { isArray, isObject, isString } from "@vue/shared"
import { isNil } from "lodash-unified"

export {
  isArray,
  isFunction,
  isObject,
  isString,
  isDate,
  isPromise,
  isSymbol
} from "@vue/shared"

// val is number 类型谓词，用以缩小类型范围
export const isNumber = (val: any): val is number =>
  typeof val === "number" && !isNaN(val)
