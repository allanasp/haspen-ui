<template>
  <button
    :class="[
      'haspen-button',
      `haspen-button--${variant}`,
      `haspen-button--${size}`,
      { 'haspen-button--loading': loading },
      { 'haspen-button--disabled': disabled }
    ]"
    :disabled="disabled || loading"
    v-bind="$attrs"
  >
    <span v-if="loading" class="haspen-button__loader"></span>
    <span v-else class="haspen-button__content">
      <slot></slot>
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  loading: false,
  disabled: false
})
</script>

<style lang="scss">
@import './Button.scss';
</style> 