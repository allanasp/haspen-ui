import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
  sourcemap: true,
  external: ['vue'],
  esbuildOptions(options) {
    options.loader = {
      ...options.loader,
      '.vue': 'jsx'
    }
  },
  splitting: false,
  treeshake: true,
  minify: false
}) 