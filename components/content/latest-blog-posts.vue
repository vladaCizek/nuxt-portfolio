<template>
  <BlogPosts v-slot="{ posts }" :limit="limit">
    <div v-for="(post, index) in posts" :key="index">
      <NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
    </div>
  </BlogPosts>
</template>

<script setup>
defineProps({
  limit: {
    type: Number,
    default: 0,
  },
});
</script>
