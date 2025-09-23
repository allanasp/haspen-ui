import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        // Add include paths for SCSS imports
        includePaths: [
          resolve(__dirname, '../design-tokens/src'),
          resolve(__dirname, 'node_modules')
        ],
        // Global SCSS variables/mixins available in all components
        additionalData: `@use "${resolve(__dirname, '../design-tokens/src/index.scss')}" as tokens;`
      }
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'HaspenUI',
      fileName: 'index',
    },
    rollupOptions: {
      external: ['vue', '@haspen-ui/core', '@haspen-ui/shared', '@haspen-ui/composables'],
      output: {
        globals: {
          vue: 'Vue',
          '@haspen-ui/core': 'HaspenUICore',
          '@haspen-ui/shared': 'HaspenUIShared',
          '@haspen-ui/composables': 'HaspenUIComposables',
        },
      },
    },
  },
});
