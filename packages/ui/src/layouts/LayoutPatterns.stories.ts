import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import './LayoutPatterns.stories.scss';
import './layout-utilities.scss';

// Layout Demo Component
const LayoutDemo = {
  template: `
    <div class="layout-demo">
      <h2>Layout Patterns & Responsive Design</h2>
      
      <!-- Responsive Grid System -->
      <section class="demo-section">
        <h3>Responsive Grid System</h3>
        <div class="grid-showcase">
          <div class="grid-container">
            <div class="grid-item">1</div>
            <div class="grid-item">2</div>
            <div class="grid-item">3</div>
            <div class="grid-item">4</div>
            <div class="grid-item">5</div>
            <div class="grid-item">6</div>
            <div class="grid-item">7</div>
            <div class="grid-item">8</div>
            <div class="grid-item">9</div>
            <div class="grid-item">10</div>
            <div class="grid-item">11</div>
            <div class="grid-item">12</div>
          </div>
        </div>
        <div class="breakpoint-info">
          <h4>Current Breakpoint: <span id="current-breakpoint">{{ currentBreakpoint }}</span></h4>
          <div class="breakpoint-list">
            <span class="breakpoint-badge xs">XS: 0px+</span>
            <span class="breakpoint-badge sm">SM: 576px+</span>
            <span class="breakpoint-badge md">MD: 768px+</span>
            <span class="breakpoint-badge lg">LG: 992px+</span>
            <span class="breakpoint-badge xl">XL: 1200px+</span>
          </div>
        </div>
      </section>

      <!-- Flexbox Layouts -->
      <section class="demo-section">
        <h3>Flexbox Layout Patterns</h3>
        
        <!-- Navigation Layout -->
        <div class="pattern-demo">
          <h4>Navigation Layout</h4>
          <div class="flex-nav-demo">
            <div class="nav-brand">Brand</div>
            <div class="nav-links">
              <span>Home</span>
              <span>About</span>
              <span>Services</span>
              <span>Contact</span>
            </div>
            <div class="nav-actions">
              <button class="nav-btn">Login</button>
            </div>
          </div>
        </div>

        <!-- Card Layout -->
        <div class="pattern-demo">
          <h4>Card Grid Layout</h4>
          <div class="card-grid">
            <div class="demo-card">
              <div class="card-header">Card 1</div>
              <div class="card-body">Responsive card layout with flexbox</div>
              <div class="card-footer">Footer</div>
            </div>
            <div class="demo-card">
              <div class="card-header">Card 2</div>
              <div class="card-body">Auto-adjusting based on screen size</div>
              <div class="card-footer">Footer</div>
            </div>
            <div class="demo-card">
              <div class="card-header">Card 3</div>
              <div class="card-body">Mobile-first responsive design</div>
              <div class="card-footer">Footer</div>
            </div>
          </div>
        </div>

        <!-- Sidebar Layout -->
        <div class="pattern-demo">
          <h4>Sidebar Layout</h4>
          <div class="sidebar-layout">
            <aside class="sidebar">
              <nav>
                <div class="sidebar-item active">Dashboard</div>
                <div class="sidebar-item">Users</div>
                <div class="sidebar-item">Settings</div>
                <div class="sidebar-item">Help</div>
              </nav>
            </aside>
            <main class="main-content">
              <header class="content-header">
                <h3>Main Content Area</h3>
              </header>
              <div class="content-body">
                <p>Responsive sidebar that collapses on mobile devices.</p>
                <p>Uses flexbox for smooth transitions and mobile adaptation.</p>
              </div>
            </main>
          </div>
        </div>
      </section>

      <!-- CSS Grid Layouts -->
      <section class="demo-section">
        <h3>CSS Grid Layout Patterns</h3>
        
        <!-- Dashboard Grid -->
        <div class="pattern-demo">
          <h4>Dashboard Grid</h4>
          <div class="dashboard-grid">
            <div class="grid-header">Header</div>
            <div class="grid-sidebar">Sidebar</div>
            <div class="grid-main">Main Content</div>
            <div class="grid-aside">Aside</div>
            <div class="grid-footer">Footer</div>
          </div>
        </div>

        <!-- Magazine Layout -->
        <div class="pattern-demo">
          <h4>Magazine Layout</h4>
          <div class="magazine-grid">
            <div class="article-hero">Hero Article</div>
            <div class="article-secondary">Secondary</div>
            <div class="article-tertiary">Tertiary</div>
            <div class="article-sidebar">Sidebar Content</div>
          </div>
        </div>

        <!-- Image Gallery -->
        <div class="pattern-demo">
          <h4>Image Gallery Grid</h4>
          <div class="gallery-grid">
            <div class="gallery-item large">Large Image</div>
            <div class="gallery-item">Image 1</div>
            <div class="gallery-item">Image 2</div>
            <div class="gallery-item">Image 3</div>
            <div class="gallery-item">Image 4</div>
            <div class="gallery-item">Image 5</div>
          </div>
        </div>
      </section>

      <!-- Spacing System -->
      <section class="demo-section">
        <h3>DKFDS Spacing System (8px base)</h3>
        <div class="spacing-showcase">
          <div class="spacing-scale">
            <div class="spacing-item" data-space="0">0px</div>
            <div class="spacing-item" data-space="1">2px</div>
            <div class="spacing-item" data-space="2">4px</div>
            <div class="spacing-item" data-space="3">8px</div>
            <div class="spacing-item" data-space="4">16px</div>
            <div class="spacing-item" data-space="5">24px</div>
            <div class="spacing-item" data-space="6">32px</div>
            <div class="spacing-item" data-space="8">48px</div>
            <div class="spacing-item" data-space="10">64px</div>
          </div>
        </div>
        <div class="spacing-utilities-demo">
          <h4>Utility Classes Demo</h4>
          <div class="utility-examples">
            <div class="example-box m-3">margin: 8px</div>
            <div class="example-box p-4">padding: 16px</div>
            <div class="example-box mt-5 mb-5">margin-top/bottom: 24px</div>
            <div class="example-box mx-auto">margin: auto (centered)</div>
          </div>
        </div>
      </section>

      <!-- Container System -->
      <section class="demo-section">
        <h3>Container System</h3>
        <div class="container-showcase">
          <div class="container-demo container-sm">
            <strong>SM Container:</strong> Max-width 540px
            <div class="container-content">Content within small container</div>
          </div>
          <div class="container-demo container-md">
            <strong>MD Container:</strong> Max-width 720px
            <div class="container-content">Content within medium container</div>
          </div>
          <div class="container-demo container-lg">
            <strong>LG Container:</strong> Max-width 960px
            <div class="container-content">Content within large container</div>
          </div>
          <div class="container-demo container-xl">
            <strong>XL Container:</strong> Max-width 1140px
            <div class="container-content">Content within extra large container</div>
          </div>
        </div>
      </section>

      <!-- Interactive Breakpoint Demo -->
      <section class="demo-section">
        <h3>Interactive Breakpoint Testing</h3>
        <div class="breakpoint-tester">
          <div class="resize-instruction">
            <p>🔍 Resize your browser window to see responsive behavior</p>
            <div class="current-size">Current size: {{ windowSize.width }}px × {{ windowSize.height }}px</div>
          </div>
          <div class="responsive-demo-grid">
            <div class="responsive-item" :class="'active-' + currentBreakpoint">
              <h4>Responsive Item</h4>
              <p>This item adapts to different screen sizes:</p>
              <ul>
                <li>XS (0-575px): Single column, large padding</li>
                <li>SM (576-767px): Single column, medium padding</li>
                <li>MD (768-991px): Two columns, balanced layout</li>
                <li>LG (992-1199px): Three columns, compact</li>
                <li>XL (1200px+): Four columns, optimized spacing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  setup() {
    const windowSize = ref({
      width: typeof window !== 'undefined' ? window.innerWidth : 1200,
      height: typeof window !== 'undefined' ? window.innerHeight : 800,
    });

    const currentBreakpoint = ref('xl');

    const updateBreakpoint = () => {
      const width = window.innerWidth;
      if (width >= 1200) currentBreakpoint.value = 'xl';
      else if (width >= 992) currentBreakpoint.value = 'lg';
      else if (width >= 768) currentBreakpoint.value = 'md';
      else if (width >= 576) currentBreakpoint.value = 'sm';
      else currentBreakpoint.value = 'xs';
    };

    const updateSize = () => {
      windowSize.value = {
        width: window.innerWidth,
        height: window.innerHeight,
      };
      updateBreakpoint();
    };

    // Only add event listener if window exists (browser environment)
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', updateSize);
      updateSize(); // Initial call
    }

    return {
      windowSize,
      currentBreakpoint,
    };
  },
};

const meta: Meta = {
  title: 'Layout/Patterns',
  component: LayoutDemo,
  parameters: {
    docs: {
      description: {
        component: `
# Layout Patterns & Responsive Design

This collection demonstrates comprehensive layout patterns using the DKFDS (Danish Design System) approach with modern CSS techniques:

## Grid System
- **12-column responsive grid** with mobile-first breakpoints
- **DKFDS breakpoints**: XS (0), SM (576px), MD (768px), LG (992px), XL (1200px)
- **Flexible grid utilities** with responsive modifiers

## Flexbox Patterns
- **Navigation layouts** with flexible spacing and alignment
- **Card grids** that adapt to screen size automatically  
- **Sidebar layouts** with collapsible mobile behavior
- **Utility classes** for all flexbox properties

## CSS Grid Layouts
- **Dashboard grids** with named grid areas
- **Magazine layouts** with asymmetric content areas
- **Image galleries** with responsive grid sizing
- **Complex layouts** that maintain structure across devices

## Spacing System
- **8px base unit system** following DKFDS standards
- **Consistent spacing scale**: 0, 2px, 4px, 8px, 16px, 24px, 32px, 48px, 64px+
- **Utility classes**: \`.m-*\`, \`.p-*\`, \`.mt-*\`, \`.mx-auto\`, etc.
- **Responsive spacing** with breakpoint modifiers

## Container System  
- **Fluid containers** with max-width constraints
- **Responsive containers**: SM (540px), MD (720px), LG (960px), XL (1140px)
- **Centered content** with automatic margins
- **Mobile-first responsive behavior**

## Interactive Features
- **Real-time breakpoint detection** showing current screen size
- **Responsive previews** demonstrating mobile/tablet/desktop layouts
- **Interactive spacing demos** with visual feedback
- **Live resize testing** for responsive behavior

## Accessibility & Performance
- **Semantic HTML structure** with proper landmarks
- **Keyboard navigation support** for interactive elements
- **High contrast ratios** meeting WCAG standards
- **Optimized CSS** with efficient selectors and minimal reflow

## Browser Support
- **Modern CSS Grid and Flexbox** support
- **Fallbacks** for older browsers where needed
- **Progressive enhancement** for advanced features
- **Tested across** major browsers and devices
        `,
      },
    },
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const InteractiveDemo: Story = {
  render: () => LayoutDemo,
  parameters: {
    docs: {
      description: {
        story:
          'Interactive playground demonstrating all layout patterns with real-time responsive behavior testing.',
      },
    },
  },
};

export const GridSystem: Story = {
  render: () => ({
    template: `
      <div class="grid-story">
        <h3>DKFDS 12-Column Grid System</h3>
        
        <div class="grid-example">
          <h4>Basic Grid (12 Equal Columns)</h4>
          <div class="grid-container equal-columns">
            <div class="grid-item" v-for="n in 12" :key="n">{{ n }}</div>
          </div>
        </div>

        <div class="grid-example">
          <h4>Responsive Grid (Different Sizes Per Breakpoint)</h4>
          <div class="grid-container responsive-columns">
            <div class="grid-item featured">Featured (spans 8 on desktop, 12 on mobile)</div>
            <div class="grid-item sidebar">Sidebar (spans 4 on desktop, 12 on mobile)</div>
          </div>
        </div>

        <div class="grid-example">
          <h4>Complex Layout Grid</h4>
          <div class="grid-container complex-layout">
            <div class="grid-item header">Header (Full Width)</div>
            <div class="grid-item main">Main Content</div>
            <div class="grid-item aside">Aside</div>
            <div class="grid-item footer">Footer (Full Width)</div>
          </div>
        </div>

        <div class="grid-example">
          <h4>Auto-Fit Grid (Dynamic Columns)</h4>
          <div class="auto-fit-grid">
            <div class="auto-item">Auto 1</div>
            <div class="auto-item">Auto 2</div>
            <div class="auto-item">Auto 3</div>
            <div class="auto-item">Auto 4</div>
            <div class="auto-item">Auto 5</div>
          </div>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'Demonstrates the 12-column grid system with various responsive configurations and layout patterns.',
      },
    },
  },
};

export const FlexboxLayouts: Story = {
  render: () => ({
    template: `
      <div class="flexbox-story">
        <h3>Flexbox Layout Patterns</h3>
        
        <!-- Navigation Pattern -->
        <div class="flex-example">
          <h4>Navigation Bar</h4>
          <nav class="flex-nav">
            <div class="nav-brand">🏠 Brand</div>
            <div class="nav-menu">
              <a href="#">Home</a>
              <a href="#">Products</a>
              <a href="#">About</a>
              <a href="#">Contact</a>
            </div>
            <div class="nav-actions">
              <button class="btn-secondary">Sign In</button>
              <button class="btn-primary">Sign Up</button>
            </div>
          </nav>
        </div>

        <!-- Holy Grail Layout -->
        <div class="flex-example">
          <h4>Holy Grail Layout</h4>
          <div class="holy-grail">
            <header class="hg-header">Header</header>
            <div class="hg-body">
              <aside class="hg-sidebar">Left Sidebar</aside>
              <main class="hg-content">Main Content Area</main>
              <aside class="hg-aside">Right Sidebar</aside>
            </div>
            <footer class="hg-footer">Footer</footer>
          </div>
        </div>

        <!-- Media Object -->
        <div class="flex-example">
          <h4>Media Object Pattern</h4>
          <div class="media-objects">
            <div class="media-object">
              <div class="media-figure">📷</div>
              <div class="media-body">
                <h5>Media Object Title</h5>
                <p>This is the media object pattern using flexbox. The image stays fixed while the content flows.</p>
              </div>
            </div>
            <div class="media-object">
              <div class="media-figure">🎵</div>
              <div class="media-body">
                <h5>Another Media Item</h5>
                <p>Flexible content that adapts to any length while maintaining alignment with the figure.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Card Layout -->
        <div class="flex-example">
          <h4>Equal Height Cards</h4>
          <div class="flex-cards">
            <div class="flex-card">
              <h5>Card 1</h5>
              <p>Short content.</p>
              <button class="card-action">Action</button>
            </div>
            <div class="flex-card">
              <h5>Card 2</h5>
              <p>This card has much more content to demonstrate how flexbox makes all cards the same height regardless of content length.</p>
              <button class="card-action">Action</button>
            </div>
            <div class="flex-card">
              <h5>Card 3</h5>
              <p>Medium length content here.</p>
              <button class="card-action">Action</button>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'Showcases common flexbox layout patterns including navigation, holy grail, media objects, and equal-height cards.',
      },
    },
  },
};

export const CSSGridLayouts: Story = {
  render: () => ({
    template: `
      <div class="css-grid-story">
        <h3>CSS Grid Layout Patterns</h3>

        <!-- Dashboard Grid -->
        <div class="grid-example">
          <h4>Dashboard Grid Layout</h4>
          <div class="dashboard">
            <header class="dash-header">Dashboard Header</header>
            <nav class="dash-nav">Navigation</nav>
            <main class="dash-main">
              <div class="dash-content">Main Dashboard Content</div>
            </main>
            <aside class="dash-sidebar">Widgets & Stats</aside>
            <footer class="dash-footer">Footer Information</footer>
          </div>
        </div>

        <!-- Magazine Layout -->
        <div class="grid-example">
          <h4>Magazine/Blog Layout</h4>
          <div class="magazine">
            <article class="mag-hero">
              <h3>Featured Article</h3>
              <p>This is the main featured article that spans multiple columns.</p>
            </article>
            <article class="mag-secondary">
              <h4>Secondary Article</h4>
              <p>Supporting content with images and text.</p>
            </article>
            <article class="mag-tertiary">
              <h4>Quick Read</h4>
              <p>Brief news item or quick read content.</p>
            </article>
            <aside class="mag-sidebar">
              <h4>Related Links</h4>
              <ul>
                <li>Link 1</li>
                <li>Link 2</li>
                <li>Link 3</li>
              </ul>
            </aside>
          </div>
        </div>

        <!-- Image Gallery Grid -->
        <div class="grid-example">
          <h4>Responsive Image Gallery</h4>
          <div class="image-gallery">
            <div class="gallery-item featured">🖼️ Featured Image</div>
            <div class="gallery-item">🖼️ Image 1</div>
            <div class="gallery-item">🖼️ Image 2</div>
            <div class="gallery-item">🖼️ Image 3</div>
            <div class="gallery-item">🖼️ Image 4</div>
            <div class="gallery-item">🖼️ Image 5</div>
            <div class="gallery-item">🖼️ Image 6</div>
            <div class="gallery-item">🖼️ Image 7</div>
          </div>
        </div>

        <!-- Form Layout -->
        <div class="grid-example">
          <h4>Form Grid Layout</h4>
          <form class="form-grid">
            <label class="label-name">Name:</label>
            <input class="input-name" type="text" placeholder="Full name" />
            
            <label class="label-email">Email:</label>
            <input class="input-email" type="email" placeholder="Email address" />
            
            <label class="label-phone">Phone:</label>
            <input class="input-phone" type="tel" placeholder="Phone number" />
            
            <label class="label-message">Message:</label>
            <textarea class="input-message" placeholder="Your message" rows="4"></textarea>
            
            <div class="form-actions">
              <button type="button" class="btn-secondary">Cancel</button>
              <button type="submit" class="btn-primary">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'Demonstrates advanced CSS Grid layouts including dashboard, magazine, gallery, and form patterns.',
      },
    },
  },
};

export const SpacingSystem: Story = {
  render: () => ({
    template: `
      <div class="spacing-story">
        <h3>DKFDS Spacing System</h3>
        <p>8px base unit system with consistent scale</p>
        
        <!-- Visual Spacing Scale -->
        <div class="spacing-visual">
          <h4>Spacing Scale Visualization</h4>
          <div class="spacing-items">
            <div class="spacing-demo" data-size="0">0px</div>
            <div class="spacing-demo" data-size="2">2px</div>
            <div class="spacing-demo" data-size="4">4px</div>
            <div class="spacing-demo" data-size="8">8px</div>
            <div class="spacing-demo" data-size="16">16px</div>
            <div class="spacing-demo" data-size="24">24px</div>
            <div class="spacing-demo" data-size="32">32px</div>
            <div class="spacing-demo" data-size="48">48px</div>
            <div class="spacing-demo" data-size="64">64px</div>
          </div>
        </div>

        <!-- Margin Utilities -->
        <div class="utility-section">
          <h4>Margin Utilities</h4>
          <div class="utility-examples">
            <div class="example-container">
              <div class="example-item m-0">m-0</div>
              <div class="example-item m-1">m-1 (2px)</div>
              <div class="example-item m-3">m-3 (8px)</div>
              <div class="example-item m-5">m-5 (24px)</div>
            </div>
          </div>
        </div>

        <!-- Padding Utilities -->
        <div class="utility-section">
          <h4>Padding Utilities</h4>
          <div class="utility-examples">
            <div class="example-container">
              <div class="example-item p-0">p-0</div>
              <div class="example-item p-2">p-2 (4px)</div>
              <div class="example-item p-4">p-4 (16px)</div>
              <div class="example-item p-6">p-6 (32px)</div>
            </div>
          </div>
        </div>

        <!-- Directional Spacing -->
        <div class="utility-section">
          <h4>Directional Spacing</h4>
          <div class="directional-examples">
            <div class="example-item mt-4 mb-2">mt-4 mb-2</div>
            <div class="example-item mx-3">mx-3 (horizontal)</div>
            <div class="example-item py-5">py-5 (vertical)</div>
            <div class="example-item pl-6">pl-6 (left)</div>
          </div>
        </div>

        <!-- Responsive Spacing -->
        <div class="utility-section">
          <h4>Responsive Spacing</h4>
          <div class="responsive-spacing-demo">
            <div class="example-item m-2 m-md-4 m-lg-6">
              m-2 m-md-4 m-lg-6<br>
              <small>(2px → 16px → 32px)</small>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'Demonstrates the 8px-based spacing system with utility classes and responsive modifiers.',
      },
    },
  },
};

export const ResponsiveBreakpoints: Story = {
  render: () => ({
    template: `
      <div class="breakpoints-story">
        <h3>Responsive Breakpoints</h3>
        
        <!-- Breakpoint Information -->
        <div class="breakpoint-info">
          <div class="breakpoint-table">
            <div class="bp-header">
              <span>Breakpoint</span>
              <span>Range</span>
              <span>Container</span>
              <span>Columns</span>
            </div>
            <div class="bp-row xs">
              <span>XS</span>
              <span>0px and up</span>
              <span>100%</span>
              <span>1-2</span>
            </div>
            <div class="bp-row sm">
              <span>SM</span>
              <span>576px and up</span>
              <span>540px</span>
              <span>2-3</span>
            </div>
            <div class="bp-row md">
              <span>MD</span>
              <span>768px and up</span>
              <span>720px</span>
              <span>3-4</span>
            </div>
            <div class="bp-row lg">
              <span>LG</span>
              <span>992px and up</span>
              <span>960px</span>
              <span>4-6</span>
            </div>
            <div class="bp-row xl">
              <span>XL</span>
              <span>1200px and up</span>
              <span>1140px</span>
              <span>6-12</span>
            </div>
          </div>
        </div>

        <!-- Responsive Demo -->
        <div class="responsive-demo">
          <h4>Responsive Behavior Demo</h4>
          <div class="responsive-cards">
            <div class="resp-card">
              <h5>Responsive Card</h5>
              <p>This card adapts its layout based on screen size:</p>
              <ul>
                <li>XS/SM: Full width, stacked</li>
                <li>MD: 2 columns</li>
                <li>LG/XL: 3+ columns</li>
              </ul>
            </div>
            <div class="resp-card">
              <h5>Auto Layout</h5>
              <p>Content automatically reflows and adjusts spacing for optimal reading experience.</p>
            </div>
            <div class="resp-card">
              <h5>Mobile First</h5>
              <p>Designed mobile-first with progressive enhancement for larger screens.</p>
            </div>
          </div>
        </div>

        <!-- Container Demonstration -->
        <div class="container-demo-section">
          <h4>Container Sizes</h4>
          <div class="container-examples">
            <div class="container-example sm">
              <span>SM Container (540px max)</span>
            </div>
            <div class="container-example md">
              <span>MD Container (720px max)</span>
            </div>
            <div class="container-example lg">
              <span>LG Container (960px max)</span>
            </div>
            <div class="container-example xl">
              <span>XL Container (1140px max)</span>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'Shows responsive breakpoints, container sizes, and adaptive behavior across different screen sizes.',
      },
    },
  },
};
