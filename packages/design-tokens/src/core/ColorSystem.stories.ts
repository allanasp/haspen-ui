import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta = {
  title: 'Design Tokens/Color System',
  parameters: {
    docs: {
      description: {
        component: `
# Modern SASS Color System

A comprehensive color token system with 9-shade palettes, semantic color mapping, and powerful SASS helper functions.

## Color Families

Each color family includes 9 shades (50-900) following modern design system conventions:

- **Gray**: Neutral colors for text, backgrounds, and borders
- **Blue**: Primary brand colors
- **Green**: Success states and positive actions
- **Red**: Error states and destructive actions  
- **Yellow**: Warning states and cautionary content
- **Indigo**: Alternative primary colors

## Usage Examples

### SASS Functions

\`\`\`scss
// Access specific color shades
.button {
  background-color: color('blue', 500);
  border: 1px solid color('blue', 600);
}

// Use semantic colors
.alert {
  background-color: semantic('error');
  color: text('inverse');
}

// Create color variations
.button--light {
  background-color: lighter('blue', 500, 2); // blue-300
}

.button--dark {
  background-color: darker('blue', 500, 1); // blue-600
}

// Alpha variants
.overlay {
  background-color: alpha('gray', 900, 0.8);
}
\`\`\`

### CSS Custom Properties

All colors are automatically available as CSS custom properties:

\`\`\`css
.component {
  background-color: var(--color-blue-500);
  color: var(--text-primary);
  border-color: var(--border-medium);
}
\`\`\`

### Helper Mixins

\`\`\`scss
.card {
  @include color-scheme('surface', 'primary');
  @include focus-styles('primary');
}

.button {
  @include hover-color('blue', 500, 600);
}
\`\`\`

## Color Accessibility

All colors in the system are designed with accessibility in mind:
- High contrast ratios between text and background colors
- WCAG AA compliant color combinations
- Semantic naming for clear intent
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Color palette display component
const ColorPalette = {
  template: `
    <div>
      <h2>Color Families</h2>
      
      <div v-for="family in colorFamilies" :key="family.name" style="margin-bottom: 2rem;">
        <h3>{{ family.name }}</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 1rem;">
          <div 
            v-for="shade in family.shades" 
            :key="shade.name"
            :style="{
              backgroundColor: shade.color,
              color: shade.textColor,
              padding: '1rem',
              borderRadius: '0.5rem',
              border: '1px solid #e5e5e5',
              textAlign: 'center'
            }"
          >
            <div style="font-weight: 600; margin-bottom: 0.25rem;">{{ shade.name }}</div>
            <div style="font-size: 0.875rem; opacity: 0.8;">{{ shade.color }}</div>
          </div>
        </div>
      </div>
      
      <h2>Semantic Colors</h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
        <div 
          v-for="semantic in semanticColors" 
          :key="semantic.name"
          :style="{
            backgroundColor: semantic.color,
            color: semantic.textColor,
            padding: '1.5rem',
            borderRadius: '0.5rem',
            border: '1px solid #e5e5e5',
            textAlign: 'center'
          }"
        >
          <div style="font-weight: 600; margin-bottom: 0.5rem;">{{ semantic.name }}</div>
          <div style="font-size: 0.875rem; opacity: 0.8;">{{ semantic.color }}</div>
          <div style="font-size: 0.75rem; margin-top: 0.5rem;">{{ semantic.usage }}</div>
        </div>
      </div>
    </div>
  `,
  setup() {
    const colorFamilies = [
      {
        name: 'Gray (Neutral)',
        shades: [
          { name: '50', color: '#fafafa', textColor: '#171717' },
          { name: '100', color: '#f5f5f5', textColor: '#171717' },
          { name: '200', color: '#e5e5e5', textColor: '#171717' },
          { name: '300', color: '#d4d4d4', textColor: '#171717' },
          { name: '400', color: '#a3a3a3', textColor: '#171717' },
          { name: '500', color: '#737373', textColor: '#ffffff' },
          { name: '600', color: '#525252', textColor: '#ffffff' },
          { name: '700', color: '#404040', textColor: '#ffffff' },
          { name: '800', color: '#262626', textColor: '#ffffff' },
          { name: '900', color: '#171717', textColor: '#ffffff' },
        ]
      },
      {
        name: 'Blue (Primary)',
        shades: [
          { name: '50', color: '#eff6ff', textColor: '#1e3a8a' },
          { name: '100', color: '#dbeafe', textColor: '#1e3a8a' },
          { name: '200', color: '#bfdbfe', textColor: '#1e3a8a' },
          { name: '300', color: '#93c5fd', textColor: '#1e3a8a' },
          { name: '400', color: '#60a5fa', textColor: '#ffffff' },
          { name: '500', color: '#3b82f6', textColor: '#ffffff' },
          { name: '600', color: '#2563eb', textColor: '#ffffff' },
          { name: '700', color: '#1d4ed8', textColor: '#ffffff' },
          { name: '800', color: '#1e40af', textColor: '#ffffff' },
          { name: '900', color: '#1e3a8a', textColor: '#ffffff' },
        ]
      },
      {
        name: 'Green (Success)',
        shades: [
          { name: '50', color: '#f0fdf4', textColor: '#14532d' },
          { name: '100', color: '#dcfce7', textColor: '#14532d' },
          { name: '200', color: '#bbf7d0', textColor: '#14532d' },
          { name: '300', color: '#86efac', textColor: '#14532d' },
          { name: '400', color: '#4ade80', textColor: '#ffffff' },
          { name: '500', color: '#22c55e', textColor: '#ffffff' },
          { name: '600', color: '#16a34a', textColor: '#ffffff' },
          { name: '700', color: '#15803d', textColor: '#ffffff' },
          { name: '800', color: '#166534', textColor: '#ffffff' },
          { name: '900', color: '#14532d', textColor: '#ffffff' },
        ]
      },
      {
        name: 'Red (Error)',
        shades: [
          { name: '50', color: '#fef2f2', textColor: '#7f1d1d' },
          { name: '100', color: '#fee2e2', textColor: '#7f1d1d' },
          { name: '200', color: '#fecaca', textColor: '#7f1d1d' },
          { name: '300', color: '#fca5a5', textColor: '#7f1d1d' },
          { name: '400', color: '#f87171', textColor: '#ffffff' },
          { name: '500', color: '#ef4444', textColor: '#ffffff' },
          { name: '600', color: '#dc2626', textColor: '#ffffff' },
          { name: '700', color: '#b91c1c', textColor: '#ffffff' },
          { name: '800', color: '#991b1b', textColor: '#ffffff' },
          { name: '900', color: '#7f1d1d', textColor: '#ffffff' },
        ]
      },
      {
        name: 'Yellow (Warning)',
        shades: [
          { name: '50', color: '#fefce8', textColor: '#78350f' },
          { name: '100', color: '#fef3c7', textColor: '#78350f' },
          { name: '200', color: '#fde68a', textColor: '#78350f' },
          { name: '300', color: '#fcd34d', textColor: '#78350f' },
          { name: '400', color: '#fbbf24', textColor: '#78350f' },
          { name: '500', color: '#f59e0b', textColor: '#ffffff' },
          { name: '600', color: '#d97706', textColor: '#ffffff' },
          { name: '700', color: '#b45309', textColor: '#ffffff' },
          { name: '800', color: '#92400e', textColor: '#ffffff' },
          { name: '900', color: '#78350f', textColor: '#ffffff' },
        ]
      }
    ];

    const semanticColors = [
      { 
        name: 'Primary', 
        color: '#2563eb', 
        textColor: '#ffffff',
        usage: 'Main brand color, primary actions'
      },
      { 
        name: 'Secondary', 
        color: '#525252', 
        textColor: '#ffffff',
        usage: 'Secondary actions, neutral content'
      },
      { 
        name: 'Success', 
        color: '#16a34a', 
        textColor: '#ffffff',
        usage: 'Positive feedback, completion states'
      },
      { 
        name: 'Warning', 
        color: '#f59e0b', 
        textColor: '#ffffff',
        usage: 'Cautionary content, important notices'
      },
      { 
        name: 'Error', 
        color: '#dc2626', 
        textColor: '#ffffff',
        usage: 'Error states, destructive actions'
      },
      { 
        name: 'Info', 
        color: '#3b82f6', 
        textColor: '#ffffff',
        usage: 'Informational content, help text'
      }
    ];

    return {
      colorFamilies,
      semanticColors
    };
  }
};

const UsageExamples = {
  template: `
    <div>
      <h2>SASS Function Examples</h2>
      
      <div style="display: grid; gap: 2rem; margin-bottom: 3rem;">
        <div>
          <h3>Basic Color Access</h3>
          <pre style="background: #f5f5f5; padding: 1rem; border-radius: 0.5rem; overflow-x: auto;"><code>// Access specific color shades
.button {
  background-color: color('blue', 500);    // #3b82f6
  border: 1px solid color('blue', 600);    // #2563eb
}

// Use semantic colors  
.alert {
  background-color: semantic('error');     // #dc2626
  color: text('inverse');                  // #ffffff
}</code></pre>
        </div>

        <div>
          <h3>Color Variations</h3>
          <pre style="background: #f5f5f5; padding: 1rem; border-radius: 0.5rem; overflow-x: auto;"><code>// Create lighter/darker variants
.button--light {
  background-color: lighter('blue', 500, 2);  // blue-300 (#93c5fd)
}

.button--dark {
  background-color: darker('blue', 500, 1);   // blue-600 (#2563eb)
}

// Alpha variants
.overlay {
  background-color: alpha('gray', 900, 0.8);  // rgba(23, 23, 23, 0.8)
}</code></pre>
        </div>

        <div>
          <h3>CSS Custom Properties</h3>
          <pre style="background: #f5f5f5; padding: 1rem; border-radius: 0.5rem; overflow-x: auto;"><code>/* Use CSS variables directly */
.component {
  background-color: var(--color-blue-500);
  color: var(--text-primary);
  border-color: var(--border-medium);
}

/* Or use SASS helper functions */
.component {
  background-color: css-color('blue', 500);
  color: css-text('primary');
  border-color: css-border('medium');
}</code></pre>
        </div>

        <div>
          <h3>Helper Mixins</h3>
          <pre style="background: #f5f5f5; padding: 1rem; border-radius: 0.5rem; overflow-x: auto;"><code>// Apply color scheme
.card {
  @include color-scheme('surface', 'primary');
  @include focus-styles('primary');
}

// Hover states
.button {
  @include hover-color('blue', 500, 600);
}</code></pre>
        </div>
      </div>

      <h2>Live Examples</h2>
      <div style="display: grid; gap: 1rem;">
        <div 
          v-for="example in examples" 
          :key="example.name"
          :style="example.styles"
          style="padding: 1rem; border-radius: 0.5rem; border: 1px solid #e5e5e5;"
        >
          <strong>{{ example.name }}</strong>: {{ example.description }}
        </div>
      </div>
    </div>
  `,
  setup() {
    const examples = [
      {
        name: 'Primary Button',
        description: 'Using semantic primary color',
        styles: {
          backgroundColor: 'var(--semantic-primary, #2563eb)',
          color: 'white',
        }
      },
      {
        name: 'Success Alert',
        description: 'Using semantic success color',
        styles: {
          backgroundColor: 'var(--semantic-success, #16a34a)',
          color: 'white',
        }
      },
      {
        name: 'Surface Card',
        description: 'Using surface background',
        styles: {
          backgroundColor: 'var(--surface-surface, #ffffff)',
          color: 'var(--text-primary, #171717)',
          border: '1px solid var(--border-light, #e5e5e5)',
        }
      },
      {
        name: 'Warning Banner',
        description: 'Using semantic warning color',
        styles: {
          backgroundColor: 'var(--semantic-warning, #f59e0b)',
          color: 'white',
        }
      }
    ];

    return { examples };
  }
};

export const ColorPaletteDisplay: Story = {
  render: () => ({
    components: { ColorPalette },
    template: '<ColorPalette />',
  }),
};

export const UsageExamplesDisplay: Story = {
  render: () => ({
    components: { UsageExamples },
    template: '<UsageExamples />',
  }),
};