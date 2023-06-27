<script setup lang="ts">
const categories = [
  'Adventure',
  'Travel',
  'Fashion',
  'Technology',
  'Branding',
]
</script>

<template>
  <ul class="flex gap-x-[10px]  font-bold flex-wrap mx-[-5px] ">
    <li>
      <button class="category-menu__btn category-menu__btn--active">
        All
      </button>
    </li>
    <li
      v-for="category in categories"
      :key="category"
    >
      <button

        class="category-menu__btn"
      >
        {{ category }}
      </button>
    </li>
    <!--  <li>
      <button class="category-menu__btn">
        Travel
      </button>
    </li>
    <li>
      <button class="category-menu__btn">
        Fashion
      </button>
    </li>
    <li>
      <button class="category-menu__btn">
        Technology
      </button>
    </li>
    <li>
      <button class="category-menu__btn">
        Branding
      </button>
    </li> -->
    <li class="ml-auto md:hidden">
      <button class="category-menu__btn">
        View All
      </button>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.category-menu__btn--active {
   color: $color-orange;
}

.category-menu__btn {
  padding: 5px;
}
</style>
