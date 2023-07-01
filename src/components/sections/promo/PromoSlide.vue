<script setup lang="ts">
import type { PropType } from 'vue'

import type { Article } from '@/project-types'

const props = defineProps({
  article: {
    type: Object as PropType<Article>,
    required: true,
  },
})

const bgUrl = computed(() => {
  return `url(${props.article.imgUrl})`
})
</script>

<template>
  <div class="promo-slide">
    <XContainer>
      <div class="max-w-[530px] ">
        <div class="flex gap-2 mb-3">
          <BaseCategoryTag
            v-for="category in article.categories"
            :key="category"
            :category="category"
            class=" px inline-block"
          />
        </div>
        <a class="promo-slide__link" href="#">
          <BaseTitle
            tag="h3"
            size="lg"
            class="mb-3"
          >
            {{ article.title }}
          </BaseTitle>
        </a>
        <div class="promo-slide__desc  ">
          <p>{{ article.date }}</p>
          <span class="w-14 mt-2 h-px bg-primary-light block" />
          <p>
            {{ article.description }}
          </p>
        </div>
      </div>
    </XContainer>
  </div>
</template>

<style lang="scss" scoped>
 .promo-slide {
    background: v-bind(bgUrl) no-repeat 50%;
    background-size: cover;
    padding-top: 277px;
    padding-bottom: 140px;

    &__desc {
      @apply text-primary-light flex  gap-2 items-start

    }
  }

  .promo-slide__link  {
    display: block;
    transition: all .3s;
    &:hover {
      transform: scale(1.01);
    }
  }
</style>
@/project-types
