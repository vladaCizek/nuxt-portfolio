<template>
  <div class="container px-4 mb-auto prose dark:prose-invert prose-h1:text-2xl">
    <!-- Link specific .md file -->
    <ContentDoc path="/about" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "custom",
});
useHead({
  title: "About Me",
});
</script>
