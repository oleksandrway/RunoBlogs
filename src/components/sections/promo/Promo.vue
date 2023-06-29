<script setup lang="ts">

import { SwiperSlide, Swiper as VSwiper } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

import { articles } from '@/stores/articles'

const spaceBetween = 10

</script>

<template>
  <section class=" promo">
    <VSwiper
      :slides-per-view="1"
      :space-between="0"
      :pagination="{ clickable: true }"
      :modules="[Pagination,Autoplay]"
      :loop="true"
      :speed="800"
    >
      <SwiperSlide v-for="article in articles" :key="article.id">
        <PromoSlide :article="article" />
      </SwiperSlide>
    </VSwiper>
  </section>
</template>

<style lang="scss">

.promo {
  color: #fff;
}

.swiper-slide {
  height: auto;
  position: relative;
}

.swiper-pagination {
  max-width: 1440px;
  left: 50%  !important;   // doesn't work without !important
  transform: translateX(-50%);
  text-align: left;
  --swiper-pagination-bottom: 64px;
  --swiper-pagination-bullet-horizontal-gap: 5px;
  padding-left: 65px;
}

.swiper-pagination-bullet {
  // background-color:  $text-light-primary;
  background-color: #fff;
}
</style>
