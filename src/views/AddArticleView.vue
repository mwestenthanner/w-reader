<script lang="ts" setup>
import { ref } from 'vue';
import Multiselect from '@vueform/multiselect';
import { storeToRefs } from 'pinia';
import { useWallabagStore } from '@/stores/index'
import { toOptions } from '@/utils/multiselect'
import ErrorMessage from '@/components/ErrorMessage.vue';

const store = useWallabagStore();
const { tags } = storeToRefs(store);

const contentType = ref('Content');
const selectedTags = ref();
const link = ref();
const title = ref();
const note = ref();

const errorMessage = ref();

function pasteFromClipboard() {
  navigator.clipboard.readText().then((text) => {
    link.value = text;
  });
}

function isValidUrl() {
  try {
    new URL(link.value);
    return true;
  } catch (err) {
    return false;
  }
}

function saveArticle() {

    // validate link
    if (!isValidUrl()) {
        errorMessage.value = "Please enter a valid URL."
    } else

    // if content type is note, note content and title are required
    if (contentType.value == 'Note' && (!title.value || !note.value)) {
        errorMessage.value = "To save a note with your URL, you need to enter a title and a note."
    } else {
        errorMessage.value = ''
        // if content type is note, add "note" to tags
        if (contentType.value == 'Note') {
            selectedTags.value.push('note');
        }

        // send data to Wallabag
        store.addEntryToStore(link.value, title.value, note.value, selectedTags.value)
    }
}
</script>

<template>
<header>
    <router-link to="/" class="backlink">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="Back"><path d="M14.5,22a1,1,0,0,1-.71-.29l-9-9a1,1,0,0,1,0-1.42l9-9a1,1,0,1,1,1.42,1.42L6.91,12l8.3,8.29a1,1,0,0,1,0,1.42A1,1,0,0,1,14.5,22Z"/></g></svg>
    </router-link>
</header>
<main>
    <h2>Add new link</h2>
    <fieldset class="select-save-type">
        <input type="radio" id="content" name="ContentType" value="Content" v-model="contentType">
        <label for="content">Save page content</label> 
        <input type="radio" id="note" name="ContentType" v-model="contentType" value="Note">
        <label for="note">Save note</label>
    </fieldset>
    <div class="link">
        <input class="link-input" type="text" placeholder="Link" v-model="link" /><span class="paste-from-clipboard" @click="pasteFromClipboard()">📋</span>
    </div>
    <input class="title-input" type="text" placeholder="Title - pre-populate from link" v-model="title" />
    <textarea placeholder="Note" v-if="contentType == 'Note'" v-model="note" />
    <Multiselect
        v-model="selectedTags"
        mode="tags"
        placeholder="Tags"
        :options="toOptions(tags)"
        :close-on-select="false"
        :searchable="true"
        :create-option="true"
    />
    <button @click="saveArticle()">
        <svg class="feather feather-download" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
        <span>Save link</span>
    </button>
    <ErrorMessage :msg="errorMessage" v-if="errorMessage" />
</main>
</template>

<style src="@vueform/multiselect/themes/default.css"></style>

<style scoped>
.backlink svg {
    height: 1.5rem;
    width: 1.5rem;
    fill: var(--text-primary);
}

.select-save-type {
    border: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
}

.select-save-type input[type="radio"] {
    display: none;
}

.select-save-type label {
    border: 1px solid var(--text-primary);
    padding: 0.3rem;
    font-size: 80%;
    text-align: center;
    border-radius: 0.5rem;
}

.select-save-type input[type="radio"]:checked+label {
    border-color: var(--accent-primary);
    background-color: var(--accent-primary);
    color: var(--background);
}

textarea {
    margin-top: 1rem;    
    height: 200px;
    width: 90%;
}

.link {
    display: grid;
    grid-template-columns: 1fr 2.5rem;
    margin-top: 1rem;    
    width: 100%;
    grid-gap: 0.2rem;
}

.link-input {
    border-radius: 0.5rem 0 0 0.5rem;
}

.paste-from-clipboard {
    background-color: var(--accent-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0 0.5rem 0.5rem 0;
}

.title-input {
    margin-top: 1rem; 
    width: 90%;
}

.multiselect {
    margin-top: 1rem;
    font-size: 100%;
    font-weight: 400;
}

button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    font-size: 100%;
    gap: 0.5rem;
    width: 100%;
}

button svg {
    height: 1rem;
    width: 1rem;
    stroke: var(--background);
}
</style>
