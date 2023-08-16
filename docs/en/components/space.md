# Space
Used for controlling the spacing between components

## Basic Usage
:::demo
```vue
<template>
  <p-space>
    <p-button>Button A</p-button>
    <p-button>Button B</p-button>
    <p-button>Button C</p-button>
  </p-space>
</template>
```
:::
## Not Basic Usage
### Vertical
:::demo
```vue
<template>
  <p-space vertical>
    <p-button>Button A</p-button>
    <p-button>Button B</p-button>
    <p-button>Button C</p-button>
  </p-space>
</template>
```
:::

### Center
:::demo
```vue
<template>
  <p-space justify="center">
    <p-button>Button A</p-button>
    <p-button>Button B</p-button>
    <p-button>Button C</p-button>
  </p-space>
</template>
```
:::

### End
:::demo
```vue
<template>
  <p-space justify="end">
    <p-button>Button A</p-button>
    <p-button>Button B</p-button>
    <p-button>Button C</p-button>
  </p-space>
</template>
```
:::

### Around
:::demo
```vue
<template>
  <p-space justify="space-around">
    <p-button>Button A</p-button>
    <p-button>Button B</p-button>
    <p-button>Button C</p-button>
  </p-space>
</template>
```
:::

### Custom Width
:::demo
```vue
<template>
  <p-space :size="80">
    <p-button>Button A</p-button>
    <p-button>Button B</p-button>
    <p-button>Button C</p-button>
  </p-space>
</template>
```
:::

## API
### Space Props
| Name | Type | Default | Value | Description |
| --- | --- | --- | --- | --- |
| vertical | `Boolean` | `false` | `true \| false` | Vertical Arrangement |
| wrap | `Boolean` | `true` | `true \| false` | Wrapping |
| align | `String` | `undefined` | `'top' \| 'middle' \| 'bottom' \| 'baseline'` | Cross-axis Alignment |
| justify | `String` | `'start'` | `'start' \| 'center' \| 'end' \| 'space-around' \| 'space-between' \| 'space-evenly'` | Main-axis Alignment |
| size | `String \| Number` | `'medium'` | `'large' \| 'medium' \| 'small' \| number` | Spacing Size |

