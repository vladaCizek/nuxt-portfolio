<template>
  <slot :posts="posts">
    <section class="mb-auto not-prose font-mono">
      <div class="column text-gray-400 text-sm">
        <div>date</div>
        <div>title</div>
      </div>
      <ul class="text-sm">
        <li v-for="({ _path, title, displayYear, year }, i) in posts" :key="i">
          <NuxtLink
            :to="_path"
            class="column hover:bg-gray-100 hover:dark:bg-gray-800"
          >
            <div class="text-gray-500 min-w-8">
              {{ displayYear ? year : "" }}
            </div>
            <div>{{ title }}</div>
          </NuxtLink>
        </li>
      </ul>
    </section>
  </slot>
</template>

<script setup>
useHead({
  title: "Blog Pages",
});

const props = defineProps({
  limit: {
    type: Number,
    default: 0,
  },
});

// useAsyncData prevent refetching in browser if already
// fetched on the server
// getEverything inside content/blog folder
// reject the one with 'blog.md' name (this file)
// extract only _path, publishedAt and title

// we want to sort by "publishedAt" custom property
const { data } = await useAsyncData("blog-list", () => {
  const query = queryContent("/blog")
    .where({
      _path: { $ne: "/blog" },
    })
    .only(["_path", "title", "publishedAt"])
    .sort({ publishedAt: 1 });

  if (props.limit) {
    query.limit(props.limit);
  }

  return query.find();
});

const posts = computed(() => {
  if (!data.value) {
    return [];
  }

  let lastYear = null;

  for (const index in data.value) {
    const post = data.value[index];
    post.year = new Date(post.publishedAt).getFullYear();
    post.displayYear = post.year !== lastYear;
    lastYear = post.year;
  }
  return data.value;
});
</script>

<style scoped>
.column {
  @apply flex items-center space-x-8 py-2 border-b border-gray-200 dark:border-gray-700;
}
</style>
