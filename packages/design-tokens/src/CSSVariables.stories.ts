import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta = {
  title: 'Design Tokens/CSS Variables Reference',
  parameters: {
    docs: {
      description: {
        component: `
# CSS Custom Properties (Variables) Reference

Complete reference of all CSS custom properties available in the design system.

## Usage

All design tokens are exported as CSS custom properties (CSS variables) that can be used directly in your stylesheets:

\`\`\`css
.my-component {
  background-color: var(--haspen-color-primary);
  padding: var(--haspen-space-md);
  border-radius: var(--haspen-radius-md);
  font-family: var(--haspen-font-family-base);
}
\`\`\`

## Benefits of CSS Variables

- ✅ **Runtime theming** - Change values dynamically with JavaScript
- ✅ **No build step** - Use directly in vanilla CSS
- ✅ **Cascade & inheritance** - Leverage CSS specificity
- ✅ **Browser DevTools** - Inspect and modify in real-time
- ✅ **Framework agnostic** - Works everywhere

## Automatic Generation

All variables are automatically generated from the SCSS tokens and synchronized across:
- SCSS files
- CSS output
- TypeScript exports
- Documentation
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ColorVariables: Story = {
  render: () => ({
    template: `
      <div class="css-vars-demo">
        <h2>Color Variables</h2>

        <h3>Brand Colors</h3>
        <table class="vars-table">
          <thead>
            <tr>
              <th>Variable</th>
              <th>Value</th>
              <th>Preview</th>
              <th>Usage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>--haspen-color-primary</code></td>
              <td>#0059b3</td>
              <td><div class="color-preview" style="background: var(--haspen-color-primary)"></div></td>
              <td>Primary brand color</td>
            </tr>
            <tr>
              <td><code>--haspen-color-primary-hover</code></td>
              <td>Darker primary</td>
              <td><div class="color-preview" style="background: var(--haspen-color-primary-hover, #004080)"></div></td>
              <td>Primary hover state</td>
            </tr>
            <tr>
              <td><code>--haspen-color-success</code></td>
              <td>#28a745</td>
              <td><div class="color-preview" style="background: #28a745"></div></td>
              <td>Success messages</td>
            </tr>
            <tr>
              <td><code>--haspen-color-warning</code></td>
              <td>#ffc107</td>
              <td><div class="color-preview" style="background: #ffc107"></div></td>
              <td>Warning messages</td>
            </tr>
            <tr>
              <td><code>--haspen-color-error</code></td>
              <td>#dc3545</td>
              <td><div class="color-preview" style="background: #dc3545"></div></td>
              <td>Error messages</td>
            </tr>
            <tr>
              <td><code>--haspen-color-info</code></td>
              <td>#17a2b8</td>
              <td><div class="color-preview" style="background: #17a2b8"></div></td>
              <td>Info messages</td>
            </tr>
          </tbody>
        </table>

        <h3>Semantic Colors (Auto-switching)</h3>
        <p>These colors automatically adapt to light/dark mode using CSS <code>light-dark()</code> function.</p>
        <table class="vars-table">
          <thead>
            <tr>
              <th>Variable</th>
              <th>Light Mode</th>
              <th>Dark Mode</th>
              <th>Usage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>--haspen-color-background</code></td>
              <td>#ffffff</td>
              <td>#121212</td>
              <td>Page background</td>
            </tr>
            <tr>
              <td><code>--haspen-color-surface</code></td>
              <td>#f8f9fa</td>
              <td>#1e1e1e</td>
              <td>Card/panel backgrounds</td>
            </tr>
            <tr>
              <td><code>--haspen-color-text-primary</code></td>
              <td>#212529</td>
              <td>#ffffff</td>
              <td>Primary text</td>
            </tr>
            <tr>
              <td><code>--haspen-color-text-secondary</code></td>
              <td>#6c757d</td>
              <td>#b0b0b0</td>
              <td>Secondary text</td>
            </tr>
            <tr>
              <td><code>--haspen-color-border</code></td>
              <td>#dee2e6</td>
              <td>#404040</td>
              <td>Borders and dividers</td>
            </tr>
          </tbody>
        </table>

        <h3>Status Background Colors</h3>
        <table class="vars-table">
          <thead>
            <tr>
              <th>Variable</th>
              <th>Light Mode</th>
              <th>Dark Mode</th>
              <th>Usage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>--haspen-color-success-background</code></td>
              <td>#d4edda</td>
              <td>#1a3d20</td>
              <td>Success alert background</td>
            </tr>
            <tr>
              <td><code>--haspen-color-warning-background</code></td>
              <td>#fff3cd</td>
              <td>#3d3a1a</td>
              <td>Warning alert background</td>
            </tr>
            <tr>
              <td><code>--haspen-color-error-background</code></td>
              <td>#f8d7da</td>
              <td>#3d1a1c</td>
              <td>Error alert background</td>
            </tr>
            <tr>
              <td><code>--haspen-color-info-background</code></td>
              <td>#d1ecf1</td>
              <td>#1a2e3d</td>
              <td>Info alert background</td>
            </tr>
          </tbody>
        </table>

        <h3>Usage Example</h3>
        <div class="code-block">
          <pre><code>/* Using color variables */
.button {
  background-color: var(--haspen-color-primary);
  color: white;
}

.button:hover {
  background-color: var(--haspen-color-primary-hover);
}

.card {
  background-color: var(--haspen-color-surface);
  color: var(--haspen-color-text-primary);
  border: 1px solid var(--haspen-color-border);
}

.alert-success {
  background-color: var(--haspen-color-success-background);
  color: var(--haspen-color-success);
}</code></pre>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Complete reference of all color-related CSS custom properties.',
      },
    },
  },
};

export const SpacingVariables: Story = {
  render: () => ({
    template: `
      <div class="css-vars-demo">
        <h2>Spacing Variables</h2>
        <p>8px-based spacing scale with responsive support.</p>

        <h3>Core Spacing Scale</h3>
        <table class="vars-table">
          <thead>
            <tr>
              <th>Variable</th>
              <th>Value</th>
              <th>Pixels (at 16px base)</th>
              <th>Visual</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>--haspen-space-xs</code></td>
              <td>0.5rem</td>
              <td>8px</td>
              <td><div class="spacing-bar" style="width: 8px"></div></td>
            </tr>
            <tr>
              <td><code>--haspen-space-sm</code></td>
              <td>1rem</td>
              <td>16px</td>
              <td><div class="spacing-bar" style="width: 16px"></div></td>
            </tr>
            <tr>
              <td><code>--haspen-space-md</code></td>
              <td>1.5rem</td>
              <td>24px</td>
              <td><div class="spacing-bar" style="width: 24px"></div></td>
            </tr>
            <tr>
              <td><code>--haspen-space-lg</code></td>
              <td>2rem</td>
              <td>32px</td>
              <td><div class="spacing-bar" style="width: 32px"></div></td>
            </tr>
            <tr>
              <td><code>--haspen-space-xl</code></td>
              <td>3rem</td>
              <td>48px</td>
              <td><div class="spacing-bar" style="width: 48px"></div></td>
            </tr>
            <tr>
              <td><code>--haspen-space-2xl</code></td>
              <td>4rem</td>
              <td>64px</td>
              <td><div class="spacing-bar" style="width: 64px"></div></td>
            </tr>
            <tr>
              <td><code>--haspen-space-3xl</code></td>
              <td>6rem</td>
              <td>96px</td>
              <td><div class="spacing-bar" style="width: 96px"></div></td>
            </tr>
          </tbody>
        </table>

        <h3>Component Spacing</h3>
        <table class="vars-table">
          <thead>
            <tr>
              <th>Variable</th>
              <th>Value</th>
              <th>Usage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>--spacer</code></td>
              <td>8px</td>
              <td>Base spacing unit</td>
            </tr>
            <tr>
              <td><code>--spacing-xs</code></td>
              <td>4px</td>
              <td>Extra small spacing</td>
            </tr>
            <tr>
              <td><code>--spacing-sm</code></td>
              <td>8px</td>
              <td>Small spacing</td>
            </tr>
            <tr>
              <td><code>--spacing-md</code></td>
              <td>16px</td>
              <td>Medium spacing (default)</td>
            </tr>
            <tr>
              <td><code>--spacing-lg</code></td>
              <td>24px</td>
              <td>Large spacing</td>
            </tr>
            <tr>
              <td><code>--spacing-xl</code></td>
              <td>32px</td>
              <td>Extra large spacing</td>
            </tr>
            <tr>
              <td><code>--spacing-2xl</code></td>
              <td>48px</td>
              <td>2x extra large spacing</td>
            </tr>
            <tr>
              <td><code>--spacing-3xl</code></td>
              <td>64px</td>
              <td>3x extra large spacing</td>
            </tr>
          </tbody>
        </table>

        <h3>Usage Examples</h3>
        <div class="code-block">
          <pre><code>/* Padding */
.card {
  padding: var(--haspen-space-md);
}

.compact-card {
  padding: var(--haspen-space-sm);
}

/* Margin */
.section {
  margin-bottom: var(--haspen-space-xl);
}

/* Gap in flex/grid */
.grid {
  display: grid;
  gap: var(--haspen-space-md);
}

/* Responsive spacing */
.responsive-section {
  padding: var(--haspen-space-sm);
}

@media (min-width: 768px) {
  .responsive-section {
    padding: var(--haspen-space-lg);
  }
}</code></pre>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Complete reference of spacing CSS custom properties.',
      },
    },
  },
};

export const TypographyVariables: Story = {
  render: () => ({
    template: `
      <div class="css-vars-demo">
        <h2>Typography Variables</h2>

        <h3>Font Families</h3>
        <table class="vars-table">
          <thead>
            <tr>
              <th>Variable</th>
              <th>Value</th>
              <th>Usage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>--font-family-primary</code></td>
              <td>'IBM Plex Sans', system fonts</td>
              <td>Primary font for all text</td>
            </tr>
            <tr>
              <td><code>--font-family-sans-serif</code></td>
              <td>Same as primary</td>
              <td>Sans-serif font family</td>
            </tr>
            <tr>
              <td><code>--font-family-serif</code></td>
              <td>Georgia, Cambria, Times New Roman</td>
              <td>Serif font family</td>
            </tr>
            <tr>
              <td><code>--font-family-monospace</code></td>
              <td>SFMono-Regular, Consolas, Menlo</td>
              <td>Monospace for code</td>
            </tr>
          </tbody>
        </table>

        <h3>Font Sizes</h3>
        <table class="vars-table">
          <thead>
            <tr>
              <th>Variable</th>
              <th>Value</th>
              <th>Pixels</th>
              <th>Usage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>--font-size-xs</code></td>
              <td>1.2rem</td>
              <td>12px</td>
              <td>Extra small text</td>
            </tr>
            <tr>
              <td><code>--font-size-small</code></td>
              <td>1.4rem</td>
              <td>14px</td>
              <td>Small text</td>
            </tr>
            <tr>
              <td><code>--font-size-base</code></td>
              <td>1.6rem</td>
              <td>16px</td>
              <td>Base body text</td>
            </tr>
            <tr>
              <td><code>--h1-font-size</code></td>
              <td>3.2rem</td>
              <td>32px (responsive)</td>
              <td>H1 heading</td>
            </tr>
            <tr>
              <td><code>--h2-font-size</code></td>
              <td>2.4rem</td>
              <td>24px (responsive)</td>
              <td>H2 heading</td>
            </tr>
            <tr>
              <td><code>--h3-font-size</code></td>
              <td>2rem</td>
              <td>20px (responsive)</td>
              <td>H3 heading</td>
            </tr>
            <tr>
              <td><code>--h4-font-size</code></td>
              <td>1.8rem</td>
              <td>18px (responsive)</td>
              <td>H4 heading</td>
            </tr>
            <tr>
              <td><code>--h5-font-size</code></td>
              <td>1.6rem</td>
              <td>16px (responsive)</td>
              <td>H5 heading</td>
            </tr>
            <tr>
              <td><code>--h6-font-size</code></td>
              <td>1.3rem</td>
              <td>13px (responsive)</td>
              <td>H6 heading</td>
            </tr>
          </tbody>
        </table>

        <h3>Font Weights</h3>
        <table class="vars-table">
          <thead>
            <tr>
              <th>Variable</th>
              <th>Value</th>
              <th>Usage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>--font-weight-normal</code></td>
              <td>400</td>
              <td>Regular text</td>
            </tr>
            <tr>
              <td><code>--font-weight-medium</code></td>
              <td>500</td>
              <td>Medium weight</td>
            </tr>
            <tr>
              <td><code>--font-weight-semibold</code></td>
              <td>600</td>
              <td>Semi-bold text</td>
            </tr>
            <tr>
              <td><code>--font-weight-bold</code></td>
              <td>700</td>
              <td>Bold text, headings</td>
            </tr>
          </tbody>
        </table>

        <h3>Line Heights</h3>
        <table class="vars-table">
          <thead>
            <tr>
              <th>Variable</th>
              <th>Value</th>
              <th>Usage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>--line-height-base</code></td>
              <td>1.5</td>
              <td>Body text</td>
            </tr>
            <tr>
              <td><code>--line-height-heading</code></td>
              <td>1.2</td>
              <td>Headings</td>
            </tr>
          </tbody>
        </table>

        <h3>Usage Examples</h3>
        <div class="code-block">
          <pre><code>/* Base typography */
body {
  font-family: var(--font-family-primary);
  font-size: var(--font-size-base);
  line-height: var(--line-height-base);
  font-weight: var(--font-weight-normal);
}

/* Headings */
h1 {
  font-size: var(--h1-font-size);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-heading);
}

/* Small text */
.caption {
  font-size: var(--font-size-small);
}

/* Code blocks */
code {
  font-family: var(--font-family-monospace);
  font-size: var(--font-size-small);
}</code></pre>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Complete reference of typography CSS custom properties.',
      },
    },
  },
};

export const OtherVariables: Story = {
  render: () => ({
    template: `
      <div class="css-vars-demo">
        <h2>Other Design Token Variables</h2>

        <h3>Border Radius</h3>
        <table class="vars-table">
          <thead>
            <tr>
              <th>Variable</th>
              <th>Value</th>
              <th>Preview</th>
              <th>Usage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>--radius-none</code></td>
              <td>0</td>
              <td><div class="radius-preview" style="border-radius: 0"></div></td>
              <td>No rounding</td>
            </tr>
            <tr>
              <td><code>--radius-sm</code></td>
              <td>4px</td>
              <td><div class="radius-preview" style="border-radius: 4px"></div></td>
              <td>Small radius</td>
            </tr>
            <tr>
              <td><code>--radius-default</code></td>
              <td>6px</td>
              <td><div class="radius-preview" style="border-radius: 6px"></div></td>
              <td>Default radius</td>
            </tr>
            <tr>
              <td><code>--radius-md</code></td>
              <td>8px</td>
              <td><div class="radius-preview" style="border-radius: 8px"></div></td>
              <td>Medium radius</td>
            </tr>
            <tr>
              <td><code>--radius-lg</code></td>
              <td>12px</td>
              <td><div class="radius-preview" style="border-radius: 12px"></div></td>
              <td>Large radius</td>
            </tr>
            <tr>
              <td><code>--radius-xl</code></td>
              <td>16px</td>
              <td><div class="radius-preview" style="border-radius: 16px"></div></td>
              <td>Extra large radius</td>
            </tr>
            <tr>
              <td><code>--radius-full</code></td>
              <td>9999px</td>
              <td><div class="radius-preview" style="border-radius: 9999px"></div></td>
              <td>Fully rounded (pills)</td>
            </tr>
          </tbody>
        </table>

        <h3>Shadows</h3>
        <table class="vars-table">
          <thead>
            <tr>
              <th>Variable</th>
              <th>Preview</th>
              <th>Usage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>--shadow-subtle</code></td>
              <td><div class="shadow-preview" style="box-shadow: 0 1px 3px rgba(0,0,0,0.1)"></div></td>
              <td>Very subtle elevation</td>
            </tr>
            <tr>
              <td><code>--shadow-light</code></td>
              <td><div class="shadow-preview" style="box-shadow: 0 2px 4px rgba(0,0,0,0.1)"></div></td>
              <td>Light elevation (cards)</td>
            </tr>
            <tr>
              <td><code>--shadow-medium</code></td>
              <td><div class="shadow-preview" style="box-shadow: 0 4px 8px rgba(0,0,0,0.12)"></div></td>
              <td>Medium elevation</td>
            </tr>
            <tr>
              <td><code>--shadow-large</code></td>
              <td><div class="shadow-preview" style="box-shadow: 0 8px 16px rgba(0,0,0,0.15)"></div></td>
              <td>Large elevation (modals)</td>
            </tr>
            <tr>
              <td><code>--shadow-focus</code></td>
              <td><div class="shadow-preview focus" tabindex="0"></div></td>
              <td>Focus ring (click to see)</td>
            </tr>
          </tbody>
        </table>

        <h3>Z-Index Layers</h3>
        <table class="vars-table">
          <thead>
            <tr>
              <th>Variable</th>
              <th>Value</th>
              <th>Usage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>--z-index-default</code></td>
              <td>0</td>
              <td>Default stacking</td>
            </tr>
            <tr>
              <td><code>--z-index-dropdown</code></td>
              <td>1000</td>
              <td>Dropdown menus</td>
            </tr>
            <tr>
              <td><code>--z-index-sticky</code></td>
              <td>1020</td>
              <td>Sticky headers</td>
            </tr>
            <tr>
              <td><code>--z-index-fixed</code></td>
              <td>1030</td>
              <td>Fixed elements</td>
            </tr>
            <tr>
              <td><code>--z-index-modal-backdrop</code></td>
              <td>1040</td>
              <td>Modal backdrop</td>
            </tr>
            <tr>
              <td><code>--z-index-modal</code></td>
              <td>1050</td>
              <td>Modal dialogs</td>
            </tr>
            <tr>
              <td><code>--z-index-popover</code></td>
              <td>1060</td>
              <td>Popovers</td>
            </tr>
            <tr>
              <td><code>--z-index-tooltip</code></td>
              <td>1070</td>
              <td>Tooltips</td>
            </tr>
            <tr>
              <td><code>--z-index-notification</code></td>
              <td>1080</td>
              <td>Toast notifications</td>
            </tr>
          </tbody>
        </table>

        <h3>Breakpoints</h3>
        <table class="vars-table">
          <thead>
            <tr>
              <th>Variable</th>
              <th>Value</th>
              <th>Device</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>--breakpoint-xs</code></td>
              <td>0</td>
              <td>Mobile (default)</td>
            </tr>
            <tr>
              <td><code>--breakpoint-sm</code></td>
              <td>576px</td>
              <td>Small tablet</td>
            </tr>
            <tr>
              <td><code>--breakpoint-md</code></td>
              <td>768px</td>
              <td>Tablet</td>
            </tr>
            <tr>
              <td><code>--breakpoint-lg</code></td>
              <td>992px</td>
              <td>Desktop</td>
            </tr>
            <tr>
              <td><code>--breakpoint-xl</code></td>
              <td>1200px</td>
              <td>Large desktop</td>
            </tr>
          </tbody>
        </table>

        <h3>Grid</h3>
        <table class="vars-table">
          <thead>
            <tr>
              <th>Variable</th>
              <th>Value</th>
              <th>Usage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>--grid-columns</code></td>
              <td>12</td>
              <td>Number of columns</td>
            </tr>
            <tr>
              <td><code>--grid-gutter-width</code></td>
              <td>32px</td>
              <td>Gutter between columns</td>
            </tr>
          </tbody>
        </table>

        <h3>Usage Examples</h3>
        <div class="code-block">
          <pre><code>/* Border radius */
.button {
  border-radius: var(--radius-default);
}

.pill {
  border-radius: var(--radius-full);
}

/* Shadows */
.card {
  box-shadow: var(--shadow-light);
}

.modal {
  box-shadow: var(--shadow-large);
}

/* Z-index */
.dropdown {
  z-index: var(--z-index-dropdown);
}

.modal {
  z-index: var(--z-index-modal);
}

.tooltip {
  z-index: var(--z-index-tooltip);
}</code></pre>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Reference for border radius, shadows, z-index, and other design tokens.',
      },
    },
  },
};

export const RuntimeTheming: Story = {
  render: () => ({
    template: `
      <div class="css-vars-demo">
        <h2>Runtime Theming with CSS Variables</h2>
        <p>CSS variables can be changed at runtime with JavaScript, enabling dynamic theming.</p>

        <h3>JavaScript Theme Switching</h3>
        <div class="code-block">
          <pre><code>// Change theme colors at runtime
function setTheme(theme: 'light' | 'dark') {
  const root = document.documentElement;

  if (theme === 'dark') {
    root.style.setProperty('--haspen-color-background', '#121212');
    root.style.setProperty('--haspen-color-surface', '#1e1e1e');
    root.style.setProperty('--haspen-color-text-primary', '#ffffff');
    root.style.setProperty('--haspen-color-text-secondary', '#b0b0b0');
  } else {
    root.style.setProperty('--haspen-color-background', '#ffffff');
    root.style.setProperty('--haspen-color-surface', '#f8f9fa');
    root.style.setProperty('--haspen-color-text-primary', '#212529');
    root.style.setProperty('--haspen-color-text-secondary', '#6c757d');
  }
}

// Change individual values
document.documentElement.style.setProperty(
  '--haspen-color-primary',
  '#ff0000'
);

// Get current value
const primaryColor = getComputedStyle(document.documentElement)
  .getPropertyValue('--haspen-color-primary');</code></pre>
        </div>

        <h3>Scoped Theme Variables</h3>
        <div class="code-block">
          <pre><code>/* Override variables in specific contexts */
.dark-section {
  --haspen-color-background: #1a1a1a;
  --haspen-color-text-primary: #ffffff;

  /* All children inherit these values */
}

.themed-card {
  --haspen-color-primary: #ff6b6b;

  background: var(--haspen-color-background);
  color: var(--haspen-color-text-primary);
  border-color: var(--haspen-color-primary);
}</code></pre>
        </div>

        <h3>Fallback Values</h3>
        <div class="code-block">
          <pre><code>/* Provide fallback if variable is not defined */
.button {
  background: var(--haspen-color-primary, #0059b3);
  padding: var(--button-padding, var(--haspen-space-md, 1rem));
}

/* Chain multiple fallbacks */
.text {
  color: var(
    --custom-text-color,
    var(--haspen-color-text-primary, #000000)
  );
}</code></pre>
        </div>

        <h3>calc() with Variables</h3>
        <div class="code-block">
          <pre><code>/* Mathematical operations with CSS variables */
.card {
  /* Double the standard padding */
  padding: calc(var(--haspen-space-md) * 2);

  /* Spacing between elements */
  margin-bottom: calc(var(--haspen-space-lg) + var(--haspen-space-sm));

  /* Responsive sizing */
  width: calc(100% - var(--haspen-space-xl));
}</code></pre>
        </div>

        <h3>Media Query Support</h3>
        <div class="code-block">
          <pre><code>:root {
  --card-padding: var(--haspen-space-sm);
}

@media (min-width: 768px) {
  :root {
    --card-padding: var(--haspen-space-md);
  }
}

@media (min-width: 1200px) {
  :root {
    --card-padding: var(--haspen-space-lg);
  }
}

.card {
  /* Automatically responsive */
  padding: var(--card-padding);
}</code></pre>
        </div>

        <h3>Browser DevTools</h3>
        <div class="info-box">
          <strong>💡 Pro Tip:</strong>
          <p>You can inspect and modify CSS variables in real-time using browser DevTools:</p>
          <ol>
            <li>Open DevTools (F12)</li>
            <li>Select the <code>&lt;html&gt;</code> element</li>
            <li>Find CSS variables in the Styles panel</li>
            <li>Edit values to see immediate changes</li>
            <li>Test different color schemes and spacing</li>
          </ol>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'How to use CSS variables for runtime theming and dynamic styling.',
      },
    },
  },
};
