<script setup>
import { ref } from 'vue'

const theme = ref('red')

const colors = ['blue', 'yellow', 'red', 'green']

setInterval(() => {
  theme.value = colors[Math.floor(Math.random() * 4)]
}, 1000)
</script>

<template>
  <!-- <p>hello</p> -->
  <!-- 使用动态值绑定颜色 -->
  <p :style="{ color: theme }">
    hello
  </p>
</template>
<!--
<style scoped>
/* Modify the code to bind the dynamic color */
p {
  color: v-bind(theme);
}
</style>
 -->
