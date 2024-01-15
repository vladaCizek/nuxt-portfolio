<template>
  <article
    class="w-full max-w-none mb-auto prose dark:prose-invert prose-pre:bg-white dark:prose-pre:bg-gray-800 prose-pre:text-gray-700 dark:prose-pre:text-gray-300"
  >
    <!-- <h1>We are inside a blog!</h1>
    <div>Blog slug is: {{ route.params.slug }}</div> -->
    <ContentDoc>
      <template #not-found>
        <h1>Document not found</h1>
        <p>This blog post does not exist</p>
      </template>
      <template v-slot="{ doc }">
        <div class="grid grid-cols-6 gap-16">
          <div :class="[doc.toc ? 'col-span-4' : 'col-span-6']">
            <ContentRenderer :value="doc" />
          </div>
          <div v-if="doc.toc" class="col-span-2 not-prose">
            <aside class="sticky top-8">
              <div class="font-semibold mb-2">Table of Contents</div>
              <nav>
                <TocLinks :links="doc.body.toc.links" />
              </nav>
            </aside>
          </div>
        </div>
      </template>
    </ContentDoc>
  </article>
</template>

<script setup>
useHead({
  title: "Blog Page",
});
const route = useRoute();
</script>
