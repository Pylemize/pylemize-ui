<template>
  <div :class="classList" :style="styleList">
    <slot />
  </div>
</template>

<script lang="ts">
export default {
  name: "PSpace"
}
</script>

<script setup lang="ts">
import { useSpace } from "./use-space"
import { Props } from "./space"

const props = defineProps(Props)

const { classList, styleList } = useSpace(props)
</script>
