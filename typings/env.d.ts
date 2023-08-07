/// <reference types="vite/client" />

/*
这段代码是TypeScript中的模块声明,用于扩展Vue单文件组件的类型定义。

具体来说:

/// <reference types="vite/client" />
引入了Vite中对客户端代码的类型定义,确保正确的上下文环境。

declare module "*.vue"
表示对所有*.vue后缀的文件,都进行以下的模块扩展声明。

import type { DefineComponent } from "vue"
从Vue中引入DefineComponent类型,用于类型注解。

const component: DefineComponent<{}, {}, any>
声明组件默认导出为DefineComponent类型,并且定义了空的props, emits以及任意的data/methods等返回值类型。

export default component
导出这个默认的组件对象。

这样,在任意引入*.vue文件时,都可以获取到类型完整的组件定义,方便进行类型推断和提示。

并且可以避免直接使用any等不明确的类型定义,提高类型严谨性。
*/

declare module "*.vue" {
  import type { DefineComponent } from "vue"
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
