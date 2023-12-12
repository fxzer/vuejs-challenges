<script setup lang="ts">
defineOptions({
  name: 'TreeComponent',
})
defineProps<{ data: TreeData[] }>()
interface TreeData {
  key: string
  title: string
  children: TreeData[]
}
</script>

<template>
  <!-- do something.... -->
  <ul>
    <template v-for="item in data" :key="item.title">
      <li>
        <span>{{ item.title }}</span>
      </li>
      <TreeComponent :data="item.children" />
    </template>
  </ul>
</template>
