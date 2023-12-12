<script setup lang='ts'>
defineProps({
  message: String,
})
</script>

<template>
  <span>{{ message || '' }}</span>
</template>
