<script setup>
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <input v-model="value" type="text">
</template>
