import type { StorybookConfig } from '@storybook/vue3-vite';
import vue from '@vitejs/plugin-vue';

const config: StorybookConfig = {
  stories: [
    '../packages/*/src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../packages/*/src/**/*.mdx',
  ],
  addons: [
    '@storybook/addon-vitest',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  viteFinal: async (config) => {
    // Ensure Vue plugin is configured properly
    if (!config.plugins) config.plugins = [];
    config.plugins.push(vue());
    return config;
  },
  docs: {
    autodocs: 'tag',
  },
};
export default config;