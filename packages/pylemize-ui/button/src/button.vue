<template>
  <button @click="clickHandle" type="button" style="border: 1px solid #000">
    点击看看
  </button>
</template>

<script setup lang="ts">
const clickHandle = () => {
  console.log("点击了按钮")
}
</script>

<script lang="ts">
export default {
  name: "PButton"
}
</script>
