<script setup lang="ts">
import type { PropType } from 'vue'

import type { Article } from '@/project-types'

const props = defineProps({
  articles: {
    type: Object as PropType<Article[]>,
    required: true,
  },
  mode: {
    type: String as PropType<'editors' | 'popular'>,
    required: true,
  },
})

const articlesListClass = computed(() => {
  if (props.mode === 'editors') {
    return 'articles-list--editors-mode'
  }
  else if (props.mode === 'popular') {
    return 'articles-list--popular-mode'
  }
})
</script>

<template>
  <div class="articles-list " :class="articlesListClass">
    <ArticleTile
      v-for="article in articles"
      :key="article.id"
      :article="article"
      :mode="mode"
    />
  </div>
</template>

<style lang="scss" scoped>
.articles-list {
  @apply  grid gap-x-[20px] gap-y-[50px] grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1;

  &--editors-mode {
    @apply grid-cols-3 lg:grid-cols-2 md:grid-cols-1
  }
}

</style>
@/project-types
