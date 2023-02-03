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
        </div>
    </header>
    <h2>{{ article?.title }}</h2>
    <div class="article-link">
      <span class="icon">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18,10.82a1,1,0,0,0-1,1V19a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V8A1,1,0,0,1,5,7h7.18a1,1,0,0,0,0-2H5A3,3,0,0,0,2,8V19a3,3,0,0,0,3,3H16a3,3,0,0,0,3-3V11.82A1,1,0,0,0,18,10.82Zm3.92-8.2a1,1,0,0,0-.54-.54A1,1,0,0,0,21,2H15a1,1,0,0,0,0,2h3.59L8.29,14.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L20,5.41V9a1,1,0,0,0,2,0V3A1,1,0,0,0,21.92,2.62Z" /></svg>
      </span>
      <a target="_blank" :href="article?.url">{{ article?.url }}</a>
    </div>
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

.article-link {
    margin: 1rem 0;
    border-radius: 0.5rem;
    border: 1px solid var(--accent-primary);
    font-size: 80%;
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
}

.article-link a {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.icon {
    margin-right: 0.5rem;
}

.icon svg {
    width: 0.8rem;
    height: 0.8rem;
    fill: var(--text-primary);
}
</style>
