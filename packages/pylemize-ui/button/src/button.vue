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

<script setup lang="ts">
import { useButton } from "./use-button"
import { buttonProps, buttonEmits } from "./button"

defineOptions({
  name: "PButton"
})

// 初始化 props
const props = defineProps(buttonProps)
const emit = defineEmits(buttonEmits)

const { classList, styleList, handleClick } = useButton(props, emit)
</script>
