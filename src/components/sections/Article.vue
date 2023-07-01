<script setup lang="ts">
import type { PropType } from 'vue'

import type { Article } from '@/project-types'

const props = defineProps({
  article: {
    type: Object as PropType<Article>,
    required: true,
  },
})
</script>

<template>
  <section class="py-24 md:py-14">
    <XContainer class="flex gap-12 lg:flex-col md:gap-5 ">
      <div class="flex gap-2">
        <p>{{ article.date }}</p>
        <span class="w-14 mt-2 h-px bg-primary-light block" />
        <p>
          {{ article.readTime }} minutes
        </p>
      </div>
      <p class="max-w-[860px]">
        {{ article.text }}
      </p>
    </XContainer>
  </section>
</template>
