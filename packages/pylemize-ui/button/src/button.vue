<template>
  <button
    @click="handleClick"
    :class="classList"
    :style="styleList"
    type="button"
    :disabled="props.disabled"
  >
    <slot />
  </button>
</template>

<script lang="ts">
export default {
  name: "PButton"
}
</script>

<script setup lang="ts">
import { useButton } from "./use-button"
import { Props } from "./button"
import { toRefs } from "vue"
import { useRunFunction } from "../../_hooks"

const { runFunction } = useRunFunction()

// 初始化 props
const props = defineProps(Props)

const { classList, styleList } = useButton(props)

const handleClick = (e: MouseEvent) => {
  const { disabled } = toRefs(props)

  /** 按钮被禁用，或者处于 loading 状态时，不执行 click 方法 */
  if (disabled.value) {
    /**
     * 阻止默认行为
     *
     * @see event.preventDefault https://developer.mozilla.org/zh-CN/docs/Web/API/Event/preventDefault
     */
    e.preventDefault()
    return
  }
  runFunction(props.onClick, e)
}
</script>
