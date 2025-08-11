<template>
  <button
    :class="[
      'haspen-button',
      `haspen-button--${variant}`,
      `haspen-button--${size}`,
      { 'haspen-button--loading': loading },
      { 'haspen-button--disabled': disabled },
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
  import { ButtonProps } from './types';

  withDefaults(defineProps<ButtonProps>(), {
    variant: 'primary',
    size: 'md',
    loading: false,
    disabled: false,
  });
</script>

<style lang="scss">
  @use './Button';
</style>
