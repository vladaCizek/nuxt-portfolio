<template>
  <div class="not-prose">
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">Something went wrong</div>
    <div v-else>
      <ul class="grid grid-cols-1 gap-4">
        <li
          v-for="(repo, i) in repos"
          :key="repo.id"
          class="border border-gray-200 rounded-sm p-4 hover:bg-gray-100 font-mono dark:hover:bg-gray-800 dark:hover:text-gray-200"
        >
          <a :href="repo.html_url" target="_blank">
            <div class="flex items-center justify-between">
              <div class="font-semibold text-sm">{{ repo.name }}</div>
              <div>{{ repo.stargazers_count }} ★</div>
            </div>
            <p class="text-sm">
              {{ repo.description }}
            </p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const { error, pending, data } = await useFetch(
  "https://api.github.com/users/piotr-jura-udemy/repos"
);
const repos = computed(() =>
  data.value
    ?.filter((repo) => repo.description)
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
);
</script>
