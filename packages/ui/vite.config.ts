import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'HaspenUI',
      fileName: 'index',
    },
    rollupOptions: {
      external: ['vue', '@haspen-ui/core', '@haspen-ui/shared'],
      output: {
        globals: {
          vue: 'Vue',
          '@haspen-ui/core': 'HaspenUICore',
          '@haspen-ui/shared': 'HaspenUIShared',
        },
      },
    },
  },
});
