
<script setup lang="ts">

const div = '<div>my div</div>'
</script>

<template>
  <footer class="text-primary-light">
    <div class="bg-[#212529] pt-24 pb-52 sm:pt-16 sm:pb-32">
      <XContainer>
        <div class="grid gap-x-8 gap-y-12 grid-cols-4  lg:grid-cols-2 sm:grid-cols-1 ">
          <FooterContacts />
          <FooterMenu />
          <FooterAdress />
          <FooterSocial />
        </div>
      </XContainer>
    </div>
    <div class="bg-[#343A40] py-7">
      <XContainer class="flex justify-between">
        <a class="footer__link" href="#">2021 | RUNO Publisher Studio</a>
        <button class="footer__link">
          Subscribe Now
        </button>
      </XContainer>
    </div>
  </footer>
</template>

<style lang="scss">
.footer__title {
  @apply mb-2
}

.footer__link {
  transition: all .3s;
  padding: 8px;
  margin-left: -8px;
  display: inline-block;

  .footer__icon  {
  @apply w-5 h-5 fill-primary-light
  }

  &:hover {
    @apply text-orange;
    .footer__icon  {
      @apply fill-orange
    }
  }
}
</style>
