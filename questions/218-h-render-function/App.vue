<script setup lang="ts">
import MyButton from './MyButton'

function onClick() {
  console.log('onClick')
}
</script>

<template>
  <MyButton type="submit" class="om" :disabled="false" @custom-click="onClick">
    my button
  </MyButton>
</template>
