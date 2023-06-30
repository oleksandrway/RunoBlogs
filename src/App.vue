<script setup lang="ts">
import { articles } from '@/stores/articles'
</script>

<template>
  <TheHeader />
  <Promo />
  <Popular />
  <Favorite :article="articles[1]" />
  <Editors />

  <Footer />
</template>
