<script lang="ts" setup>
import { onMounted } from 'vue';
import { RouterView } from 'vue-router'
import { useWallabagStore } from './stores';

const store = useWallabagStore();

onMounted(() => {
  store.setTagsInStore()
  store.setEntriesInStore()
})
</script>

<template>
  <RouterView />
</template>

<style scoped>
</style>
