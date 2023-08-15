import type { AppContext, Plugin } from "vue"
/*
这段代码是实现一个通用的mutable函数,可以把Readonly的数组或对象转换成可变的(Mutable)版本。

详细解释如下:

mutable函数接受一个泛型参数T,约束了T必须是readonly数组或对象类型。
函数返回值通过as断言把原始val转换成Mutable<typeof val>类型。
Mutable是一个通用的类型,作用是把参数T中的所有属性转换成非readonly的版本。
Mutable的实现:
使用了泛型keyof操作符获取T的所有key
然后对每个key P,使用 -readonly 修饰它,去掉readonly属性
这样就可以把原始类型T所有属性都转换成可写的版本
所以mutable函数的效果就是去掉T的全部readonly限制,返回一个相同结构的可变对象或数组。
在使用时,可以传入readonly数组或对象,mutable会返回非readonly可变版本。
这样,mutable就提供了一个简单实用的工具,可以轻松地在readonly和可变版本之间转换
*/
export const mutable = <T extends readonly any[] | Record<string, unknown>>(
  val: T
) => val as Mutable<typeof val>
export type Mutable<T> = { -readonly [P in keyof T]: T[P] }

export type SFCWithInstall<T> = T & Plugin

export type SFCInstallWithContext<T> = SFCWithInstall<T> & {
  _context: AppContext | null
}
