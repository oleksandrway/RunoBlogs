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
  <section class="favorite">
    <XContainer>
      <div class="max-w-[530px] mx-auto">
        <div class=" gap-2 mb-7 inline-flex">
          <BaseCategoryTag
            v-for="category in article.categories"
            :key="category"
            :category="category"
            class=" px inline-block"
          />
        </div>
        <a class="favorite__link" href="#">
          <BaseTitle
            tag="h3"
            size="lg"
            class="mb-3 "
          >
            {{ article.title }}
          </BaseTitle>
        </a>
        <div class="favorite__desc flex flex-col  items-center gap-2  ">
          <p>
            {{ article.description }}
          </p>
          <span class="w-14 mt-2 h-px bg-primary-light block" />
          <p>{{ article.date }}</p>
        </div>
      </div>
    </XContainer>
  </section>
</template>

<style lang="scss" scoped>
.favorite {
  padding: 190px 0 170px 0 ;
  background: v-bind(bgUrl) no-repeat 50%;
  background-size: cover;
  padding-top: 277px;
  padding-bottom: 140px;
  color: #fff;
  text-align: center;

    &__desc {
      @apply text-primary-light
    }
  }
  .favorite__link  {
    display: block;
    transition: all .3s;
    &:hover {
      transform: scale(1.01);
    }
  }

  @screen sm {
  .favorite {
  padding: 100px 0 120px 0 ;}
  }
</style>
@/project-types
