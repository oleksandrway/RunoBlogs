<script setup lang="ts">
import { footerMenuLinks } from '@/stores/footer-links'

</script>

<template>
  <div>
    <BaseTitle
      tag="h3"
      size="base"
      class="footer__title "
    >
      Headquarter
    </BaseTitle>

    <nav>
      <ul class="flex flex-col">
        <li v-for="link in footerMenuLinks" :key="link.id">
          <a :href="link.url" class="footer__link">{{ link.name }}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>
