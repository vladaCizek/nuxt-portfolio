<template>
  <nav class="font-mono font-semibold text-gray-600">
    <ul
      class="flex flex-col md:flex-row items-start md:items-center md:space-x-2 text-xl md:text-base"
    >
      <li class="">
        <NuxtLink to="/" class="link">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about" class="link">About</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/blog" class="link">Blog</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/projects" class="link">Projects</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup></script>

<style scoped>
.link {
  @apply p-1 hover:text-gray-950 hover:bg-gray-100 dark:hover:bg-gray-900 dark:hover:text-gray-200;
}
</style>
