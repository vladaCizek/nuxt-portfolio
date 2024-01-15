<template>
  <div>
    <select
      v-model="$colorMode.preference"
      class="dark:bg-gray-800 p-2 rounded-md"
    >
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="sepia">Sepia</option>
    </select>
  </div>
</template>

<script setup>
const colorMode = useColorMode();
</script>
