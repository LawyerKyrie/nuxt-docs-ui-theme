export default defineAppConfig({
  ui: {
    colors: {
      primary: 'green',
      neutral: 'slate'
    },
    footer: {
      slots: {
        root: 'border-t border-default',
        left: 'text-sm text-muted'
      }
    }
  },
  seo: {
    siteName: 'Nuxt Docs UI Theme'
  },
  header: {
    title: '', // Insert of title removes AppLogo
    to: '/',
    logo: {
      alt: '',
      light: '',
      dark: ''
    },
    search: true,
    colorMode: true,
    // links: [{ /* Removed link to GitHub here */ }]
  },
  footer: {
    credits: `@LawyerKyrie • © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-discord',
      'to': 'https://go.nuxt.com/discord',
      'target': '_blank',
      'aria-label': 'Nuxt on Discord'
    }, {
      'icon': 'i-simple-icons-x',
      'to': 'https://go.nuxt.com/x',
      'target': '_blank',
      'aria-label': 'Nuxt on X'
    }, {
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/LawyerKyrie/nuxt-docs-ui-theme/',
      'target': '_blank',
      'aria-label': 'nuxt-docs-ui-theme on GitHub'
    }]
  },
  toc: {
    title: 'Table of Contents',
    bottom: {
      title: 'Community',
      edit: 'https://github.com/LawyerKyrie/nuxt-docs-ui-theme/content',
      links: [{
        icon: 'i-lucide-star',
        label: 'Star on GitHub',
        to: 'https://github.com/LawyerKyrie/nuxt-docs-ui-theme',
        target: '_blank'
      }, {
        icon: 'i-lucide-book-open',
        label: 'Nuxt UI docs',
        to: 'https://github.com/LawyerKyrie/nuxt-docs-ui-theme',
        target: '_blank'
      }]
    }
  },
  giscus: {
    repo: 'LawyerKyrie/nuxt-docs-ui-theme',
    repoId: 'R_kgDOQGEPng',
    category: 'Comments',
    categoryId: 'DIC_kwDOKfRikM4Capmi',
    mapping: 'url',
    inputPosition: 'bottom',
    theme: 'noborder_dark'
  }
})
