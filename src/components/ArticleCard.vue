<script lang="ts" setup>
const props = defineProps(['article'])
</script>

<template>
    <router-link :to="'/article/' + props.article?.id">
    <div class="article-card">
        <div class="article-image">
            <img :src="props.article?.preview_picture ? props.article?.preview_picture : '/link.svg'" />
        </div>
        <div>
            <p class="article-title">{{ props.article?.title }}</p>
            <div class="article-info">
                <span v-if="props.article?.reading_time !== 0">⏱️ {{ props.article?.reading_time }} min</span>
                <span v-if="props.article?.annotations.length !== 0">✏️ {{ props.article?.annotations.length }}</span>
            </div>
        </div>
    </div>
    </router-link>
</template>

<style scoped>
a {
    color: var(--text-primary);
}
.article-card {
    display: grid;
    grid-template-columns: 20% 1fr;
    gap: 1rem;
}

.article-image {
    aspect-ratio: 1 / 1;
    max-width: 4rem;
    max-height: 4rem;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}

.article-image img {
    height:100%;
    width: auto;
}

.article-title {
    margin-top: 0;
}

.article-info {
    font-size: 80%;
    color: var(--text-secondary);
    display: flex;
    gap: 1rem;
}
</style>
