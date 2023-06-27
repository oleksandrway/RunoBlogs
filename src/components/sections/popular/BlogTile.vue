<template>
  <div class=" relative ">
    <div class="absolute top-[20px] right-0 px-[20px] flex gap-[10px] flex-wrap justify-end">
      <BaseCategoryTag
        v-for="category in blog.categories"
        :key="category"
        :category="category"
      />
    </div>

    <div class="mb-[13px] w-full  h-[280px]  rounded-[5px] overflow-hidden">
      <a href="#">
        <img
          class="object-cover w-full h-full"
          :src="blog.imgUrl"
          alt="blog image "
        >
      </a>
    </div>
    <p class="mb-[13px]">
      {{ blog.date }}
    </p>
    <BaseTitle tag="h3" class="mb-[15px] normal">
      {{ blog.title }}
    </BaseTitle>
    <p>
      {{ blog.description }}
    </p>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

import type { Blog } from '@/types'

defineProps({
  blog: {
    type: Object as PropType<Blog>,
    required: true,
  },
})
</script>
