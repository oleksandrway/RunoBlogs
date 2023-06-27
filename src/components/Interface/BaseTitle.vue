<script setup lang="ts">
defineProps({
  tag: {
    type: String,
    required: true,
    validator(val: string) {
      return ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(val)
    },

  },
})
</script>

<template>
  <Component
    :is="tag"
    class="font-bold"
  >
    <slot />
  </Component>
</template>

<style lang="scss" scoped>

.big {
  font-size: 36px;
  line-height: normal;
}

.normal {
  font-size: 18px;
  line-height: 25px;
}

@screen sm {
  .big {
  font-size: 24px;
}

.normal {
  font-size: 14px;
}
}

</style>
