<script setup lang="ts">
import { articles } from '@/stores/articles'
</script>

<template>
  <TheHeader />
  <Promo />
  <Article :article="articles[1]" />
  <Popular />

  <Favorite :article="articles[1]" />
  <Editors />

  <Footer />
</template>
