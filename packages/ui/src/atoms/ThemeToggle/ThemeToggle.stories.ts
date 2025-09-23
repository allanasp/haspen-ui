import type { Meta, StoryObj } from '@storybook/vue3';
import { ThemeToggle } from './index';

const meta: Meta<typeof ThemeToggle> = {
  title: 'Atoms/ThemeToggle',
  component: ThemeToggle,
  parameters: {
    docs: {
      description: {
        component: `
# ThemeToggle

A beautiful, accessible theme toggle component with smooth animations and multiple variants.

## Features

- **Multiple Variants**: Default, outline, and ghost styles
- **Three Sizes**: Small, medium, and large
- **Smooth Animations**: Beautiful transitions between light and dark modes
- **Accessibility First**: Proper ARIA attributes and keyboard navigation
- **Theme Integration**: Seamlessly works with ThemeProvider
- **Loading States**: Visual feedback during theme transitions
- **Customizable Labels**: Optional text labels for light/dark modes

## Accessibility Features

- ARIA pressed state indicates current theme mode
- Proper ARIA labels for screen readers
- Keyboard navigation support
- High contrast mode support
- Respects reduced motion preferences
- Focus indicators with proper contrast ratios

## Integration

Works seamlessly with the ThemeProvider component. The toggle automatically:
- Reads the current theme state
- Switches between light and dark modes
- Persists theme preference to localStorage
- Responds to system theme changes when in auto mode

## Usage Examples

### Basic Usage
\`\`\`vue
<template>
  <ThemeProvider>
    <ThemeToggle />
    <!-- Your app content -->
  </ThemeProvider>
</template>
\`\`\`

### With Label
\`\`\`vue
<ThemeToggle 
  show-label 
  light-label="Light Theme" 
  dark-label="Dark Theme" 
/>
\`\`\`

### Different Variants
\`\`\`vue
<ThemeToggle variant="outline" size="lg" />
<ThemeToggle variant="ghost" show-label />
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline', 'ghost'],
      description: 'Visual variant of the toggle',
    },
    size: {
      control: 'select', 
      options: ['sm', 'md', 'lg'],
      description: 'Size of the toggle component',
    },
    showLabel: {
      control: 'boolean',
      description: 'Whether to show text label next to toggle',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the toggle is disabled',
    },
    lightLabel: {
      control: 'text',
      description: 'Label text for light mode',
    },
    darkLabel: {
      control: 'text',
      description: 'Label text for dark mode',
    },
    ariaLabel: {
      control: 'text',
      description: 'ARIA label for accessibility',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Examples
export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      source: {
        code: '<ThemeToggle />',
      },
    },
  },
};

export const WithLabel: Story = {
  args: {
    showLabel: true,
  },
  parameters: {
    docs: {
      source: {
        code: '<ThemeToggle show-label />',
      },
    },
  },
};

export const CustomLabels: Story = {
  args: {
    showLabel: true,
    lightLabel: 'Switch to Light',
    darkLabel: 'Switch to Dark',
  },
  parameters: {
    docs: {
      source: {
        code: `<ThemeToggle 
  show-label 
  light-label="Switch to Light" 
  dark-label="Switch to Dark" 
/>`,
      },
    },
  },
};

// Size Variants
export const Sizes: Story = {
  render: () => ({
    components: { ThemeToggle },
    template: `
      <div style="display: flex; align-items: center; gap: 1rem;">
        <div style="text-align: center;">
          <div style="margin-bottom: 0.5rem; font-size: 0.875rem; color: #666;">Small</div>
          <ThemeToggle size="sm" />
        </div>
        <div style="text-align: center;">
          <div style="margin-bottom: 0.5rem; font-size: 0.875rem; color: #666;">Medium</div>
          <ThemeToggle size="md" />
        </div>
        <div style="text-align: center;">
          <div style="margin-bottom: 0.5rem; font-size: 0.875rem; color: #666;">Large</div>
          <ThemeToggle size="lg" />
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<ThemeToggle size="sm" />
<ThemeToggle size="md" />
<ThemeToggle size="lg" />`,
      },
    },
  },
};

// Variant Examples  
export const Variants: Story = {
  render: () => ({
    components: { ThemeToggle },
    template: `
      <div style="display: flex; flex-direction: column; gap: 2rem;">
        <div>
          <h4 style="margin: 0 0 1rem 0; font-size: 1rem; font-weight: 600;">Default Variant</h4>
          <div style="display: flex; align-items: center; gap: 1rem;">
            <ThemeToggle variant="default" />
            <ThemeToggle variant="default" show-label />
          </div>
        </div>
        
        <div>
          <h4 style="margin: 0 0 1rem 0; font-size: 1rem; font-weight: 600;">Outline Variant</h4>
          <div style="display: flex; align-items: center; gap: 1rem;">
            <ThemeToggle variant="outline" />
            <ThemeToggle variant="outline" show-label />
          </div>
        </div>
        
        <div>
          <h4 style="margin: 0 0 1rem 0; font-size: 1rem; font-weight: 600;">Ghost Variant</h4>
          <div style="display: flex; align-items: center; gap: 1rem;">
            <ThemeToggle variant="ghost" />
            <ThemeToggle variant="ghost" show-label />
          </div>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<ThemeToggle variant="default" />
<ThemeToggle variant="outline" />
<ThemeToggle variant="ghost" />`,
      },
    },
  },
};

// States
export const States: Story = {
  render: () => ({
    components: { ThemeToggle },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1.5rem;">
        <div style="display: flex; align-items: center; gap: 1rem;">
          <span style="width: 80px; font-size: 0.875rem; color: #666;">Normal:</span>
          <ThemeToggle />
        </div>
        <div style="display: flex; align-items: center; gap: 1rem;">
          <span style="width: 80px; font-size: 0.875rem; color: #666;">Disabled:</span>
          <ThemeToggle disabled />
        </div>
        <div style="display: flex; align-items: center; gap: 1rem;">
          <span style="width: 80px; font-size: 0.875rem; color: #666;">With Label:</span>
          <ThemeToggle show-label />
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<ThemeToggle />
<ThemeToggle disabled />
<ThemeToggle show-label />`,
      },
    },
  },
};

// Interactive Playground
export const Playground: Story = {
  args: {
    variant: 'default',
    size: 'md',
    showLabel: false,
    disabled: false,
    lightLabel: 'Light mode',
    darkLabel: 'Dark mode',
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground to test all ThemeToggle properties and states.',
      },
    },
  },
};

// Usage in Different Contexts
export const ContextExamples: Story = {
  render: () => ({
    components: { ThemeToggle },
    template: `
      <div style="display: flex; flex-direction: column; gap: 2rem;">
        <div style="background: #ffffff; padding: 1.5rem; border-radius: 0.5rem; border: 1px solid #e5e5e5;">
          <h4 style="margin: 0 0 1rem 0; font-size: 1rem; font-weight: 600;">Light Background</h4>
          <div style="display: flex; align-items: center; gap: 1rem;">
            <ThemeToggle />
            <ThemeToggle variant="outline" />
            <ThemeToggle variant="ghost" />
          </div>
        </div>
        
        <div style="background: #f5f5f5; padding: 1.5rem; border-radius: 0.5rem;">
          <h4 style="margin: 0 0 1rem 0; font-size: 1rem; font-weight: 600;">Gray Background</h4>
          <div style="display: flex; align-items: center; gap: 1rem;">
            <ThemeToggle />
            <ThemeToggle variant="outline" />
            <ThemeToggle variant="ghost" />
          </div>
        </div>
        
        <div style="background: #171717; color: white; padding: 1.5rem; border-radius: 0.5rem;">
          <h4 style="margin: 0 0 1rem 0; font-size: 1rem; font-weight: 600; color: white;">Dark Background</h4>
          <div style="display: flex; align-items: center; gap: 1rem;">
            <ThemeToggle />
            <ThemeToggle variant="outline" />
            <ThemeToggle variant="ghost" />
          </div>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'ThemeToggle component displayed on different background colors to show variant adaptation.',
      },
    },
  },
};

// Accessibility Features
export const AccessibilityFeatures: Story = {
  render: () => ({
    components: { ThemeToggle },
    template: `
      <div style="display: flex; flex-direction: column; gap: 2rem;">
        <div>
          <h4 style="margin: 0 0 1rem 0; font-size: 1rem; font-weight: 600;">Custom ARIA Labels</h4>
          <div style="display: flex; align-items: center; gap: 1rem;">
            <ThemeToggle aria-label="Toggle between light and dark themes" />
            <ThemeToggle 
              show-label 
              light-label="Enable Light Mode" 
              dark-label="Enable Dark Mode" 
              aria-label="Theme preference toggle"
            />
          </div>
          <p style="font-size: 0.875rem; color: #666; margin-top: 0.5rem;">
            Try using keyboard navigation (Tab, Space/Enter) and screen readers
          </p>
        </div>
        
        <div>
          <h4 style="margin: 0 0 1rem 0; font-size: 1rem; font-weight: 600;">Focus Indicators</h4>
          <div style="display: flex; align-items: center; gap: 1rem;">
            <ThemeToggle size="sm" />
            <ThemeToggle size="md" />
            <ThemeToggle size="lg" />
          </div>
          <p style="font-size: 0.875rem; color: #666; margin-top: 0.5rem;">
            Focus indicators automatically adjust for high contrast mode
          </p>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates accessibility features including ARIA labels, keyboard navigation, and focus indicators.',
      },
    },
  },
};