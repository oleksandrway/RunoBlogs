<script setup lang="ts">
defineProps({
  category: {
    type: String,
    required: true,
  },
  dark: Boolean,

})
</script>

<template>
  <a
    class="py-10px"
    href="#"
  >
    <p
      class="category__text"
      :class="{dark:dark}"
    >
      {{ category }}
    </p>
  </a>
</template>

<style lang="scss" scoped>
 .category__text{
    text-transform: uppercase;
    color: #fff;
    padding: 4px 10px 2px 10px;
    background-color: rgba(255, 255, 255, 0.15);
    border-radius: 8px ;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 10px;
    transition: all .3s;
    &:hover {
    background-color: rgba(255, 255, 255, 0.22);

    }

  }
  .dark {
    color: $color-primary-dark ;
    background-color: transparent;
    box-shadow: inset  0 0 0 1px #E5E5E5;
    &:hover {
      background-color: rgba(#E5E5E5, 0.45);
    }
  }
</style>
