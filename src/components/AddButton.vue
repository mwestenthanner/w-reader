<script lang="ts" setup>
</script>

<template>
    <div class="add-button">
        <router-link to="/add-article" class="add-button-link">
            <svg class="feather feather-plus" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="5" y2="19"/><line x1="5" x2="19" y1="12" y2="12"/></svg>
        </router-link>
    </div>
</template>

<style scoped>
.add-button {
    position: fixed;
    bottom: 3rem;
    right: 2rem;
}

.add-button-link {
    background-color: var(--accent-primary);
    height: 3rem;
    width: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
}

.add-button-link svg {
    stroke: var(--background);
}
</style>