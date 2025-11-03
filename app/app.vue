<script setup lang="ts">
const { seo } = useAppConfig()

const { data: navigation } = await useAsyncData('navigation', () => queryCollectionNavigation('docs'))
const { data: files } = useLazyAsyncData('search', () => queryCollectionSearchSections('docs'), {
  server: false
})

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

useSeoMeta({
  titleTemplate: `%s - ${seo?.siteName}`,
  ogSiteName: seo?.siteName,
  twitterCard: 'summary_large_image'
})

provide('navigation', navigation)
</script>

<!--
<script src="https://giscus.app/client.js"
        data-repo="LawyerKyrie/nuxt-docs-ui-theme"
        data-repo-id="R_kgDOQGEPng"
        data-category="Comments"
        data-category-id="DIC_kwDOQGEPns4CxXig"
        data-mapping="url"
        data-strict="1"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="preferred_color_scheme"
        data-lang="en"
        crossorigin="anonymous"
        async>
</script>
-->

<template>
  <UApp>
    <NuxtLoadingIndicator />

    <AppHeader />

    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>

    <!-- Added 28.10.2025 -->
    <BackToTop />

    <AppFooter />

    <ClientOnly>
      <LazyUContentSearch
        :files="files"
        :navigation="navigation"
      />
      <GithubComments />
    </ClientOnly>
  </UApp>
</template>
