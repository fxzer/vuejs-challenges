<script setup lang="ts">
function click1() {
  console.log('click1')
}

function click2() {
  console.log('click2')
}
</script>

<template>
  <div @click="click1()">
    <div @click="click2()">
      click me
    </div>
  </div>
</template>
