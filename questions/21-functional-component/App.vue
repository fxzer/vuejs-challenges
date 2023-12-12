<script setup lang='ts'>
import { h, ref } from 'vue'

/**
 * Implement a functional component :
 * 1. Render the list elements (ul/li) with the list data
 * 2. Change the list item text color to red when clicked.
 */
function ListComponent(props, { emit }) {
  return h(
    'ul',
    props.list.map((i, index) => h(
      'li',
      {
        key: index,
        style: index === props.activeIndex ? { color: 'red' } : null,
        onClick: () => { emit('toggle', index) },
      },
      i.name,
    )),
  )
}

ListComponent.props = ['list', 'active-index']
ListComponent.emits = ['toggle']

const list = [{
  name: 'John',
}, {
  name: 'Doe',
}, {
  name: 'Smith',
}]

const activeIndex = ref(0)

function toggle(index: number) {
  activeIndex.value = index
}
</script>

<template>
  <ListComponent
    :list="list"
    :active-index="activeIndex"
    @toggle="toggle"
  />
</template>
