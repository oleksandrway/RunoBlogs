<template>
  <div class="grid gap-x-[20px] gap-y-[50px] grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
    <BlogTile
      v-for="blog in blogs"
      :key="blog.id"
      :blog="blog"
    />
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

import type { Blog } from '@/types'

defineProps({
  blogs: {
    // type: Object,
    // type: Blog[],
    type: Object as PropType<Blog[]>,
    required: true,
  },
})
</script>
