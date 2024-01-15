<template>
  <div class="flex items-center justify-center min-h-screen mb-auto">
    <section class="text-center">
      <h1 class="text-4xl mb-4">Oooops {{ error.statusCode }}</h1>
      <h2 class="mb-3 text-xl">{{ error.statusMessage }}</h2>
      <button @click="handleError" class="py-2 px-4 bg-pink-500">Home</button>
    </section>
  </div>
</template>

<script setup>
defineProps({ error: Object });
const handleError = () => clearError({ redirect: "/" });
</script>
