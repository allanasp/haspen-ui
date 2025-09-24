<template>
  <component
    :is="iconComponent"
    :size="size"
    :aria-hidden="ariaHidden"
    :aria-label="ariaLabel"
    :class="['haspen-icon', iconClass]"
  />
</template>

<script setup lang="ts">
import { computed, inject } from 'vue';
import { ICON_PROVIDER_KEY, type IconConfig, type IconLibrary } from './provider';
import type { IconProps } from './types';

interface Props extends IconProps {
  /**
   * Name of the icon to render
   */
  name: string;
  
  /**
   * Override the icon library for this specific icon
   */
  library?: IconLibrary;
}

const {
  name,
  size = 16,
  ariaHidden = true,
  ariaLabel,
  library,
} = defineProps<Props>();

// Get icon configuration from provider
const iconConfig = inject<IconConfig>(ICON_PROVIDER_KEY, {
  library: 'custom',
  icons: {},
  prefix: '',
});

// Determine which library to use
const currentLibrary = library || iconConfig.library;

// Get the icon component
const iconComponent = computed(() => {
  if (currentLibrary === 'custom') {
    // Use custom icons from the provider
    const customIcon = iconConfig.icons[name];
    if (!customIcon) {
      console.warn(`Icon "${name}" not found in custom library`);
      return null;
    }
    return customIcon;
  }
  
  if (currentLibrary === 'heroicons') {
    // For now, warn about external libraries needing to be handled at app level
    console.warn(`Heroicons library not implemented in this example. Use custom icons instead.`);
    return null;
  }
  
  if (currentLibrary === 'lucide') {
    // For now, warn about external libraries needing to be handled at app level  
    console.warn(`Lucide library not implemented in this example. Use custom icons instead.`);
    return null;
  }
  
  console.warn(`Unknown icon library: ${currentLibrary}`);
  return null;
});

// Generate CSS class for styling
const iconClass = computed(() => {
  const classes = [`haspen-icon--${name}`];
  
  if (iconConfig.prefix) {
    classes.push(`${iconConfig.prefix}-${name}`);
  }
  
  if (currentLibrary !== 'custom') {
    classes.push(`haspen-icon--${currentLibrary}`);
  }
  
  return classes.join(' ');
});
</script>

<script lang="ts">
export default {
  name: 'Icon',
};
</script>

<style lang="scss" scoped>
.haspen-icon {
  display: inline-block;
  vertical-align: middle;
  color: currentColor;
  fill: currentColor;
  transition: all 0.2s ease;
  
  // Base icon styling
  &:not(:last-child) {
    margin-right: 0.5rem;
  }
  
  // Library-specific styling
  &--heroicons,
  &--lucide {
    stroke: currentColor;
    fill: none;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
  
  &--custom {
    // Custom icons inherit their own styling
  }
}
</style>