
<script setup lang="ts">

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
        Popular topics
      </BaseTitle>

      <CategoryMenu class="mb-7" />

      <ArticlesTiles :articles="articles" />
    </XContainer>
  </section>
</template>

<style lang="scss" scoped>
.popular {
/*   // color: theme('colors.blue.500');
  // padding: theme('spacing.4');

  // @apply bg-red-500; */
}

</style>
