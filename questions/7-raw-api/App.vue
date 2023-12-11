<script setup lang="ts">
import { isReactive, reactive, toRaw } from 'vue'

// const state = reactive({ count: 1 })
const state = { count: 1 }
const reactiveState = reactive(state)

/**
 * Modify the code so that we can make the output be true.
 */
// console.log(reactiveState === state)
console.log(toRaw(reactiveState) === state)

/**
 * Modify the code so that we can make the output be false.
 */
const info = { count: 1 }
const reactiveInfo = reactive(info)

console.log(isReactive(toRaw(reactiveInfo)))
</script>

<template>
  <div>
    <p>
      {{ reactiveState.count }}
    </p>
  </div>
</template>
