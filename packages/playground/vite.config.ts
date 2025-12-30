import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@haspen/ui': resolve(__dirname, '../ui/src'),
      '@haspen/core': resolve(__dirname, '../core/src'),
      '@haspen/shared': resolve(__dirname, '../shared/src'),
      '@haspen/composables': resolve(__dirname, '../composables/src'),
      '@haspen/design-tokens': resolve(__dirname, '../design-tokens/src'),
    },
  },
});
