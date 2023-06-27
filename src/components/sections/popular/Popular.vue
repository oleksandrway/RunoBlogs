
<script setup lang="ts">
import type { Blog } from '@/types'

const blogs: Blog[] = [
  {
    imgUrl: '/popular-tile-img.png',
    categories: ['Adventure', 'Adventure', 'Adventure'],
    date: '08.08.2021',
    title: 'Dream destinations to visit this year in Paris',
    description: 'Progressively incentivize cooperative systems through technically sound functionaliti es. Credibly productivate seamless data with flexible schemas.',
    id: '1',
  },
  {
    imgUrl: '/popular-tile-img.png',
    categories: ['Adventure', 'Adventure', 'Adventure'],
    date: '08.08.2021',
    title: 'Dream destinations to visit this year in Paris',
    description: 'Progressively incentivize cooperative systems through technically sound functionaliti es. Credibly productivate seamless data with flexible schemas.',
    id: '2',
  },
  {
    imgUrl: '/popular-tile-img.png',
    categories: ['Adventure', 'Adventure', 'Adventure'],
    date: '08.08.2021',
    title: 'Dream destinations to visit this year in Paris',
    description: 'Progressively incentivize cooperative systems through technically sound functionaliti es. Credibly productivate seamless data with flexible schemas.',
    id: '3',
  },
  {
    imgUrl: '/popular-tile-img.png',
    categories: ['Adventure', 'Adventure', 'Adventure'],
    date: '08.08.2021',
    title: 'Dream destinations to visit this year in Paris',
    description: 'Progressively incentivize cooperative systems through technically sound functionaliti es. Credibly productivate seamless data with flexible schemas.',
    id: '4',
  },
  {
    imgUrl: '/popular-tile-img.png',
    categories: ['Adventure', 'Adventure', 'Adventure'],
    date: '08.08.2021',
    title: 'Dream destinations to visit this year in Paris',
    description: 'Progressively incentivize cooperative systems through technically sound functionaliti es. Credibly productivate seamless data with flexible schemas.',
    id: '5gfd',
  },
  {
    imgUrl: '/popular-tile-img.png',
    categories: ['Adventure', 'Adventure', 'Adventure'],
    date: '08.08.2021',
    title: 'Dream destinations to visit this year in Paris',
    description: 'Progressively incentivize cooperative systems through technically sound functionaliti es. Credibly productivate seamless data with flexible schemas.',
    id: '6gfd',
  },
  {
    imgUrl: '/popular-tile-img.png',
    categories: ['Adventure', 'Adventure', 'Adventure'],
    date: '08.08.2021',
    title: 'Dream destinations to visit this year in Paris',
    description: 'Progressively incentivize cooperative systems through technically sound functionaliti es. Credibly productivate seamless data with flexible schemas.',
    id: '7gfd',
  },
  {
    imgUrl: '/popular-tile-img.png',
    categories: ['Adventure', 'Adventure', 'Adventure'],
    date: '08.08.2021',
    title: 'Dream destinations to visit this year in Paris',
    description: 'Progressively incentivize cooperative systems through technically sound functionaliti es. Credibly productivate seamless data with flexible schemas.',
    id: '8gfd',
  },
]
</script>

<template>
  <section class=" popular py-[147px] md:py-[100px] sm:py-[60px]">
    <XContainer>
      <BaseTitle tag="h2" class="big mb-[28px] sm:mb-[15px]">
        Popular topics
      </BaseTitle>

      <CategoryMenu class="mb-[27px]" />

      <BlogsTiles :blogs="blogs" />
    </XContainer>
  </section>
</template>

<style lang="scss" scoped>
.popular {
  color: $color-primary-dark;
}
</style>
