<script setup lang="ts">
import type { PropType } from 'vue'

import type { Article } from '@/project-types'

const props = defineProps({
  article: {
    type: Object as PropType<Article>,
    required: true,
  },

  mode: {
    type: String as PropType<'editors' | 'popular'>,
  },
})

const tileClass = computed(() => {
  if (props.mode === 'editors') {
    return 'article-tile--editors-mode'
  }
  else if (props.mode === 'popular') {
    return 'article-tile--popular-mode'
  }
})
</script>

<template>
  <div class=" relative article-tile" :class="tileClass">
    <div class="article-tile__tags ">
      <BaseCategoryTag
        v-for="category in article.categories"
        :key="category"
        :category="category"
      />
    </div>

    <div class="article-tile__img">
      <a href="#">
        <img
          class="object-cover w-full h-full"
          :src="article.imgUrl"
          alt="article image "
        >
      </a>
    </div>
    <div class="article-tile__text">
      <p class="article-tile__date ">
        {{ article.date }}
      </p>
      <a href="#">
        <BaseTitle
          tag="h3"
          size="base"
          class="article-tile__title"
        >
          {{ article.title }}
        </BaseTitle>
      </a>
      <p class="article-tile__desc">
        {{ article.description }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.article-tile__img {
  @apply mb-[13px] w-full  h-[280px]  rounded-[5px] overflow-hidden;
}
.article-tile__tags {
  @apply absolute top-[20px] right-0 px-[20px] flex gap-[10px] flex-wrap justify-end;
}

.article-tile__date {
  @apply mb-[13px] text-secondary-dark;
}
.article-tile__title {
  @apply mb-[15px] ;
}
.article-tile__desc {
  @apply  text-secondary-dark;
}
.article-tile--editors-mode {

  .article-tile__img {
  @apply   h-[350px]  ;
}
  .article-tile__text {
    position: absolute;
    bottom: 0;
    // color:red;
    max-width: 420px;
    padding: 40px;
  }

  .article-tile__date {
  @apply  text-primary-light;
  }

.article-tile__title {
  color: #fff;
}
.article-tile__desc {
  @apply  text-primary-light;
}
}
</style>
@/project-types
