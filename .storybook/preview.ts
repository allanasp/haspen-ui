import type { Preview } from '@storybook/vue3';
import { setup } from '@storybook/vue3';

// Import global styles
import '@haspen-ui/design-tokens/dist/index.css';

// Setup Vue app
setup((app) => {
  // Register global components or plugins here if needed
});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      toc: true,
    },
    a11y: {
      // Configure accessibility addon
      element: '#storybook-root',
      config: {},
      options: {},
      manual: false,
    },
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: ['light', 'dark'],
        showName: true,
        dynamicTitle: true,
      },
    },
  },
};

export default preview;