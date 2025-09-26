import type { Meta, StoryObj } from '@storybook/vue3';
import './GridUtilities.stories.scss';

// Grid Utilities Demo Component
const GridUtilitiesDemo = {
  template: `
    <div class="grid-utilities-demo">
      <h2>CSS Grid Utilities</h2>
      
      <!-- Basic Grid Examples -->
      <section class="demo-section">
        <h3>Basic Grid Layouts</h3>
        
        <div class="example-container">
          <h4>2 Column Grid</h4>
          <div class="haspen-grid haspen-grid-cols-2 haspen-gap-4 demo-grid">
            <div class="demo-item">Item 1</div>
            <div class="demo-item">Item 2</div>
            <div class="demo-item">Item 3</div>
            <div class="demo-item">Item 4</div>
          </div>
        </div>

        <div class="example-container">
          <h4>3 Column Grid</h4>
          <div class="haspen-grid haspen-grid-cols-3 haspen-gap-4 demo-grid">
            <div class="demo-item">Item 1</div>
            <div class="demo-item">Item 2</div>
            <div class="demo-item">Item 3</div>
            <div class="demo-item">Item 4</div>
            <div class="demo-item">Item 5</div>
            <div class="demo-item">Item 6</div>
          </div>
        </div>

        <div class="example-container">
          <h4>4 Column Grid</h4>
          <div class="haspen-grid haspen-grid-cols-4 haspen-gap-6 demo-grid">
            <div class="demo-item">Item 1</div>
            <div class="demo-item">Item 2</div>
            <div class="demo-item">Item 3</div>
            <div class="demo-item">Item 4</div>
          </div>
        </div>
      </section>

      <!-- Column Spanning -->
      <section class="demo-section">
        <h3>Column Spanning</h3>
        
        <div class="example-container">
          <h4>Column Span Examples</h4>
          <div class="haspen-grid haspen-grid-cols-6 haspen-gap-4 demo-grid">
            <div class="demo-item haspen-col-span-2">Span 2</div>
            <div class="demo-item haspen-col-span-4">Span 4</div>
            <div class="demo-item haspen-col-span-1">1</div>
            <div class="demo-item haspen-col-span-3">Span 3</div>
            <div class="demo-item haspen-col-span-2">Span 2</div>
            <div class="demo-item haspen-col-span-full">Full Width</div>
          </div>
        </div>
      </section>

      <!-- Responsive Grids -->
      <section class="demo-section">
        <h3>Responsive Grid</h3>
        
        <div class="example-container">
          <h4>Mobile → Tablet → Desktop</h4>
          <p>Resize window to see responsive behavior</p>
          <div class="haspen-grid haspen-grid-cols-1 haspen-md:grid-cols-2 haspen-lg:grid-cols-4 haspen-gap-4 demo-grid">
            <div class="demo-item">Responsive 1</div>
            <div class="demo-item">Responsive 2</div>
            <div class="demo-item">Responsive 3</div>
            <div class="demo-item">Responsive 4</div>
            <div class="demo-item">Responsive 5</div>
            <div class="demo-item">Responsive 6</div>
            <div class="demo-item">Responsive 7</div>
            <div class="demo-item">Responsive 8</div>
          </div>
        </div>
      </section>

      <!-- Card Grid Pattern -->
      <section class="demo-section">
        <h3>Common Grid Patterns</h3>
        
        <div class="example-container">
          <h4>Auto-Fit Card Grid</h4>
          <div class="haspen-grid-cards demo-grid">
            <div class="demo-card">
              <h5>Card 1</h5>
              <p>This is a responsive card that automatically adjusts based on available space.</p>
            </div>
            <div class="demo-card">
              <h5>Card 2</h5>
              <p>Cards maintain a minimum width of 280px and grow to fill available space.</p>
            </div>
            <div class="demo-card">
              <h5>Card 3</h5>
              <p>Perfect for product grids, article previews, or any card-based layout.</p>
            </div>
            <div class="demo-card">
              <h5>Card 4</h5>
              <p>Uses CSS Grid's auto-fit for intelligent responsive behavior.</p>
            </div>
            <div class="demo-card">
              <h5>Card 5</h5>
              <p>No media queries needed - grid handles responsive behavior automatically.</p>
            </div>
            <div class="demo-card">
              <h5>Card 6</h5>
              <p>Consistent gaps and alignment across all viewport sizes.</p>
            </div>
          </div>
        </div>

        <div class="example-container">
          <h4>Sidebar Layout</h4>
          <div class="haspen-grid-sidebar demo-sidebar">
            <aside class="demo-sidebar-nav">
              <h5>Sidebar</h5>
              <nav>
                <ul>
                  <li><a href="#">Navigation Item 1</a></li>
                  <li><a href="#">Navigation Item 2</a></li>
                  <li><a href="#">Navigation Item 3</a></li>
                  <li><a href="#">Navigation Item 4</a></li>
                </ul>
              </nav>
            </aside>
            <main class="demo-main-content">
              <h5>Main Content</h5>
              <p>This is the main content area that takes up the remaining space. The sidebar automatically sizes to its content while the main area fills the rest.</p>
              <p>This layout pattern is perfect for documentation sites, dashboards, or any layout that needs a fixed-width sidebar with flexible main content.</p>
            </main>
          </div>
        </div>

        <div class="example-container">
          <h4>Holy Grail Layout</h4>
          <div class="haspen-grid-holy-grail demo-holy-grail">
            <header class="haspen-grid-header demo-header">Header</header>
            <nav class="haspen-grid-nav demo-nav">Nav</nav>
            <main class="haspen-grid-main demo-main">
              <h5>Main Content</h5>
              <p>The classic "Holy Grail" layout with header, footer, navigation, main content, and sidebar.</p>
            </main>
            <aside class="haspen-grid-aside demo-aside">Aside</aside>
            <footer class="haspen-grid-footer demo-footer">Footer</footer>
          </div>
        </div>
      </section>

      <!-- Gap Utilities -->
      <section class="demo-section">
        <h3>Gap Utilities</h3>
        
        <div class="example-container">
          <h4>Different Gap Sizes</h4>
          
          <div class="gap-example">
            <h5>No Gap</h5>
            <div class="haspen-grid haspen-grid-cols-3 haspen-gap-0 demo-grid">
              <div class="demo-item">A</div>
              <div class="demo-item">B</div>
              <div class="demo-item">C</div>
            </div>
          </div>

          <div class="gap-example">
            <h5>Small Gap (haspen-gap-2)</h5>
            <div class="haspen-grid haspen-grid-cols-3 haspen-gap-2 demo-grid">
              <div class="demo-item">A</div>
              <div class="demo-item">B</div>
              <div class="demo-item">C</div>
            </div>
          </div>

          <div class="gap-example">
            <h5>Medium Gap (haspen-gap-6)</h5>
            <div class="haspen-grid haspen-grid-cols-3 haspen-gap-6 demo-grid">
              <div class="demo-item">A</div>
              <div class="demo-item">B</div>
              <div class="demo-item">C</div>
            </div>
          </div>

          <div class="gap-example">
            <h5>Large Gap (haspen-gap-12)</h5>
            <div class="haspen-grid haspen-grid-cols-3 haspen-gap-12 demo-grid">
              <div class="demo-item">A</div>
              <div class="demo-item">B</div>
              <div class="demo-item">C</div>
            </div>
          </div>
        </div>

        <div class="example-container">
          <h4>Directional Gaps</h4>
          
          <div class="gap-example">
            <h5>Column Gap Only (haspen-gap-x-8)</h5>
            <div class="haspen-grid haspen-grid-cols-3 haspen-gap-x-8 demo-grid">
              <div class="demo-item">A</div>
              <div class="demo-item">B</div>
              <div class="demo-item">C</div>
              <div class="demo-item">D</div>
              <div class="demo-item">E</div>
              <div class="demo-item">F</div>
            </div>
          </div>

          <div class="gap-example">
            <h5>Row Gap Only (haspen-gap-y-8)</h5>
            <div class="haspen-grid haspen-grid-cols-3 haspen-gap-y-8 demo-grid">
              <div class="demo-item">A</div>
              <div class="demo-item">B</div>
              <div class="demo-item">C</div>
              <div class="demo-item">D</div>
              <div class="demo-item">E</div>
              <div class="demo-item">F</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Advanced Grid Features -->
      <section class="demo-section">
        <h3>Advanced Grid Features</h3>
        
        <div class="example-container">
          <h4>Grid Flow Control</h4>
          
          <div class="grid-flow-example">
            <h5>Row Flow (default)</h5>
            <div class="haspen-grid haspen-grid-cols-3 haspen-grid-flow-row haspen-gap-4 demo-grid">
              <div class="demo-item haspen-col-span-2">Wide Item</div>
              <div class="demo-item">1</div>
              <div class="demo-item">2</div>
              <div class="demo-item">3</div>
              <div class="demo-item">4</div>
            </div>
          </div>

          <div class="grid-flow-example">
            <h5>Dense Flow</h5>
            <div class="haspen-grid haspen-grid-cols-3 haspen-grid-flow-dense haspen-gap-4 demo-grid">
              <div class="demo-item haspen-col-span-2">Wide Item</div>
              <div class="demo-item">1</div>
              <div class="demo-item">2</div>
              <div class="demo-item">3</div>
              <div class="demo-item">4</div>
            </div>
          </div>
        </div>

        <div class="example-container">
          <h4>Grid Positioning</h4>
          <div class="haspen-grid haspen-grid-cols-4 haspen-gap-4 demo-grid">
            <div class="demo-item haspen-col-start-2 haspen-col-end-4">Start 2, End 4</div>
            <div class="demo-item">Auto</div>
            <div class="demo-item haspen-col-start-1">Start 1</div>
            <div class="demo-item haspen-col-end-4">End 4</div>
            <div class="demo-item">Auto</div>
          </div>
        </div>
      </section>

      <!-- Integration with Flexbox -->
      <section class="demo-section">
        <h3>Grid + Flexbox Hybrid</h3>
        
        <div class="example-container">
          <h4>Grid Container with Flex Items</h4>
          <div class="haspen-grid haspen-grid-cols-2 haspen-gap-6">
            <div class="demo-flex-item">
              <h5>Flex Item 1</h5>
              <div class="flex-content">
                <p>Grid handles the overall layout, while flexbox manages internal alignment.</p>
                <button class="demo-button">Action</button>
              </div>
            </div>
            <div class="demo-flex-item">
              <h5>Flex Item 2</h5>
              <div class="flex-content">
                <p>This creates powerful hybrid layouts combining the best of both systems.</p>
                <button class="demo-button">Action</button>
              </div>
            </div>
            <div class="demo-flex-item">
              <h5>Flex Item 3</h5>
              <div class="flex-content">
                <p>Perfect for cards, forms, or any layout needing both grid and flex.</p>
                <button class="demo-button">Action</button>
              </div>
            </div>
            <div class="demo-flex-item">
              <h5>Flex Item 4</h5>
              <div class="flex-content">
                <p>Flexible, maintainable, and accessible layout solutions.</p>
                <button class="demo-button">Action</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Performance Notes -->
      <section class="demo-section">
        <h3>Performance & Browser Support</h3>
        
        <div class="example-container">
          <div class="info-grid haspen-grid haspen-grid-cols-1 haspen-md:grid-cols-2 haspen-gap-6">
            <div class="info-card">
              <h4>🚀 Performance Benefits</h4>
              <ul>
                <li>Grid is optimized for 2D layouts</li>
                <li>Fewer DOM manipulations needed</li>
                <li>Better paint and layout performance</li>
                <li>Intrinsic responsive behavior</li>
                <li>Reduces JavaScript layout calculations</li>
              </ul>
            </div>
            <div class="info-card">
              <h4>🌐 Browser Support</h4>
              <ul>
                <li>Modern browsers: Full support</li>
                <li>IE 11: Partial support (legacy)</li>
                <li>Progressive enhancement ready</li>
                <li>Graceful fallbacks available</li>
                <li>Can coexist with flexbox</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Usage Guidelines -->
      <section class="demo-section">
        <h3>When to Use Grid vs Flexbox</h3>
        
        <div class="example-container">
          <div class="guidelines-grid haspen-grid haspen-grid-cols-1 haspen-lg:grid-cols-2 haspen-gap-8">
            <div class="guideline-card">
              <h4>✅ Use CSS Grid for:</h4>
              <ul>
                <li>2D layouts (rows AND columns)</li>
                <li>Complex layout patterns</li>
                <li>Card grids and galleries</li>
                <li>Page layouts (header, sidebar, footer)</li>
                <li>Responsive designs without media queries</li>
                <li>When you need precise control over placement</li>
              </ul>
            </div>
            <div class="guideline-card">
              <h4>✅ Use Flexbox for:</h4>
              <ul>
                <li>1D layouts (single row OR column)</li>
                <li>Component-level layouts</li>
                <li>Navigation bars</li>
                <li>Button groups</li>
                <li>Centering content</li>
                <li>When content size should drive layout</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
};

const meta: Meta = {
  title: 'Design Tokens/Grid Utilities',
  component: GridUtilitiesDemo,
  parameters: {
    docs: {
      description: {
        component: `
# CSS Grid Utilities

Comprehensive CSS Grid utilities that complement the existing flexbox system for modern 2D layouts.

## Features

### Basic Grid Classes
- **Container**: \`.haspen-grid\` - Creates a grid container
- **Columns**: \`.haspen-grid-cols-{1-12}\` - Define grid columns
- **Rows**: \`.haspen-grid-rows-{1-6}\` - Define grid rows

### Column & Row Spanning
- **Column Span**: \`.haspen-col-span-{1-12|full}\` - Span across columns
- **Row Span**: \`.haspen-row-span-{1-6|full}\` - Span across rows
- **Precise Positioning**: \`.haspen-col-start-{1-13}\`, \`.haspen-col-end-{1-13}\`

### Gap Utilities
- **All Gaps**: \`.haspen-gap-{0-24}\` - Uniform gaps
- **Column Gaps**: \`.haspen-gap-x-{0-24}\` - Horizontal spacing only
- **Row Gaps**: \`.haspen-gap-y-{0-24}\` - Vertical spacing only

### Responsive Grid
- **Breakpoint Prefixes**: \`sm:\`, \`md:\`, \`lg:\`, \`xl:\`
- **Example**: \`.haspen-grid-cols-1.haspen-md:grid-cols-2.haspen-lg:grid-cols-4\`

### Pre-built Patterns
- **Card Grid**: \`.haspen-grid-cards\` - Auto-fit responsive cards
- **Sidebar**: \`.haspen-grid-sidebar\` - Flexible sidebar layout
- **Holy Grail**: \`.haspen-grid-holy-grail\` - Classic 5-section layout

## Performance Benefits

- **Optimized for 2D layouts** - More efficient than flexbox for complex grids
- **Intrinsic responsiveness** - Fewer media queries needed
- **Better paint performance** - Browser-optimized layout calculations
- **Reduced JavaScript** - Less layout manipulation needed

## Browser Support

- **Modern browsers**: Full CSS Grid support
- **Progressive enhancement**: Falls back gracefully
- **IE 11**: Limited support with \`-ms-\` prefixes (not included)

## Integration with Flexbox

Grid and flexbox work perfectly together:
- **Grid** for overall page/section layout
- **Flexbox** for component-level alignment
- **Hybrid approach** for maximum flexibility

## Usage Examples

\`\`\`html
<!-- Basic 3-column grid -->
<div class="haspen-grid haspen-grid-cols-3 haspen-gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- Responsive card grid -->
<div class="haspen-grid-cards">
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
</div>

<!-- Complex spanning -->
<div class="haspen-grid haspen-grid-cols-6 haspen-gap-4">
  <div class="haspen-col-span-4">Main content</div>
  <div class="haspen-col-span-2">Sidebar</div>
  <div class="haspen-col-span-full">Footer</div>
</div>
\`\`\`
        `,
      },
    },
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  render: () => GridUtilitiesDemo,
  parameters: {
    docs: {
      description: {
        story: 'Complete overview of CSS Grid utilities with interactive examples and usage patterns.',
      },
    },
  },
};

export const BasicGrids: Story = {
  render: () => ({
    template: `
      <div class="grid-utilities-demo">
        <h3>Basic Grid Layouts</h3>
        
        <div class="example-container">
          <h4>2 Columns</h4>
          <div class="haspen-grid haspen-grid-cols-2 haspen-gap-4 demo-grid">
            <div class="demo-item">Item 1</div>
            <div class="demo-item">Item 2</div>
            <div class="demo-item">Item 3</div>
            <div class="demo-item">Item 4</div>
          </div>
        </div>

        <div class="example-container">
          <h4>3 Columns</h4>
          <div class="haspen-grid haspen-grid-cols-3 haspen-gap-4 demo-grid">
            <div class="demo-item">Item 1</div>
            <div class="demo-item">Item 2</div>
            <div class="demo-item">Item 3</div>
          </div>
        </div>

        <div class="example-container">
          <h4>4 Columns</h4>
          <div class="haspen-grid haspen-grid-cols-4 haspen-gap-6 demo-grid">
            <div class="demo-item">Item 1</div>
            <div class="demo-item">Item 2</div>
            <div class="demo-item">Item 3</div>
            <div class="demo-item">Item 4</div>
          </div>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Basic grid layouts with 2, 3, and 4 columns showing different gap sizes.',
      },
    },
  },
};

export const ResponsiveGrid: Story = {
  render: () => ({
    template: `
      <div class="grid-utilities-demo">
        <h3>Responsive Grid Layout</h3>
        <p>Resize the browser window to see the responsive behavior</p>
        
        <div class="haspen-grid haspen-grid-cols-1 haspen-sm:grid-cols-2 haspen-md:grid-cols-3 haspen-lg:grid-cols-4 haspen-gap-4 demo-grid">
          <div class="demo-item">Responsive Item 1</div>
          <div class="demo-item">Responsive Item 2</div>
          <div class="demo-item">Responsive Item 3</div>
          <div class="demo-item">Responsive Item 4</div>
          <div class="demo-item">Responsive Item 5</div>
          <div class="demo-item">Responsive Item 6</div>
          <div class="demo-item">Responsive Item 7</div>
          <div class="demo-item">Responsive Item 8</div>
        </div>
        
        <div class="info-card" style="margin-top: 2rem;">
          <h4>Responsive Breakpoints:</h4>
          <ul>
            <li><strong>Mobile (default):</strong> 1 column</li>
            <li><strong>Small (640px+):</strong> 2 columns</li>
            <li><strong>Medium (768px+):</strong> 3 columns</li>
            <li><strong>Large (1024px+):</strong> 4 columns</li>
          </ul>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Responsive grid that adapts from 1 column on mobile to 4 columns on large screens.',
      },
    },
  },
};

export const CardGrid: Story = {
  render: () => ({
    template: `
      <div class="grid-utilities-demo">
        <h3>Auto-Fit Card Grid</h3>
        <p>Cards automatically adjust based on available space with a minimum width of 280px</p>
        
        <div class="haspen-grid-cards demo-grid">
          <div class="demo-card">
            <h4>Product Card 1</h4>
            <p>This card automatically resizes based on available space while maintaining readability and visual balance.</p>
            <button class="demo-button">Learn More</button>
          </div>
          <div class="demo-card">
            <h4>Product Card 2</h4>
            <p>Perfect for product grids, portfolios, or any content that needs responsive card layouts.</p>
            <button class="demo-button">Learn More</button>
          </div>
          <div class="demo-card">
            <h4>Product Card 3</h4>
            <p>No media queries needed - CSS Grid handles the responsive behavior automatically.</p>
            <button class="demo-button">Learn More</button>
          </div>
          <div class="demo-card">
            <h4>Product Card 4</h4>
            <p>Consistent spacing and alignment across all viewport sizes for a professional look.</p>
            <button class="demo-button">Learn More</button>
          </div>
          <div class="demo-card">
            <h4>Product Card 5</h4>
            <p>Uses CSS Grid's auto-fit feature for intelligent responsive behavior without JavaScript.</p>
            <button class="demo-button">Learn More</button>
          </div>
          <div class="demo-card">
            <h4>Product Card 6</h4>
            <p>Scalable solution that works from mobile to wide desktop displays seamlessly.</p>
            <button class="demo-button">Learn More</button>
          </div>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Auto-fit card grid that automatically adjusts the number of columns based on available space.',
      },
    },
  },
};