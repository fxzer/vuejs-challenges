<script setup lang='ts'>
/**
 * Implement the custom directive
 * Make sure the `onClick` method only gets triggered once when clicked many times quickly
 * And you also need to support the debounce delay time option. e.g `v-debounce-click:ms`
 *
 */
// function debounce(func: Function, wait: number) {
//   let timer: any
//   return (args) => {
//     if (timer)
//       return
//     func.call(this, args)
//     timer = setTimeout(() => {
//       clearTimeout(timer)
//       timer = null
//     }, wait)
//   }
// }
function debounce(func: Function, delay: number, immendiate: boolean) {
  let timer: any
  return function (...args: any) {
    if (timer)
      clearTimeout(timer)
    if (immendiate) {
      const doNow = !timer
      timer = setTimeout(() => {
        timer = null
      }, delay)
      if (doNow)
        func.apply(this, args)
    }
    else {
      timer = setTimeout(() => {
        func.apply(this, args)
      }, delay)
    }
  }
}
interface Binding {
  arg: number
  value: Function
}
const VDebounceClick = {
  mounted: (el, { arg: delay, value: callback }: Binding) => {
    el.addEventListener('click', debounce(callback, delay, true))
  },
  unmounted: (el, { arg: delay, value: callback }: Binding) => {
    el.removeEventListener('click', debounce(callback, delay, true))
  },
}

function onClick() {
  console.log('Only triggered once when clicked many times quickly')
}
</script>

<template>
  <button v-debounce-click:200="onClick">
    Click on it many times quickly
  </button>
</template>
