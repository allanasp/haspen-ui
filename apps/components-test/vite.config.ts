import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@haspen-ui/components': resolve(__dirname, '../../packages/components/src'),
      '@haspen-ui/core': resolve(__dirname, '../../packages/core/src')
    }
  },
  optimizeDeps: {
    include: ['vue']
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/, /packages/]
    }
  }
}) 