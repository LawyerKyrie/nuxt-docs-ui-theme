<!-- components/MyCustomComponent.vue -->
<template>
  <div class="my-custom-component">
    <h2>{{ title }}</h2>
    <p><slot /></p>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'Default Title from MyCustomComponent'
  }
})
</script>
