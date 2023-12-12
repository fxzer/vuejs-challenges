<script setup lang='ts'>
import { defineCustomElement, h, onMounted } from 'vue'
import vuejs from './VueJs'

/* 方案一： */
/**
 * Implement the code to create a custom element.
 * Make the output of page show "Hello Vue.js".
 */
// const VueJs = defineCustomElement({
//   props: {
//     message: {
//       type: String,
//       default: '',
//     },
//   },
//   setup: props => () => h('span', props.message),
// })

// customElements.define('vue-js', VueJs)

/* 方案二： */
const VueJs = defineCustomElement(vuejs)
customElements.define('vue-js', VueJs)

onMounted(() => {
  document.getElementById('app')!.innerHTML = '<vue-js message="Hello Vue.js"></vue-js>'
})
</script>

<template>
  <div id="app" />
</template>
