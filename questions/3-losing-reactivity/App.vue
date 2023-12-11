<script setup lang="ts">
import { reactive, toRefs } from 'vue'

function useCount() {
  const state = reactive({
    count: 0,
  })

  function update(value: number) {
    state.count = value
  }

  return {
    state: toRefs(state),
    // ...toRefs(state), // spread operator (...)
    update,
  }
}

// Ensure the destructured properties don't lose their reactivity
const { state: { count }, update } = useCount()
// const { count, update } = useCount()
</script>

<template>
  <div>
    <p>
      <span @click="update(count - 1)">-</span>
      {{ count }}
      <span @click="update(count + 1)">+</span>
    </p>
  </div>
</template>
