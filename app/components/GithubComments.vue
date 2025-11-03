<!-- components/GithubComments.vue -->
<script setup lang="ts">
import Giscus from '@giscus/vue'
import { useOnline } from '@vueuse/core'
import { computed } from 'vue'
import { useRoute } from 'vue-router' // or just useRoute() which is auto-imported in Nuxt 3/4

const route = useRoute()

// Computed property to check if the current path is the root path ("/")
const isNotRootPage = computed(() => {
  return route.path !== '/'
})

const online = useOnline().value

const time2load = ref(false)
const timer = setTimeout(() => {
  time2load.value = true
  clearTimeout(timer)
}, 1200)
</script>

<template>
  <span
    v-if="online && isNotRootPage"
    class="relative"
  >
    <Giscus
      repo="LawyerKyrie/nuxt-docs-ui-theme"
      repo-id="R_kgDOQGEPng"
      category="Comments"
      category-id="DIC_kwDOQGEPns4CxXig"
      mapping="url"
      strict="1"
      reactions-enabled="1"
      emit-metadata="0"
      input-position="bottom"
      theme="noborder_dark"
      lang="en"
      crossorigin="anonymous"
      async
    />
  <!-- <ConfirmCookies v-if="time2load" /> -->
  </span>
</template>

<style scooped>
/*
Inserted in MardownPost.vue - it was given the best style.

sources:
https://giscus.app/
https://github.com/giscus/giscus-component/tree/main
https://www.freecodecamp.org/news/github-discussions-as-chat-system/
https://github.com/settings/installations/43603183
https://github.com/giscus/giscus-component/blob/main/vue/src/App.vue
input-position="bottom"
*/
</style>
