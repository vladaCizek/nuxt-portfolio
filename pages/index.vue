<template>
  <div class="container px-4 mb-auto prose dark:prose-invert prose-h1:text-2xl">
    <!-- Link specific .md file -->
    <ContentDoc path="/" />
  </div>
</template>

<script setup>
useHead({
  title: "Home Page",
});
</script>
