<template>
  <div class="grid gap-x-[20px] gap-y-[50px] grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
    <articleTile
      v-for="article in articles"
      :key="article.id"
      :article="article"
    />
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

import type { article } from '@/types'

defineProps({
  articles: {
    // type: Object,
    // type: article[],
    type: Object as PropType<article[]>,
    required: true,
  },
})
</script>
