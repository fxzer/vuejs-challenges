<script setup>
const msg = 'Hello World'
</script>

<template>
  <!-- Renders it to a child element of the `body` -->
  <!-- 使用 teleport 将内容渲染到 body 的子元素中 -->
  <teleport to="body">
    <span>{{ msg }}</span>
  </teleport>
</template>
