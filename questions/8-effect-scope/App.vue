<script setup lang="ts">
import { computed, effectScope, ref, watch, watchEffect } from 'vue'

const counter = ref(1)
const doubled = computed(() => counter.value * 2)

// use the `effectScope` API to make these effects stop together after being triggered once
/* 方案一： */
const scope = effectScope()
scope.run(() => {
  watch(doubled, () => {
    console.log(doubled.value)
  })
  watchEffect(() => console.log(`Count: ${doubled.value}`))
})
counter.value = 2
setTimeout(() => {
  scope.stop()
  counter.value = 4
})
/* 方案二： */
/* const stop = watch(doubled, () => {
  console.log(doubled.value)
  stop()
})
const unwatch = watchEffect(() => console.log(`Count: ${doubled.value}`))

counter.value = 2
setTimeout(() => {
  unwatch()
  counter.value = 4
}) */
</script>

<template>
  <div>
    <p>
      {{ doubled }}
    </p>
  </div>
</template>
