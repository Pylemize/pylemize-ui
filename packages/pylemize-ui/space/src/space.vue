<template>
  <div :class="classList" :style="styleList">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useSpace } from "./use-space"
import { Props } from "./space"

defineOptions({
  name: "PSpace"
})

const props = defineProps(Props)

const { classList, styleList } = useSpace(props)
</script>
