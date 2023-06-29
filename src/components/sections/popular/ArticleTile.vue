<template>
  <div class=" relative ">
    <div class="absolute top-[20px] right-0 px-[20px] flex gap-[10px] flex-wrap justify-end">
      <BaseCategoryTag
        v-for="category in article.categories"
        :key="category"
        :category="category"
      />
    </div>

    <div class="mb-[13px] w-full  h-[280px]  rounded-[5px] overflow-hidden">
      <a href="#">
        <img
          class="object-cover w-full h-full"
          :src="article.imgUrl"
          alt="article image "
        >
      </a>
    </div>
    <p class="mb-[13px]">
      {{ article.date }}
    </p>
    <BaseTitle tag="h3" class="mb-[15px] normal">
      {{ article.title }}
    </BaseTitle>
    <p>
      {{ article.description }}
    </p>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

import type { Article } from '@/types'

defineProps({
  article: {
    type: Object as PropType<Article>,
    required: true,
  },
})
</script>
