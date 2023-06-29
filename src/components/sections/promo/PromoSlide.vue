<script setup lang="ts">
import type { PropType } from 'vue'

import type { Article } from '@/types'

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
      <div class="max-w-[530px]">
        <div class="flex gap-2">
          <BaseCategoryTag
            v-for="category in article.categories"
            :key="category"
            :category="category"
            class="mb-3 px inline-block promo-slide__link"
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
        <div class="promo-slide__desc flex  gap-2 items-start ">
          <p>{{ article.date }}</p>
          <span class="w-14 mt-2 h-px bg-primary-light bg- block" />
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
    // background: url(../../../assets/promo.png) no-repeat 50%;
   background-size: cover;
    padding-top: 277px;
    padding-bottom: 140px;

    &__desc {
      // color: $text-light-secondary;
      @apply text-primary-light
    }
  }

  .promo-slide__link  {
    display: block;
    transition: all .3s;
    &:hover {
      // color:red;
      transform: scale(1.01);
    }
  }
</style>
