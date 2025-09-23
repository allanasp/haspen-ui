<template>
  <button
    type="button"
    :class="[
      'theme-toggle',
      `theme-toggle--${variant}`,
      `theme-toggle--${size}`,
      {
        'theme-toggle--loading': isLoading,
        'theme-toggle--disabled': disabled,
      },
    ]"
    :aria-label="ariaLabel"
    :aria-pressed="isDark"
    :disabled="disabled || isLoading"
    @click="handleToggle"
  >
    <span class="theme-toggle__track">
      <span
        class="theme-toggle__thumb"
        :style="{ transform: `translateX(${thumbPosition}px)` }"
      >
        <Transition name="icon-fade" mode="out-in">
          <SunIcon
            v-if="!isDark"
            key="sun"
            class="theme-toggle__icon theme-toggle__icon--sun"
            :size="iconSize"
          />
          <MoonIcon
            v-else
            key="moon"
            class="theme-toggle__icon theme-toggle__icon--moon"
            :size="iconSize"
          />
        </Transition>
      </span>
    </span>

    <span v-if="showLabel" class="theme-toggle__label">
      {{ isDark ? darkLabel : lightLabel }}
    </span>

    <span v-if="isLoading" class="theme-toggle__spinner" />
  </button>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useTheme } from '@haspen-ui/composables';
import type { ThemeToggleProps } from './types';

// Icons (using simple SVG components for now)
import SunIcon from '../Icon/SunIcon.vue';
import MoonIcon from '../Icon/MoonIcon.vue';

const props = withDefaults(defineProps<ThemeToggleProps>(), {
  variant: 'default',
  size: 'md',
  showLabel: false,
  disabled: false,
  lightLabel: 'Light mode',
  darkLabel: 'Dark mode',
  ariaLabel: 'Toggle theme',
});

const emit = defineEmits<{
  toggle: [isDark: boolean];
  change: [mode: 'light' | 'dark'];
}>();

// Theme integration
const { isDark, toggleMode } = useTheme();

// Loading state for smooth transitions
const isLoading = ref(false);

// Computed properties for styling and behavior
const ariaLabel = computed(() => {
  if (props.ariaLabel) return props.ariaLabel;
  return isDark.value ? 'Switch to light mode' : 'Switch to dark mode';
});

const thumbPosition = computed(() => {
  const baseSize = props.size === 'sm' ? 20 : props.size === 'lg' ? 28 : 24;
  return isDark.value ? baseSize : 0;
});

const iconSize = computed(() => {
  const sizeMap = {
    sm: 12,
    md: 16,
    lg: 20,
  };
  return sizeMap[props.size];
});

// Toggle handler with smooth transition
const handleToggle = async () => {
  if (props.disabled || isLoading.value) return;

  isLoading.value = true;

  try {
    // Add small delay for smooth animation
    await new Promise((resolve) => setTimeout(resolve, 150));

    toggleMode();

    emit('toggle', isDark.value);
    emit('change', isDark.value ? 'dark' : 'light');
  } finally {
    // Reset loading state after animation
    setTimeout(() => {
      isLoading.value = false;
    }, 150);
  }
};
</script>

<script lang="ts">
export default {
  name: 'ThemeToggle',
};
</script>

<style lang="scss" scoped>
// tokens is already available globally through vite config

.theme-toggle {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: tokens.units(2); // 8px
  padding: tokens.units(1); // 4px
  background: transparent;
  border: none;
  border-radius: tokens.radius('full');
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
  transition: all 0.2s ease;

  &:focus {
    outline: 2px solid tokens.semantic('primary');
    outline-offset: 2px;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }

  &--disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &--loading {
    cursor: wait;
  }
}

.theme-toggle__track {
  position: relative;
  display: flex;
  align-items: center;
  background: tokens.color('gray', 200);
  border: 1px solid tokens.color('gray', 300);
  border-radius: tokens.radius('full');
  transition: all 0.3s ease;

  .theme-toggle--sm & {
    width: 44px;
    height: 24px;
  }

  .theme-toggle--md & {
    width: 52px;
    height: 28px;
  }

  .theme-toggle--lg & {
    width: 60px;
    height: 32px;
  }

  // Dark theme styling
  :global(.theme-dark) & {
    background: tokens.color('gray', 700);
    border-color: tokens.color('gray', 600);
  }

  .theme-toggle:hover & {
    background: tokens.color('gray', 100);
    border-color: tokens.color('gray', 400);

    :global(.theme-dark) & {
      background: tokens.color('gray', 600);
      border-color: tokens.color('gray', 500);
    }
  }
}

.theme-toggle__thumb {
  position: absolute;
  top: 1px;
  left: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-auto-bg);
  border-radius: tokens.radius('full');
  box-shadow: tokens.shadow('sm');
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  .theme-toggle--sm & {
    width: 20px;
    height: 20px;
  }

  .theme-toggle--md & {
    width: 24px;
    height: 24px;
  }

  .theme-toggle--lg & {
    width: 28px;
    height: 28px;
  }

  // Dark theme styling
  :global(.theme-dark) & {
    background: tokens.color('gray', 800);
    box-shadow: tokens.shadow('md');
  }

  .theme-toggle:active & {
    transform: scale(0.95);
  }
}

.theme-toggle__icon {
  color: tokens.color('yellow', 500);
  transition: all 0.2s ease;

  &--sun {
    color: tokens.color('yellow', 500);
  }

  &--moon {
    color: tokens.color('blue', 400);
  }

  .theme-toggle--loading & {
    opacity: 0.5;
  }
}

.theme-toggle__label {
  font-size: tokens.font-size('sm');
  font-weight: tokens.font-weight('medium');
  color: tokens.text('secondary');
  user-select: none;
  transition: color 0.2s ease;

  .theme-toggle:hover & {
    color: tokens.text('primary');
  }

  .theme-toggle--disabled & {
    color: tokens.text('disabled');
  }
}

.theme-toggle__spinner {
  position: absolute;
  top: 50%;
  right: tokens.units(1);
  width: 12px;
  height: 12px;
  border: 2px solid tokens.color('gray', 300);
  border-top-color: tokens.semantic('primary');
  border-radius: tokens.radius('full');
  animation: spin 0.8s linear infinite;
  transform: translateY(-50%);

  .theme-toggle--sm & {
    width: 10px;
    height: 10px;
    border-width: 1.5px;
  }

  .theme-toggle--lg & {
    width: 14px;
    height: 14px;
    border-width: 2.5px;
  }
}

// Variants
.theme-toggle--outline {
  .theme-toggle__track {
    background: transparent;
    border: 2px solid tokens.color('gray', 300);

    :global(.theme-dark) & {
      border-color: tokens.color('gray', 600);
    }
  }

  .theme-toggle__thumb {
    background: tokens.color('gray', 100);

    :global(.theme-dark) & {
      background: tokens.color('gray', 700);
    }
  }
}

.theme-toggle--ghost {
  .theme-toggle__track {
    background: rgba(tokens.color('gray', 500), 0.1);
    border: 1px solid rgba(tokens.color('gray', 500), 0.2);

    :global(.theme-dark) & {
      background: rgba(tokens.color('gray', 400), 0.1);
      border-color: rgba(tokens.color('gray', 400), 0.2);
    }
  }

  .theme-toggle__thumb {
    background: var(--color-auto-bg);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

    :global(.theme-dark) & {
      background: var(--color-auto-surface);
    }
  }
}

// Animations
@keyframes spin {
  to {
    transform: translateY(-50%) rotate(360deg);
  }
}

.icon-fade-enter-active,
.icon-fade-leave-active {
  transition: all 0.15s ease;
}

.icon-fade-enter-from,
.icon-fade-leave-to {
  opacity: 0;
  transform: scale(0.8) rotate(45deg);
}

// Accessibility improvements
@media (prefers-reduced-motion: reduce) {
  .theme-toggle,
  .theme-toggle__track,
  .theme-toggle__thumb,
  .theme-toggle__icon,
  .theme-toggle__label {
    transition: none;
  }

  .theme-toggle__spinner {
    animation: none;
  }

  .icon-fade-enter-active,
  .icon-fade-leave-active {
    transition: none;
  }
}

// High contrast mode support
@media (prefers-contrast: high) {
  .theme-toggle__track {
    border-width: 2px;
  }

  .theme-toggle__thumb {
    box-shadow: none;
    border: 1px solid tokens.color('gray', 900);

    :global(.theme-dark) & {
      border-color: var(--color-auto-border);
    }
  }
}
</style>