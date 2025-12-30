import type { StorybookConfig } from '@storybook/vue3-vite';
import { resolve } from 'path';

const config: StorybookConfig = {
  stories: [
    '../packages/*/src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../packages/*/src/**/*.mdx',
  ],
  addons: ['@storybook/addon-vitest', '@storybook/addon-a11y'],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  viteFinal: async config => {
    // Add path resolution for @haspen packages
    if (!config.resolve) config.resolve = {};
    if (!config.resolve.alias) config.resolve.alias = {};

    config.resolve.alias = {
      ...config.resolve.alias,
      '@haspen/design-tokens': resolve(
        __dirname,
        '../packages/design-tokens/src',
      ),
      '@haspen/core': resolve(__dirname, '../packages/core/src'),
      '@haspen/shared': resolve(__dirname, '../packages/shared/src'),
      '@haspen/composables': resolve(__dirname, '../packages/composables/src'),
    };

    return config;
  },
  docs: {
    autodocs: 'tag',
  },
};
export default config;
