<script lang="ts" setup>
const props = defineProps(['msg'])
</script>

<template>
    <div class="error-message">
        <span>⛔</span>
        <span>{{ msg }}</span>
    </div>
</template>

<style scoped>
.error-message {
    color: var(--error);
    border: 1px solid var(--error);
    padding: 0.5rem;
    display: flex;
    gap: 0.5rem;
    border-radius: 0.5rem;
    margin-top: 1rem;
    font-size: 90%;
    line-height: 1.5;
}
</style>