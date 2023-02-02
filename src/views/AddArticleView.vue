<script lang="ts" setup>
</script>

<template>
<header>
    <router-link to="/" class="backlink">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="Back"><path d="M14.5,22a1,1,0,0,1-.71-.29l-9-9a1,1,0,0,1,0-1.42l9-9a1,1,0,1,1,1.42,1.42L6.91,12l8.3,8.29a1,1,0,0,1,0,1.42A1,1,0,0,1,14.5,22Z"/></g></svg>
    </router-link>
    <h2>Add new link</h2>
    <fieldset class="select-save-type">
        <input type="radio" id="mc" name="Zahlmethode" value="Mastercard">
        <label for="mc">Link</label> 
        <input type="radio" id="vi" name="Zahlmethode" value="Visa">
        <label for="vi"> Visa</label>
        <input type="radio" id="ae" name="Zahlmethode" value="AmericanExpress">
        <label for="ae"> American Express</label> 
  </fieldset>
</header>
</template>

<style scoped>
.backlink svg {
    height: 1.5rem;
    width: 1.5rem;
    fill: var(--text-primary);
}
</style>
