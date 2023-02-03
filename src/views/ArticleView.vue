<script lang="ts" setup>
import { useWallabagStore } from '@/stores';
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const articleId = useRoute().params.id;
const store = useWallabagStore();
const article = computed(() => store.getEntryById(+articleId));
</script>

<template>
    <header>
        <div>
            <router-link to="/" class="backlink">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="Back"><path d="M14.5,22a1,1,0,0,1-.71-.29l-9-9a1,1,0,0,1,0-1.42l9-9a1,1,0,1,1,1.42,1.42L6.91,12l8.3,8.29a1,1,0,0,1,0,1.42A1,1,0,0,1,14.5,22Z"/></g></svg>
            </router-link>
        </div>
        <div>
            <span>🤍</span>
            <span>✏️</span>
            <span>🔗</span>
        </div>
    </header>
    <h2>{{ article?.title }}</h2>
    <div class="content" v-html="article?.content"></div>
</template>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.backlink svg {
    height: 1.5rem;
    width: 1.5rem;
    fill: var(--text-primary);
}

.content {
    font-size: 1rem;
    line-height: 1.5;
}

img {
    max-width: 100%;
    max-height: auto;
}
</style>
