# 按钮 Button
点一下，然后嘿嘿
## 演示
### 沉稳的按钮
朴实、无华。充满格调
:::demo
```vue
<template>
  <p-space>
    <p-button type="default">首先默认</p-button>
    <p-button type="primary">比较主要</p-button>
    <p-button type="success">好耶胜利</p-button>
    <p-button type="info">冷漠信息</p-button>
    <p-button type="warning">小心警告</p-button>
    <p-button type="error">噔噔咚！</p-button>
  </p-space>
</template>
```
:::

### 简约的按钮
现代质感
:::demo
```vue
<template>
  <p-space>
    <p-button type="default" secondary>首先默认</p-button>
    <p-button type="primary" secondary>比较主要</p-button>
    <p-button type="success" secondary>好耶胜利</p-button>
    <p-button type="info" secondary>冷漠信息</p-button>
    <p-button type="warning" secondary>小心警告</p-button>
    <p-button type="error" secondary>噔噔咚！</p-button>
  </p-space>
</template>
```
:::

### 精简的按钮
极简主义
:::demo
```vue
<template>
  <p-space>
    <p-button type="default" tertiary>首先默认</p-button>
    <p-button type="primary" tertiary>比较主要</p-button>
    <p-button type="success" tertiary>好耶胜利</p-button>
    <p-button type="info" tertiary>冷漠信息</p-button>
    <p-button type="warning" tertiary>小心警告</p-button>
    <p-button type="error" tertiary>噔噔咚！</p-button>
  </p-space>
</template>
```
:::

### 尺寸
逗你的，记得看看 size
:::demo
```vue
<template>
  <p-space align="baseline">
    <p-button size="tiny">中杯</p-button>
    <p-button size="small">大杯</p-button>
    <p-button size="medium">超大杯</p-button>
    <p-button size="large">Pro Max Plus Ultra</p-button>
  </p-space>
</template>
```
:::

### 禁用
:::demo
```vue
<template>
  <p-space>
    <p-button disabled>首先默认</p-button>
    <p-button type="primary" disabled>比较主要</p-button>
    <p-button type="success" disabled>好耶胜利</p-button>
    <p-button type="info" disabled>冷漠信息</p-button>
    <p-button type="warning" disabled>小心警告</p-button>
    <p-button type="error" disabled>噔噔咚！</p-button>
  </p-space>
</template>
```
:::

## API
### Button Props
| 名称 | 类型 | 默认值 | 可选值 | 说明 |
| --- | --- | --- | --- | --- |
| type | `string` | `'default'` | `'default' \| 'primary' \| 'success' \| 'info' \| 'warning' \| 'error'` | 按钮的类型 |
| size | `string` | `'medium'` | `'tiny' \| 'small' \| 'medium' \| 'large'` |按钮的尺寸 |
| secondary | `boolean` | `false` | `'true' \| 'false'` | 是否为简约按钮 |
| tertiary | `boolean` | `false` | `'true' \| 'false'` | 是否为精简按钮 |
| disabled | `boolean` | `false` | `'true' \| 'false'` | 是否禁用按钮 |
| onClick | `function` | `() => {}` | - | 点击按钮时触发的事件 |
