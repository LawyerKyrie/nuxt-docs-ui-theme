<!-- components/GithubComments.vue -->
<script setup lang="ts">
import Giscus from '@giscus/vue' 
// import { useOnline } from '@vueuse/core'
// const online = useOnline().value

const appConfig = useAppConfig() as any

const time2load = ref(false)
const timer = setTimeout(() => {
  time2load.value = true
  clearTimeout(timer)
}, 1200)
</script>

<template>
  <!--
  <span
    v-if="online"
    class="relative"
  >
  -->
  <div>
    <Giscus
      :repo="appConfig.giscus.repo"
      :repo-id="appConfig.giscus.repoId"
      category="Comments"
      :category-id="appConfig.giscus.categoryId"
      :mapping="appConfig.giscus.mapping"
      :input-position="appConfig.giscus.inputPosition"
      :theme="appConfig.giscus.theme"
      strict="1"
      reactions-enabled="1"
      emit-metadata="0"
      lang="en"
      crossorigin="anonymous"
      loading="lazy"
      async
    />
  </div>
 
  <!-- <ConfirmCookies v-if="time2load" /> -->
  <!-- </span> -->
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
