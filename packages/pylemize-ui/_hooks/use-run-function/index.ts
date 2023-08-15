import { isFunction } from "../../_utils/types"

/**
 * useRunFunction 返回值类型接口
 *
 * @param { Function } runFunction 要运行的函数
 */
export interface UseRunFunctionReturn {
  runFunction: <T extends Function>(
    callback: T | null | undefined,
    ...args: unknown[]
  ) => void
}

/**
 * 执行函数
 *
 * @returns { UseRunFunctionReturn } 运行函数
 */
export const useRunFunction = (): UseRunFunctionReturn => {
  /**
   * 运行函数
   *
   * @param { Function } callback 要运行的函数
   * @param { * } args 函数参数
   */
  const runFunction = <T extends Function>(
    callback: T | null | undefined,
    ...args: unknown[]
  ): void => {
    if (isFunction(callback)) {
      callback(...args)
    }
  }

  return {
    runFunction
  }
}
