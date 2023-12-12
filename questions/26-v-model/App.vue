<script setup lang='ts'>
import { defineExpose, ref } from 'vue'

/**
 * Implement a custom directive
 * Create a two-way binding on a form input element
 *
 */
// 将value 挂在到 instance 上面
// defineExpose({ value })

const value = ref('Hello Vue.js')
const VOhModel = {
  mounted(el, binding) {
    el.value = binding.value
    el.addEventListener('input', (e) => {
      // binding.instance.value = e.target.value
      value.value = e.target.value
    })
  },
}
</script>

<template>
  <input v-oh-model="value" type="text">
  <p>{{ value }}</p>
</template>
