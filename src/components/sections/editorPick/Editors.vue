<script setup lang="ts">
// import { articles } from '@//'
import { articles } from '@/stores/articles'

</script>

<template>
  <section class="popular py-40 md:py-25 sm:py-16 ">
    <XContainer>
      <BaseTitle
        tag="h2"
        size="lg"
        class="mb-7 sm:mb-4 "
      >
        Editor’s Pick
      </BaseTitle>

      <ArticlesList
        :articles="articles"
        mode="editors"
      />
    </XContainer>
  </section>
</template>
