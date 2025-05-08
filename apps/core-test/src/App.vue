<template>
  <div class="app">
    <h1>Core Package Test</h1>
    <div class="theme-preview">
      <h2>Theme Colors</h2>
      <div class="color-grid">
        <div 
          v-for="(color, name) in theme.colors" 
          :key="name"
          class="color-box"
          :style="{ backgroundColor: color }"
        >
          {{ name }}: {{ color }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { DEFAULT_THEME, type ThemeConfig } from '@haspen-ui/core'

const theme: ThemeConfig = DEFAULT_THEME
</script>

<style>
.app {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: var(--font-sans);
}

.theme-preview {
  margin-top: 2rem;
}

.color-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.color-box {
  padding: 1rem;
  border-radius: 0.5rem;
  color: white;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}
</style> 