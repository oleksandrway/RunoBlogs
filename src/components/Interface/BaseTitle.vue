<script setup lang="ts">
import type { PropType } from 'vue'

const props = defineProps({
  tag: {
    type: String as PropType<'h1'| 'h2'| 'h3'| 'h4'| 'h5'| 'h6' >,
    required: true,

  },
  size: {
    type: String as PropType<'lg' | 'base' >,
    default: '',

  },
})

const classes = computed(() => [
  'base-title',
  `base-title--size-${props.size}`,
])
</script>

<template>
  <Component
    :is="tag"
    :class="classes"
  >
    <slot />
  </Component>
</template>

<style lang="scss" scoped>

.base-title {
  font-weight: bold;
}

.base-title--size-lg {
  font-size: 36px;
  line-height: normal;
}

.base-title--size-base {
  font-size: 18px;
  line-height: 25px;
}

@screen sm {
  .base-title--size-lg {
    font-size: 24px;
  }

  .base-title--size-base {
    font-size: 14px;
  }
}

</style>
