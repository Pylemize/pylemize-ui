import { isString, isNumber } from ".."

/**
 * 将数字尺寸改为字符串
 *
 * 有些 props 传入的参数可能是 string 或者 number 类型
 *
 * 这些数值需要转换成单位，所以默认 string 类型是有单位的，如 1px、20%
 *
 * 对于 number 类型的参数，就需要追加 target 类型的单位
 *
 * @param { string | number } size 尺寸
 * @param { string } [target = 'px'] 单位
 * @returns { string } 已经追加单位的字符串数值
 */
export const sizeToStr = (
  size: string | number | undefined,
  target = "px"
): string => {
  if (!size) return ""
  return isString(size) ? size : size + target
}

/**
 * 将字符串化的尺寸转为数字
 *
 * 例如: 12px => 12
 *
 * @see Number.parseFloat() https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/parseFloat
 *
 * @param { string | number } size 尺寸
 * @returns { number } 数字尺寸
 */
export const sizeToNum = (size: string | number): number => {
  if (!size) {
    return 0
  }
  if (isNumber(size)) {
    return size
  }
  return Number.parseFloat(size) || 0
}
