<script setup lang="ts">
import { inject, onBeforeUnmount, onMounted } from 'vue'

const timer = inject('timer') as { value: number | null }
const count = inject('count') as { value: number }

onMounted(() => {
  timer.value = window.setInterval(() => {
    count.value++
  }, 1000)
})

onBeforeUnmount(() => {
  timer.value && clearInterval(timer.value)
})
</script>

<template>
  <div>
    <p>
      Child Component: {{ count }}
    </p>
  </div>
</template>
