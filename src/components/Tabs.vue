<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useWallabagStore } from '@/stores/index'

const { tags } = storeToRefs(useWallabagStore())
</script>

<template>
    <nav>
        <ul>
            <li class="active">All</li>
            <li v-for="tag in tags">#{{ tag.label }}</li>
        </ul>
    </nav>
</template>

<style scoped>
ul {
    display: flex;
    gap: 2rem;
    padding-left: 0;
    padding-bottom: 1rem;
    overflow-x: scroll;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}

ul::-webkit-scrollbar {
  display: none;
}

ul li {
    list-style-type: none;
    text-transform: uppercase;
    font-size: 80%;
    color: var(--text-secondary);
    font-weight: 400;
}

.active {
    color: var(--text-primary);
    font-weight: 600;
}
</style>
