import type { Meta, StoryObj } from '@storybook/vue3';
import './AspectRatio.stories.scss';

// Aspect Ratio Demo Component
const AspectRatioDemo = {
  template: `
    <div class="aspect-ratio-demo">
      <h2>Aspect Ratio Utilities</h2>
      <p class="intro">
        Modern CSS aspect-ratio utilities with fallback support for maintaining consistent proportions 
        across images, videos, cards, and other content containers.
      </p>
      
      <!-- Browser Support Notice -->
      <div class="support-notice">
        <h3>🌐 Browser Support</h3>
        <p>CSS aspect-ratio property is supported in:</p>
        <ul>
          <li>Chrome 88+, Safari 15+, Firefox 89+</li>
          <li>Automatic fallback using padding-top technique for older browsers</li>
        </ul>
      </div>

      <!-- Common Aspect Ratios -->
      <section class="demo-section">
        <h3>Common Aspect Ratios</h3>
        
        <div class="example-container">
          <h4>Standard Ratios</h4>
          
          <div class="aspect-ratio-grid">
            <div class="aspect-item">
              <div class="haspen-aspect-square demo-content">
                <div class="content-box">
                  <strong>1:1</strong>
                  <span>Square</span>
                  <small>Social media, avatars</small>
                </div>
              </div>
              <code>.haspen-aspect-square</code>
            </div>
            
            <div class="aspect-item">
              <div class="haspen-aspect-video demo-content">
                <div class="content-box">
                  <strong>16:9</strong>
                  <span>Video</span>
                  <small>YouTube, Vimeo, HD video</small>
                </div>
              </div>
              <code>.haspen-aspect-video</code>
            </div>
            
            <div class="aspect-item">
              <div class="haspen-aspect-photo demo-content">
                <div class="content-box">
                  <strong>4:3</strong>
                  <span>Photo</span>
                  <small>Traditional photography</small>
                </div>
              </div>
              <code>.haspen-aspect-photo</code>
            </div>
            
            <div class="aspect-item">
              <div class="haspen-aspect-portrait demo-content">
                <div class="content-box">
                  <strong>3:4</strong>
                  <span>Portrait</span>
                  <small>Mobile screens, portraits</small>
                </div>
              </div>
              <code>.haspen-aspect-portrait</code>
            </div>
          </div>
        </div>

        <div class="example-container">
          <h4>Cinematic & Special Ratios</h4>
          
          <div class="aspect-ratio-grid special-ratios">
            <div class="aspect-item">
              <div class="haspen-aspect-cinema demo-content">
                <div class="content-box">
                  <strong>21:9</strong>
                  <span>Cinema</span>
                  <small>Ultra-wide, cinematic</small>
                </div>
              </div>
              <code>.haspen-aspect-cinema</code>
            </div>
            
            <div class="aspect-item">
              <div class="haspen-aspect-golden demo-content">
                <div class="content-box">
                  <strong>φ:1</strong>
                  <span>Golden</span>
                  <small>1.618:1, natural beauty</small>
                </div>
              </div>
              <code>.haspen-aspect-golden</code>
            </div>
            
            <div class="aspect-item">
              <div class="haspen-aspect-wide demo-content">
                <div class="content-box">
                  <strong>2:1</strong>
                  <span>Wide</span>
                  <small>Banners, headers</small>
                </div>
              </div>
              <code>.haspen-aspect-wide</code>
            </div>
            
            <div class="aspect-item">
              <div class="haspen-aspect-ultra-wide demo-content">
                <div class="content-box">
                  <strong>32:9</strong>
                  <span>Ultra-wide</span>
                  <small>Ultra-wide monitors</small>
                </div>
              </div>
              <code>.haspen-aspect-ultra-wide</code>
            </div>
          </div>
        </div>
      </section>

      <!-- Responsive Aspect Ratios -->
      <section class="demo-section">
        <h3>Responsive Aspect Ratios</h3>
        
        <div class="example-container">
          <h4>Container Query Responsive</h4>
          <p>These containers change aspect ratio based on their size:</p>
          
          <div class="responsive-container-demo">
            <div class="resizable-container haspen-container">
              <div class="responsive-aspect haspen-cq-sm:aspect-square haspen-cq-md:aspect-video haspen-cq-lg:aspect-cinema">
                <div class="content-box">
                  <strong>Responsive</strong>
                  <span class="ratio-indicator">
                    <span class="sm-indicator">Square on small</span>
                    <span class="md-indicator">Video on medium</span>
                    <span class="lg-indicator">Cinema on large</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="example-container">
          <h4>Media Query Responsive</h4>
          <p>These change based on viewport size:</p>
          
          <div class="viewport-responsive-grid">
            <div class="viewport-aspect haspen-sm:aspect-square haspen-md:aspect-video haspen-lg:aspect-wide">
              <div class="content-box">
                <strong>Viewport Responsive</strong>
                <span>Resize browser to see changes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Custom Aspect Ratios -->
      <section class="demo-section">
        <h3>Custom Aspect Ratios</h3>
        
        <div class="example-container">
          <h4>CSS Custom Properties</h4>
          <p>Use CSS variables for dynamic aspect ratios:</p>
          
          <div class="custom-aspect-grid">
            <div class="custom-aspect-item">
              <div class="haspen-aspect-custom demo-content" style="--aspect-ratio: 5/2">
                <div class="content-box">
                  <strong>5:2</strong>
                  <span>Custom Ratio</span>
                  <small>--aspect-ratio: 5/2</small>
                </div>
              </div>
            </div>
            
            <div class="custom-aspect-item">
              <div class="haspen-aspect-custom demo-content" style="--aspect-ratio: 7/3">
                <div class="content-box">
                  <strong>7:3</strong>
                  <span>Custom Ratio</span>
                  <small>--aspect-ratio: 7/3</small>
                </div>
              </div>
            </div>
            
            <div class="custom-aspect-item">
              <div class="haspen-aspect-custom demo-content" style="--aspect-ratio: 1.414">
                <div class="content-box">
                  <strong>√2:1</strong>
                  <span>A-series Paper</span>
                  <small>--aspect-ratio: 1.414</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Real-world Examples -->
      <section class="demo-section">
        <h3>Real-world Examples</h3>
        
        <div class="example-container">
          <h4>Image Gallery</h4>
          <p>Consistent aspect ratios for mixed content:</p>
          
          <div class="image-gallery">
            <div class="gallery-item haspen-aspect-square">
              <img src="https://via.placeholder.com/400x400/0059b3/ffffff?text=Square+Image" alt="Square image" />
            </div>
            <div class="gallery-item haspen-aspect-square">
              <img src="https://via.placeholder.com/600x300/28a745/ffffff?text=Wide+Image" alt="Wide image cropped to square" />
            </div>
            <div class="gallery-item haspen-aspect-square">
              <img src="https://via.placeholder.com/300x600/dc3545/ffffff?text=Tall+Image" alt="Tall image cropped to square" />
            </div>
            <div class="gallery-item haspen-aspect-square">
              <img src="https://via.placeholder.com/800x400/ffc107/000000?text=Banner+Image" alt="Banner image cropped to square" />
            </div>
          </div>
        </div>

        <div class="example-container">
          <h4>Video Cards</h4>
          <p>Video thumbnails with consistent 16:9 ratio:</p>
          
          <div class="video-cards">
            <div class="video-card">
              <div class="video-thumbnail haspen-aspect-video">
                <div class="video-placeholder">
                  <div class="play-button">▶️</div>
                </div>
                <div class="video-duration">10:24</div>
              </div>
              <div class="video-info">
                <h5>Container Query Tutorial</h5>
                <p>Learn modern responsive design</p>
              </div>
            </div>
            
            <div class="video-card">
              <div class="video-thumbnail haspen-aspect-video">
                <div class="video-placeholder">
                  <div class="play-button">▶️</div>
                </div>
                <div class="video-duration">15:47</div>
              </div>
              <div class="video-info">
                <h5>CSS Aspect Ratio Guide</h5>
                <p>Master aspect ratio utilities</p>
              </div>
            </div>
            
            <div class="video-card">
              <div class="video-thumbnail haspen-aspect-video">
                <div class="video-placeholder">
                  <div class="play-button">▶️</div>
                </div>
                <div class="video-duration">8:12</div>
              </div>
              <div class="video-info">
                <h5>Design System Patterns</h5>
                <p>Building consistent layouts</p>
              </div>
            </div>
          </div>
        </div>

        <div class="example-container">
          <h4>Profile Cards</h4>
          <p>Portrait aspect ratio for profile photos:</p>
          
          <div class="profile-cards">
            <div class="profile-card">
              <div class="profile-avatar haspen-aspect-portrait">
                <img src="https://via.placeholder.com/300x400/0059b3/ffffff?text=Profile+1" alt="Profile 1" />
              </div>
              <div class="profile-info">
                <h5>Anna Jensen</h5>
                <p>UI/UX Designer</p>
              </div>
            </div>
            
            <div class="profile-card">
              <div class="profile-avatar haspen-aspect-portrait">
                <img src="https://via.placeholder.com/300x400/28a745/ffffff?text=Profile+2" alt="Profile 2" />
              </div>
              <div class="profile-info">
                <h5>Lars Nielsen</h5>
                <p>Frontend Developer</p>
              </div>
            </div>
            
            <div class="profile-card">
              <div class="profile-avatar haspen-aspect-portrait">
                <img src="https://via.placeholder.com/300x400/dc3545/ffffff?text=Profile+3" alt="Profile 3" />
              </div>
              <div class="profile-info">
                <h5>Maria Andersen</h5>
                <p>Product Manager</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CSS Classes Reference -->
      <section class="demo-section">
        <h3>CSS Classes Reference</h3>
        
        <div class="reference-grid">
          <div class="reference-section">
            <h4>Basic Aspect Ratios</h4>
            <ul class="class-list">
              <li><code>.haspen-aspect-square</code> - 1:1 ratio</li>
              <li><code>.haspen-aspect-video</code> - 16:9 ratio</li>
              <li><code>.haspen-aspect-photo</code> - 4:3 ratio</li>
              <li><code>.haspen-aspect-portrait</code> - 3:4 ratio</li>
            </ul>
          </div>
          
          <div class="reference-section">
            <h4>Special Ratios</h4>
            <ul class="class-list">
              <li><code>.haspen-aspect-cinema</code> - 21:9 ultra-wide</li>
              <li><code>.haspen-aspect-golden</code> - 1.618:1 golden ratio</li>
              <li><code>.haspen-aspect-wide</code> - 2:1 wide banner</li>
              <li><code>.haspen-aspect-ultra-wide</code> - 32:9 monitor</li>
            </ul>
          </div>
          
          <div class="reference-section">
            <h4>Container Query Responsive</h4>
            <ul class="class-list">
              <li><code>.haspen-cq-sm:aspect-square</code> - Square at small size</li>
              <li><code>.haspen-cq-md:aspect-video</code> - Video at medium size</li>
              <li><code>.haspen-cq-lg:aspect-cinema</code> - Cinema at large size</li>
              <li><code>.haspen-cq-xl:aspect-golden</code> - Golden at xl size</li>
            </ul>
          </div>
          
          <div class="reference-section">
            <h4>Media Query Responsive</h4>
            <ul class="class-list">
              <li><code>.haspen-sm:aspect-square</code> - Square on small screens</li>
              <li><code>.haspen-md:aspect-video</code> - Video on medium screens</li>
              <li><code>.haspen-lg:aspect-wide</code> - Wide on large screens</li>
              <li><code>.haspen-xl:aspect-cinema</code> - Cinema on xl screens</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Best Practices -->
      <section class="demo-section">
        <h3>Best Practices & Performance</h3>
        
        <div class="best-practices">
          <div class="practice-item">
            <h4>✅ Do</h4>
            <ul>
              <li>Use semantic aspect ratios (video, photo, square)</li>
              <li>Apply aspect ratio to container, not content</li>
              <li>Test fallback behavior in older browsers</li>
              <li>Combine with object-fit for images</li>
              <li>Use custom properties for dynamic ratios</li>
            </ul>
          </div>
          
          <div class="practice-item">
            <h4>❌ Don't</h4>
            <ul>
              <li>Apply aspect ratio directly to images</li>
              <li>Use for text content without overflow handling</li>
              <li>Forget about accessibility for decorative ratios</li>
              <li>Override without considering fallback</li>
              <li>Use overly complex custom ratios</li>
            </ul>
          </div>
        </div>
        
        <div class="performance-info">
          <h4>🚀 Performance Benefits</h4>
          <ul>
            <li><strong>Layout Stability:</strong> Prevents content layout shift (CLS)</li>
            <li><strong>Consistent Design:</strong> Maintains visual hierarchy across content</li>
            <li><strong>Modern CSS:</strong> Native browser support with automatic fallback</li>
            <li><strong>Responsive Design:</strong> Works seamlessly with grid and flexbox layouts</li>
            <li><strong>Cross-browser:</strong> Progressive enhancement for all browsers</li>
          </ul>
        </div>
      </section>
    </div>
  `,
};

const meta: Meta = {
  title: 'Design Tokens/Aspect Ratio',
  component: AspectRatioDemo,
  parameters: {
    docs: {
      description: {
        component: `
# Aspect Ratio Utilities

Modern CSS aspect-ratio utilities that maintain consistent proportions across images, videos, cards, and other content containers with automatic fallback support.

## Overview

Aspect ratio utilities solve the common problem of maintaining consistent proportions for content containers, especially important for responsive design and preventing layout shift.

## Key Features

### Standard Aspect Ratios
- **\`.haspen-aspect-square\`** - 1:1 perfect square (social media, avatars)
- **\`.haspen-aspect-video\`** - 16:9 standard video format
- **\`.haspen-aspect-photo\`** - 4:3 traditional photography
- **\`.haspen-aspect-portrait\`** - 3:4 portrait orientation

### Special Ratios
- **\`.haspen-aspect-cinema\`** - 21:9 ultra-wide cinematic
- **\`.haspen-aspect-golden\`** - 1.618:1 golden ratio
- **\`.haspen-aspect-wide\`** - 2:1 banner/header format
- **\`.haspen-aspect-ultra-wide\`** - 32:9 ultra-wide monitor
- **\`.haspen-aspect-a4\`** - 210:297 A4 paper format

### Custom Aspect Ratios
- **\`.haspen-aspect-custom\`** - Use with \`--aspect-ratio\` CSS custom property

## Browser Support

- **Modern browsers:** Chrome 88+, Safari 15+, Firefox 89+
- **Automatic fallback:** Padding-top technique for older browsers
- **Progressive enhancement:** Graceful degradation without JavaScript

## Usage Examples

```html
<!-- Basic aspect ratios -->
<div class="haspen-aspect-video">
  <img src="video-thumbnail.jpg" alt="Video thumbnail" />
</div>

<div class="haspen-aspect-square">
  <div class="profile-avatar">
    <img src="avatar.jpg" alt="User avatar" />
  </div>
</div>

<!-- Responsive aspect ratios -->
<div class="haspen-cq-sm:aspect-square haspen-cq-lg:aspect-video">
  <div class="adaptive-content">Content adapts to container</div>
</div>

<!-- Custom aspect ratio -->
<div class="haspen-aspect-custom" style="--aspect-ratio: 5/2">
  <div class="banner-content">Custom 5:2 ratio</div>
</div>
```

## Real-world Use Cases

### Image Galleries
Maintain consistent dimensions across mixed image sizes:
```html
<div class="gallery">
  <div class="haspen-aspect-square">
    <img src="wide-image.jpg" alt="Wide image cropped to square" />
  </div>
  <div class="haspen-aspect-square">
    <img src="tall-image.jpg" alt="Tall image cropped to square" />
  </div>
</div>
```

### Video Thumbnails
Consistent 16:9 ratio for video previews:
```html
<div class="video-card">
  <div class="haspen-aspect-video">
    <img src="thumbnail.jpg" alt="Video thumbnail" />
    <div class="play-button">▶️</div>
  </div>
</div>
```

### Profile Cards
Portrait orientation for profile photos:
```html
<div class="profile-card">
  <div class="haspen-aspect-portrait">
    <img src="profile.jpg" alt="User profile" />
  </div>
</div>
```

## Performance Benefits

- **Layout Stability:** Prevents Cumulative Layout Shift (CLS)
- **Consistent Design:** Maintains visual hierarchy across content
- **Modern CSS:** Native browser support with automatic fallback
- **Cross-browser:** Progressive enhancement for all browsers
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
  render: () => AspectRatioDemo,
  parameters: {
    docs: {
      description: {
        story: 'Complete overview of aspect ratio utilities with interactive examples and real-world use cases.',
      },
    },
  },
};

export const StandardRatios: Story = {
  render: () => ({
    template: `
      <div class="aspect-ratio-demo">
        <h3>Standard Aspect Ratios</h3>
        
        <div class="aspect-ratio-grid">
          <div class="aspect-item">
            <div class="haspen-aspect-square demo-content">
              <div class="content-box">
                <strong>1:1</strong>
                <span>Square</span>
              </div>
            </div>
            <code>.haspen-aspect-square</code>
          </div>
          
          <div class="aspect-item">
            <div class="haspen-aspect-video demo-content">
              <div class="content-box">
                <strong>16:9</strong>
                <span>Video</span>
              </div>
            </div>
            <code>.haspen-aspect-video</code>
          </div>
          
          <div class="aspect-item">
            <div class="haspen-aspect-photo demo-content">
              <div class="content-box">
                <strong>4:3</strong>
                <span>Photo</span>
              </div>
            </div>
            <code>.haspen-aspect-photo</code>
          </div>
          
          <div class="aspect-item">
            <div class="haspen-aspect-portrait demo-content">
              <div class="content-box">
                <strong>3:4</strong>
                <span>Portrait</span>
              </div>
            </div>
            <code>.haspen-aspect-portrait</code>
          </div>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Common aspect ratios for everyday use cases like social media, photography, and video content.',
      },
    },
  },
};

export const ResponsiveAspectRatios: Story = {
  render: () => ({
    template: `
      <div class="aspect-ratio-demo">
        <h3>Responsive Aspect Ratios</h3>
        
        <div class="example-container">
          <h4>Container Query Responsive</h4>
          <div class="resizable-container haspen-container">
            <div class="responsive-aspect haspen-cq-sm:aspect-square haspen-cq-md:aspect-video haspen-cq-lg:aspect-cinema">
              <div class="content-box">
                <strong>Adaptive Ratio</strong>
                <span>Changes based on container size</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="example-container">
          <h4>Media Query Responsive</h4>
          <div class="viewport-aspect haspen-sm:aspect-square haspen-md:aspect-video haspen-lg:aspect-wide">
            <div class="content-box">
              <strong>Viewport Responsive</strong>
              <span>Changes based on screen size</span>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Responsive aspect ratios that adapt to container size or viewport dimensions.',
      },
    },
  },
};

export const CustomAspectRatios: Story = {
  render: () => ({
    template: `
      <div class="aspect-ratio-demo">
        <h3>Custom Aspect Ratios</h3>
        
        <div class="custom-aspect-grid">
          <div class="custom-aspect-item">
            <div class="haspen-aspect-custom demo-content" style="--aspect-ratio: 5/2">
              <div class="content-box">
                <strong>5:2</strong>
                <span>Banner Ratio</span>
              </div>
            </div>
            <code>--aspect-ratio: 5/2</code>
          </div>
          
          <div class="custom-aspect-item">
            <div class="haspen-aspect-custom demo-content" style="--aspect-ratio: 1.414">
              <div class="content-box">
                <strong>√2:1</strong>
                <span>A-series Paper</span>
              </div>
            </div>
            <code>--aspect-ratio: 1.414</code>
          </div>
          
          <div class="custom-aspect-item">
            <div class="haspen-aspect-custom demo-content" style="--aspect-ratio: 7/3">
              <div class="content-box">
                <strong>7:3</strong>
                <span>Ultra-wide</span>
              </div>
            </div>
            <code>--aspect-ratio: 7/3</code>
          </div>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Custom aspect ratios using CSS custom properties for unique proportions.',
      },
    },
  },
};