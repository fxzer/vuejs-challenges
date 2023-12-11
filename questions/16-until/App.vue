<script setup lang='ts'>
import { ref, watch, watchEffect } from 'vue'

const count = ref(0)

/**
 * Implement the until function
 */

function until(initial) {
  function toBe(value) {
    return new Promise<void>((resolve) => {
      // watch
    /*   const unwatch = watch(initial, (newVal) => {
        if ((newVal === value)) {
          unwatch()
          resolve()
        }
      }) */
      // watchEffect
      const unwatch = watchEffect(() => {
        if (initial.value === value) {
          unwatch()
          resolve()
        }
      })
    })
  }

  return {
    toBe,
  }
}

async function increase() {
  count.value = 0
  setInterval(() => {
    count.value++
  }, 1000)
  await until(count).toBe(3)
  console.log(count.value === 3) // Make sure the output is true
}
</script>

<template>
  <p @click="increase">
    Increase
  </p>
</template>
