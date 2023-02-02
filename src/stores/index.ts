import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getEntries, getTags } from '@/api'

export const useWallabagStore = defineStore('store', () => {
  const tags = ref([
    {"id":4,"label":"dev","slug":"dev","nbEntries":"1"}
  ]);
  const entries = ref(
    [
      {"is_archived":0,"is_starred":0,"user_name":"marianne","user_email":"marianne@westenthanner.de","user_id":2,"tags":[{"id":3,"label":"obsidian","slug":"obsidian"}],"is_public":false,"id":20,"uid":null,"title":"Dashboard++ — a simple organization and navigation method for Obsidian Vaults","url":"https://tfthacker.substack.com/p/dashboard-a-simple-organization-and-navigation-method-for-obsidian-vaults-2b1982d023a0","hashed_url":"4372f95aa12d9574d71b8541145ec0781b8e8a84","origin_url":null,"given_url":"https://tfthacker.substack.com/p/dashboard-a-simple-organization-and-navigation-method-for-obsidian-vaults-2b1982d023a0","hashed_given_url":"4372f95aa12d9574d71b8541145ec0781b8e8a84","archived_at":null,"content":"","created_at":"2023-01-29T12:19:48+0000","updated_at":"2023-01-29T12:19:54+0000","published_at":"2022-02-28T06:14:53+0000","published_by":["TfT Hacker"],"starred_at":null,"annotations":[{"user":null,"annotator_schema_version":"v1.0","id":1,"text":"This is an annotation.","created_at":"2023-01-29T14:33:09+0000","updated_at":"2023-01-29T14:33:09+0000","quote":"There are a few tweaks I like to make in Obsidian's settings to make Dashboard++ more useful. They are circled here:","ranges":[{"start":"/div[1]/p[43]","startOffset":"0","end":"/div[1]/p[43]","endOffset":"116"}]},{"user":null,"annotator_schema_version":"v1.0","id":2,"text":"Another annotation","created_at":"2023-01-29T14:34:16+0000","updated_at":"2023-01-29T14:34:16+0000","quote":"My goal was not to force some top-down structure but rather acknowledge that systems form naturally as relationships between notes are made.","ranges":[{"start":"/div[1]/p[3]","startOffset":"0","end":"/div[1]/p[3]","endOffset":"140"}]}],"mimetype":"text/html; charset=utf-8","language":"en","reading_time":17,"domain_name":"tfthacker.substack.com","preview_picture":"https://substackcdn.com/image/fetch/w_1200,h_600,c_limit,f_jpg,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Ff4169dbf-4408-4f1e-aad6-821219708361_800x428.jpeg","http_status":"200","headers":{"date":"Sun, 29 Jan 2023 12:19:48 GMT","content-type":"text/html; charset=utf-8","content-length":"272346","connection":"keep-alive","cf-ray":"7911eb121cc07178-DUS","accept-ranges":"bytes","age":"420","cache-control":"no-cache","etag":"W/\"427da-32lelMXSgoqzhC3jvTbaRfQfqSU\"","strict-transport-security":"max-age=31536000","vary":"Accept-Encoding","cf-cache-status":"HIT","x-cluster":"substack","x-frame-options":"sameorigin","x-powered-by":"Express","x-served-by":"Substack","set-cookie":"__cf_bm=3lnfL3cSn9sILbOGo1hc7LR_MHkmeVQAje_F7PNFBHk-1674994788-0-Afj0yK9 0CNyeOsopU5TgdUNooZy /yusKvudhAqx6UACpff3m2wosTpL5j7B4O/UVa6pfgK257 CInnbdzhHFo=; path=/; expires=Sun, 29-Jan-23 12:49:48 GMT; domain=.substack.com; HttpOnly; Secure; SameSite=None","server":"cloudflare","alt-svc":"h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400"},"_links":{"self":{"href":"/api/entries/20"}}}
    ]
  );

  function setTagsInStore() {
    getTags().then((response) => {
      tags.value = response.data
    })
  }

  function setEntriesInStore() {
    getEntries().then((response) => {
      entries.value = response.data._embedded.items
    })
  }

  function getEntryById(id: number) {
    return entries.value.find(item => item.id === id);
  }

  return {
    tags,
    entries,
    setTagsInStore,
    setEntriesInStore,
    getEntryById
  }
})
