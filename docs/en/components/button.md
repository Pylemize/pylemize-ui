# Button
Click, and then something happens.
## Demo
### Steady Button
Simple and Unadorned. Filled with Style
:::demo
```vue
<template>
  <p-space>
    <p-button type="default">Default</p-button>
    <p-button type="primary">Primary</p-button>
    <p-button type="success">Success</p-button>
    <p-button type="info">Info</p-button>
    <p-button type="warning">Warning</p-button>
    <p-button type="error">Error</p-button>
  </p-space>
</template>
```
:::

### Minimalist Button
Modern texture
:::demo
```vue
<template>
  <p-space>
    <p-button type="default" secondary>Default</p-button>
    <p-button type="primary" secondary>Primary</p-button>
    <p-button type="success" secondary>Success</p-button>
    <p-button type="info" secondary>Info</p-button>
    <p-button type="warning" secondary>Warning</p-button>
    <p-button type="error" secondary>Error</p-button>
  </p-space>
</template>
```
:::

### Simplified Button
Simplified Button
:::demo
```vue
<template>
  <p-space>
    <p-button type="default" tertiary>Default</p-button>
    <p-button type="primary" tertiary>Primary</p-button>
    <p-button type="success" tertiary>Success</p-button>
    <p-button type="info" tertiary>Info</p-button>
    <p-button type="warning" tertiary>Warning</p-button>
    <p-button type="error" tertiary>Error</p-button>
  </p-space>
</template>
```
:::

### Size
Just for fun, remember to check the size.
:::demo
```vue
<template>
  <p-space align="baseline">
    <p-button size="tiny">Medium</p-button>
    <p-button size="small">Large</p-button>
    <p-button size="medium">Super Large</p-button>
    <p-button size="large">Pro Max Plus Ultra</p-button>
  </p-space>
</template>
```
:::

### Disabled
:::demo
```vue
<template>
  <p-space>
    <p-button disabled>Default</p-button>
    <p-button type="primary" disabled>Primary</p-button>
    <p-button type="success" disabled>Success</p-button>
    <p-button type="info" disabled>Info</p-button>
    <p-button type="warning" disabled>Warning</p-button>
    <p-button type="error" disabled>Error</p-button>
  </p-space>
</template>
```
:::

## API
### Button Props
| Name | Default | Default | Value | Description |
| --- | --- | --- | --- | --- |
| type | `string` | `'default'` | `'default' \| 'primary' \| 'success' \| 'info' \| 'warning' \| 'error'` | Button type |
| size | `string` | `'medium'` | `'tiny' \| 'small' \| 'medium' \| 'large'` | Button size |
| secondary | `boolean` | `false` | `'true' \| 'false'` | minimalist button |
| tertiary | `boolean` | `false` | `'true' \| 'false'` | simplified button |
| disabled | `boolean` | `false` | `'true' \| 'false'` | disabled |
| nativeType | `string` | `button` | `'button' \| 'submit' \| 'reset'` | native type |

