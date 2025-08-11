import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta = {
  title: 'Design Tokens/Visual Effects',
  parameters: {
    docs: {
      description: {
        component: `
# Visual Effects

Shadows, border radius og z-index system fra DKFDS.

## Shadows
Elevation system med forskellige skygge niveauer.

## Border Radius
Afrundede hjørner i forskellige størrelser.

## Z-Index
Layering system til at styre element stacking.
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Shadows: Story = {
  render: () => ({
    template: `
      <div class="effects-demo">
        <h2>Shadow System</h2>
        
        <div class="shadow-grid">
          <div class="shadow-item">
            <div class="shadow-box" style="box-shadow: none;">
              <strong>None</strong>
              <code>func.shadow('none')</code>
            </div>
          </div>
          
          <div class="shadow-item">
            <div class="shadow-box" style="box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
              <strong>Subtle</strong>
              <code>func.shadow('subtle')</code>
              <small>0 1px 3px rgba(0,0,0,0.1)</small>
            </div>
          </div>
          
          <div class="shadow-item">
            <div class="shadow-box" style="box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <strong>Light</strong>
              <code>func.shadow('light')</code>
              <small>0 2px 4px rgba(0,0,0,0.1)</small>
            </div>
          </div>
          
          <div class="shadow-item">
            <div class="shadow-box" style="box-shadow: 0 4px 8px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.08);">
              <strong>Medium</strong>
              <code>func.shadow('medium')</code>
              <small>Multiple shadows</small>
            </div>
          </div>
          
          <div class="shadow-item">
            <div class="shadow-box" style="box-shadow: 0 8px 16px rgba(0,0,0,0.15), 0 4px 8px rgba(0,0,0,0.1);">
              <strong>Large</strong>
              <code>func.shadow('large')</code>
              <small>Større elevation</small>
            </div>
          </div>
          
          <div class="shadow-item">
            <div class="shadow-box" style="box-shadow: 0 16px 32px rgba(0,0,0,0.15), 0 8px 16px rgba(0,0,0,0.1);">
              <strong>Extra Large</strong>
              <code>func.shadow('extra-large')</code>
              <small>Maksimal elevation</small>
            </div>
          </div>
          
          <div class="shadow-item">
            <div class="shadow-box" style="box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);">
              <strong>Inner</strong>
              <code>func.shadow('inner')</code>
              <small>Inset shadow</small>
            </div>
          </div>
          
          <div class="shadow-item">
            <div class="shadow-box shadow-focus" tabindex="0">
              <strong>Focus</strong>
              <small>Fokuser for at se</small>
              <code>0 0 0 3px rgba(116,116,116,0.5)</code>
            </div>
          </div>
        </div>

        <h3>Component Shadows</h3>
        <div class="component-shadows">
          <div class="component-shadow-item">
            <div class="card-shadow">Card</div>
            <code>$shadow-card</code>
          </div>
          <div class="component-shadow-item">
            <div class="modal-shadow">Modal</div>
            <code>$shadow-modal</code>
          </div>
          <div class="component-shadow-item">
            <div class="dropdown-shadow">Dropdown</div>
            <code>$shadow-dropdown</code>
          </div>
          <div class="component-shadow-item">
            <div class="tooltip-shadow">Tooltip</div>
            <code>$shadow-tooltip</code>
          </div>
        </div>
      </div>
    `,
  }),
};

export const BorderRadius: Story = {
  render: () => ({
    template: `
      <div class="effects-demo">
        <h2>Border Radius System</h2>
        
        <div class="radius-grid">
          <div class="radius-item">
            <div class="radius-box" style="border-radius: 0;">
              <strong>None</strong>
              <code>func.radius('none')</code>
              <small>0</small>
            </div>
          </div>
          
          <div class="radius-item">
            <div class="radius-box" style="border-radius: 2px;">
              <strong>XS</strong>
              <code>func.radius('xs')</code>
              <small>2px</small>
            </div>
          </div>
          
          <div class="radius-item">
            <div class="radius-box" style="border-radius: 4px;">
              <strong>SM</strong>
              <code>func.radius('sm')</code>
              <small>4px</small>
            </div>
          </div>
          
          <div class="radius-item">
            <div class="radius-box" style="border-radius: 6px;">
              <strong>Default</strong>
              <code>func.radius('default')</code>
              <small>6px</small>
            </div>
          </div>
          
          <div class="radius-item">
            <div class="radius-box" style="border-radius: 8px;">
              <strong>MD</strong>
              <code>func.radius('md')</code>
              <small>8px</small>
            </div>
          </div>
          
          <div class="radius-item">
            <div class="radius-box" style="border-radius: 12px;">
              <strong>LG</strong>
              <code>func.radius('lg')</code>
              <small>12px</small>
            </div>
          </div>
          
          <div class="radius-item">
            <div class="radius-box" style="border-radius: 16px;">
              <strong>XL</strong>
              <code>func.radius('xl')</code>
              <small>16px</small>
            </div>
          </div>
          
          <div class="radius-item">
            <div class="radius-box" style="border-radius: 20px;">
              <strong>2XL</strong>
              <code>func.radius('2xl')</code>
              <small>20px</small>
            </div>
          </div>
          
          <div class="radius-item">
            <div class="radius-box" style="border-radius: 24px;">
              <strong>3XL</strong>
              <code>func.radius('3xl')</code>
              <small>24px</small>
            </div>
          </div>
          
          <div class="radius-item">
            <div class="radius-box" style="border-radius: 50%; width: 80px; height: 80px;">
              <strong>Round</strong>
              <code>func.radius('round')</code>
              <small>50%</small>
            </div>
          </div>
          
          <div class="radius-item">
            <div class="radius-box" style="border-radius: 9999px;">
              <strong>Full</strong>
              <code>func.radius('full')</code>
              <small>9999px</small>
            </div>
          </div>
        </div>

        <h3>Component Radius</h3>
        <div class="component-radius">
          <button class="radius-button">Button</button>
          <input class="radius-input" placeholder="Input field" />
          <div class="radius-card">Card</div>
          <span class="radius-badge">Badge</span>
        </div>
      </div>
    `,
  }),
};

export const ZIndexLayers: Story = {
  render: () => ({
    template: `
      <div class="effects-demo">
        <h2>Z-Index Layering System</h2>
        
        <div class="z-index-visualization">
          <div class="z-layer" style="z-index: -1;">
            <strong>Negative</strong>
            <code>func.z-index('negative')</code>
            <small>-1</small>
          </div>
          
          <div class="z-layer" style="z-index: 0;">
            <strong>Default</strong>
            <code>func.z-index('default')</code>
            <small>0</small>
          </div>
          
          <div class="z-layer" style="z-index: 100;">
            <strong>Above</strong>
            <code>func.z-index('above')</code>
            <small>100</small>
          </div>
          
          <div class="z-layer" style="z-index: 1000;">
            <strong>Dropdown</strong>
            <code>func.z-index('dropdown')</code>
            <small>1000</small>
          </div>
          
          <div class="z-layer" style="z-index: 1020;">
            <strong>Sticky</strong>
            <code>func.z-index('sticky')</code>
            <small>1020</small>
          </div>
          
          <div class="z-layer" style="z-index: 1030;">
            <strong>Fixed</strong>
            <code>func.z-index('fixed')</code>
            <small>1030</small>
          </div>
          
          <div class="z-layer" style="z-index: 1040;">
            <strong>Modal Backdrop</strong>
            <code>$z-index-modal-backdrop</code>
            <small>1040</small>
          </div>
          
          <div class="z-layer" style="z-index: 1050;">
            <strong>Modal</strong>
            <code>func.z-index('modal')</code>
            <small>1050</small>
          </div>
          
          <div class="z-layer" style="z-index: 1060;">
            <strong>Popover</strong>
            <code>func.z-index('popover')</code>
            <small>1060</small>
          </div>
          
          <div class="z-layer" style="z-index: 1070;">
            <strong>Tooltip</strong>
            <code>func.z-index('tooltip')</code>
            <small>1070</small>
          </div>
          
          <div class="z-layer" style="z-index: 1080;">
            <strong>Notification</strong>
            <code>func.z-index('notification')</code>
            <small>1080</small>
          </div>
          
          <div class="z-layer" style="z-index: 9999;">
            <strong>Top</strong>
            <code>func.z-index('top')</code>
            <small>9999</small>
          </div>
        </div>

        <h3>Usage Example</h3>
        <div class="code-example">
          <pre><code>// Component styles
.dropdown {
  position: absolute;
  z-index: func.z-index('dropdown');
}

.modal {
  position: fixed;
  z-index: func.z-index('modal');
  
  &-backdrop {
    z-index: $z-index-modal-backdrop;
  }
}

.tooltip {
  position: absolute;
  z-index: func.z-index('tooltip');
}</code></pre>
        </div>

        <h3>Interactive Demo</h3>
        <div class="z-index-demo">
          <div class="z-demo-item" style="z-index: 100; background: #f5f5f5;">Base content (100)</div>
          <div class="z-demo-item" style="z-index: 1000; background: #e0e0e0;">Dropdown (1000)</div>
          <div class="z-demo-item" style="z-index: 1050; background: #bfbfbf;">Modal (1050)</div>
          <div class="z-demo-item" style="z-index: 1070; background: #aaa;">Tooltip (1070)</div>
        </div>
      </div>
    `,
  }),
};
