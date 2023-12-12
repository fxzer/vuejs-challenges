<script setup>
import { ref, vModelText } from 'vue'

const _vModelText = vModelText

_vModelText.updated = (el, { value, modifiers: { capitalize } }) => {
  if (capitalize && value.hasOwnProperty(0))
    el.value = value[0].toUpperCase() + value.substr(1)
}

const value = ref('')
</script>

<template>
  <input v-model.capitalize="value" type="text">
</template>
