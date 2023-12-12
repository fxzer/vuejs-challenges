<script setup lang='ts'>
import { type Directive, computed, ref, watchEffect } from 'vue'

/**
 * Implement the custom directive
 * Make sure the list item text color changes to red when the `toggleTab` is toggled
 *
 */
 type Binding = [CSSStyleDeclaration, () => boolean]

function handler(el: HTMLElement, binding: Binding) {
  const [activeStyles, activeCondition] = binding
  const isActive = computed(activeCondition)
  // const isActive = computed((): boolean => activeCondition())

  watchEffect(() => {
    for (const [key, value] of Object.entries(activeStyles))
      el.style[key] = isActive.value ? value : ''
  })
}

const VActiveStyle: Directive<HTMLElement, Binding> = {
  mounted(el, binding) {
    handler(el, binding.value)
  },
  updated(el, binding) {
    handler(el, binding.value)
  },
}

const list = [1, 2, 3, 4, 5, 6, 7, 8]
const activeTab = ref(0)
function toggleTab(index: number) {
  activeTab.value = index
}
</script>

<template>
  <ul>
    <li
      v-for="(item, index) in list"
      :key="index"
      v-active-style="[{ color: 'red' }, () => activeTab === index]"
      @click="toggleTab(index)"
    >
      {{ item }}
    </li>
  </ul>
</template>
