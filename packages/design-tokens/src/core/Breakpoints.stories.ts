import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta = {
  title: 'Design Tokens/Breakpoints & Grid',
  parameters: {
    docs: {
      description: {
        component: `
# DKFDS Breakpoints & Grid System

Mobile-first responsive system med 5 breakpoints og 12-kolonne grid.

## Breakpoints
- **xs**: 0px (mobil)
- **sm**: 576px (lille tablet)
- **md**: 768px (tablet)
- **lg**: 992px (lille desktop)
- **xl**: 1200px (stor desktop)

## Grid System
- 12 kolonner
- 32px gutter (16px på hver side)
- Responsive container max-widths
- Flexbox baseret
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ResponsiveBreakpoints: Story = {
  render: () => ({
    template: `
      <div class="breakpoint-demo">
        <h2>Responsive Breakpoints</h2>
        
        <div class="breakpoint-visualization">
          <div class="device xs">
            <div class="device-icon">📱</div>
            <strong>XS</strong>
            <span>0px+</span>
            <code>@include media-breakpoint-up(xs)</code>
          </div>
          
          <div class="device sm">
            <div class="device-icon">📱</div>
            <strong>SM</strong>
            <span>576px+</span>
            <code>@include media-breakpoint-up(sm)</code>
          </div>
          
          <div class="device md">
            <div class="device-icon">💻</div>
            <strong>MD</strong>
            <span>768px+</span>
            <code>@include media-breakpoint-up(md)</code>
          </div>
          
          <div class="device lg">
            <div class="device-icon">🖥</div>
            <strong>LG</strong>
            <span>992px+</span>
            <code>@include media-breakpoint-up(lg)</code>
          </div>
          
          <div class="device xl">
            <div class="device-icon">🖥</div>
            <strong>XL</strong>
            <span>1200px+</span>
            <code>@include media-breakpoint-up(xl)</code>
          </div>
        </div>

        <h3>Breakpoint Mixins</h3>
        <div class="code-example">
          <pre><code>// Minimum width (mobile-first)
@include media-breakpoint-up(md) {
  // Styles for tablets and up
}

// Maximum width
@include media-breakpoint-down(md) {
  // Styles for tablets and down
}

// Between breakpoints
@include media-breakpoint-between(sm, lg) {
  // Styles between small and large
}

// Single breakpoint only
@include media-breakpoint-only(md) {
  // Styles only for medium screens
}</code></pre>
        </div>

        <h3>Container Max Widths</h3>
        <div class="container-demo">
          <div class="container-visual sm">SM: 540px</div>
          <div class="container-visual md">MD: 720px</div>
          <div class="container-visual lg">LG: 960px</div>
          <div class="container-visual xl">XL: 1140px</div>
        </div>
      </div>
    `,
  }),
};

export const GridSystem: Story = {
  render: () => ({
    template: `
      <div class="grid-demo">
        <h2>12-Column Grid System</h2>
        
        <h3>Basic Grid</h3>
        <div class="grid-example">
          <div class="grid-container">
            <div class="grid-row">
              <div class="grid-col-12">12 kolonner</div>
            </div>
            <div class="grid-row">
              <div class="grid-col-6">6 kolonner</div>
              <div class="grid-col-6">6 kolonner</div>
            </div>
            <div class="grid-row">
              <div class="grid-col-4">4 kolonner</div>
              <div class="grid-col-4">4 kolonner</div>
              <div class="grid-col-4">4 kolonner</div>
            </div>
            <div class="grid-row">
              <div class="grid-col-3">3</div>
              <div class="grid-col-3">3</div>
              <div class="grid-col-3">3</div>
              <div class="grid-col-3">3</div>
            </div>
            <div class="grid-row">
              <div class="grid-col-2">2</div>
              <div class="grid-col-2">2</div>
              <div class="grid-col-2">2</div>
              <div class="grid-col-2">2</div>
              <div class="grid-col-2">2</div>
              <div class="grid-col-2">2</div>
            </div>
          </div>
        </div>

        <h3>Grid Mixins</h3>
        <div class="code-example">
          <pre><code>// Container
.container {
  @include mixins.container;
}

// Row
.row {
  @include mixins.grid-row;
}

// Columns
.col-6 {
  @include mixins.grid-col(6); // 50% width
}

.col-md-4 {
  @include media-breakpoint-up(md) {
    @include mixins.grid-col(4); // 33.33% width
  }
}</code></pre>
        </div>

        <h3>Responsive Grid</h3>
        <p>Kolonner kan have forskellige størrelser ved forskellige breakpoints:</p>
        <div class="grid-example">
          <div class="grid-container">
            <div class="grid-row">
              <div class="grid-col-12 grid-col-md-6 grid-col-lg-4">
                12 → 6 → 4
              </div>
              <div class="grid-col-12 grid-col-md-6 grid-col-lg-4">
                12 → 6 → 4
              </div>
              <div class="grid-col-12 grid-col-md-12 grid-col-lg-4">
                12 → 12 → 4
              </div>
            </div>
          </div>
        </div>

        <h3>Grid Gutter</h3>
        <p>Standard gutter er 32px (16px på hver side af kolonnen).</p>
        <div class="gutter-visualization">
          <div class="gutter-col">
            <div class="gutter-content">Kolonne indhold</div>
            <div class="gutter-space left">16px</div>
            <div class="gutter-space right">16px</div>
          </div>
        </div>
      </div>
    `,
  }),
};

export const ResponsiveUtilities: Story = {
  render: () => ({
    template: `
      <div class="responsive-demo">
        <h2>Responsive Utility Classes</h2>
        
        <h3>Display Utilities</h3>
        <div class="utility-example">
          <div class="d-block d-md-none p-3 bg-alternative mb-2">
            Kun synlig på mobil og tablet
          </div>
          <div class="d-none d-md-block d-lg-none p-3 bg-alternative mb-2">
            Kun synlig på medium skærme
          </div>
          <div class="d-none d-lg-block p-3 bg-alternative">
            Kun synlig på store skærme
          </div>
        </div>

        <h3>Responsive Spacing</h3>
        <div class="utility-example">
          <div class="p-2 p-md-4 p-lg-6 bg-alternative">
            Padding: 2 → 4 → 6
          </div>
        </div>

        <h3>Responsive Width</h3>
        <div class="utility-example">
          <div class="w-percent-100 w-percent-md-50 w-percent-lg-30 p-3 bg-alternative">
            Width: 100% → 50% → 30%
          </div>
        </div>

        <h3>Responsive Flexbox</h3>
        <div class="d-flex flex-column flex-md-row gap-3">
          <div class="p-3 bg-alternative">Item 1</div>
          <div class="p-3 bg-alternative">Item 2</div>
          <div class="p-3 bg-alternative">Item 3</div>
        </div>

        <h3>Media Query Usage</h3>
        <div class="code-example">
          <pre><code>// Component styles
.my-component {
  padding: func.units(2); // 16px
  
  @include media-breakpoint-up(md) {
    padding: func.units(4); // 32px
  }
  
  @include media-breakpoint-up(lg) {
    padding: func.units(6); // 48px
  }
}</code></pre>
        </div>
      </div>
    `,
  }),
};

export const SpecialMediaQueries: Story = {
  render: () => ({
    template: `
      <div class="media-query-demo">
        <h2>Special Media Queries</h2>
        
        <h3>High DPI Screens</h3>
        <div class="code-example">
          <pre><code>@include high-dpi {
  // Styles for retina displays
  .logo {
    background-image: url('logo@2x.png');
  }
}</code></pre>
        </div>

        <h3>Print Styles</h3>
        <div class="code-example">
          <pre><code>@include print {
  // Styles for print
  .no-print {
    display: none;
  }
}

// Or use utility class
.d-print-none { /* Hidden when printing */ }
.d-print-block { /* Visible when printing */ }</code></pre>
        </div>

        <h3>Motion Preferences</h3>
        <div class="code-example">
          <pre><code>@include prefers-reduced-motion {
  // Disable animations for users who prefer it
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}</code></pre>
        </div>

        <h3>Color Scheme</h3>
        <div class="code-example">
          <pre><code>// Dark mode
@include prefers-dark {
  :root {
    --color-background: #1a1a1a;
    --color-text: #ffffff;
  }
}

// Light mode
@include prefers-light {
  :root {
    --color-background: #ffffff;
    --color-text: #1a1a1a;
  }
}</code></pre>
        </div>
      </div>
    `,
  }),
};
