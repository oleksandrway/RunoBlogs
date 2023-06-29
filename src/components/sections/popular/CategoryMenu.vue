<script setup lang="ts">
const categories = [
  { id: 1, name: 'Adventure' },
  { id: 1, name: 'Travel' },
  { id: 1, name: 'Fashion' },
  { id: 1, name: 'Technology' },
  { id: 1, name: 'Branding' },
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
      :key="category.id"
    >
      <button

        class="category-menu__btn"
      >
        {{ category.name }}
      </button>
    </li>
    <li class="ml-auto md:hidden">
      <button class="category-menu__btn">
        View All
      </button>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.category-menu__btn--active {
   @apply text-orange
}

.category-menu__btn {
  padding: 5px;
  transition: all .3s;
  &:hover {
   @apply text-orange
  }
}
</style>
