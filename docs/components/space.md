# 间距 Space
下头组件，离我远点

## 基础用法
:::demo
```vue
<template>
  <p-space>
    <p-button>按钮</p-button>
    <p-button>按钮</p-button>
    <p-button>按钮</p-button>
  </p-space>
</template>
```
:::
## 不基础用法
### 垂直
:::demo
```vue
<template>
  <p-space vertical>
    <p-button>按钮</p-button>
    <p-button>按钮</p-button>
    <p-button>按钮</p-button>
  </p-space>
</template>
```
:::

### 集中精神
:::demo
```vue
<template>
  <p-space justify="center">
    <p-button>按钮</p-button>
    <p-button>按钮</p-button>
    <p-button>按钮</p-button>
  </p-space>
</template>
```
:::

### 靠右行驶
:::demo
```vue
<template>
  <p-space justify="end">
    <p-button>按钮</p-button>
    <p-button>按钮</p-button>
    <p-button>按钮</p-button>
  </p-space>
</template>
```
:::

### 均分的世界
:::demo
```vue
<template>
  <p-space justify="space-around">
    <p-button>按钮</p-button>
    <p-button>按钮</p-button>
    <p-button>按钮</p-button>
  </p-space>
</template>
```
:::

### 我觉得不够宽
:::demo
```vue
<template>
  <p-space :size="80">
    <p-button>按钮</p-button>
    <p-button>按钮</p-button>
    <p-button>按钮</p-button>
  </p-space>
</template>
```
:::

## API
### Space Props
| 名称 | 类型 | 默认值 | 可选值 | 说明 |
| --- | --- | --- | --- | --- |
| vertical | `Boolean` | `false` | `true \| false` | 是否垂直排列 |
| wrap | `Boolean` | `true` | `true \| false` | 是否换行
| align | `String` | `undefined` | `'top' \| 'middle' \| 'bottom' \| 'baseline'` | 侧轴对齐方式 |
| justify | `String` | `'start'` | `'start' \| 'center' \| 'end' \| 'space-around' \| 'space-between' \| 'space-evenly'` | 对齐方式 |
| size | `String \| Number` | `'medium'` | `'large' \| 'medium' \| 'small' \| number` | 间距大小 |

