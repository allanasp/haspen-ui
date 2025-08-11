import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta = {
  title: 'Design Tokens/DKFDS Complete System',
  parameters: {
    docs: {
      description: {
        component: `
# Det Fælles Designsystem (DKFDS) - Komplet Implementation

Haspen UI implementerer det komplette DKFDS (Det Fælles Designsystem) med alle design tokens, functions, mixins og utility classes.

## System Arkitektur

### Core Design Tokens
- **Colors**: Komplet farvepalet med semantiske farver, grå-skala og data visualisering
- **Typography**: IBM Plex Sans med responsive størrelser og vægte
- **Spacing**: 8px basis system med omfattende skala
- **Breakpoints**: Mobile-first responsive system (xs, sm, md, lg, xl)
- **Shadows**: Elevation system for dybde
- **Radius**: Border radius værdier for alle komponenter
- **Z-index**: Lagering og stacking context håndtering

### SCSS Functions
- \`func.color()\` - Adgang til farver
- \`func.font-size()\` - Skrifttyper størrelser
- \`func.font-weight()\` - Skrifttyper vægte
- \`func.units()\` - Spacing værdier
- \`func.border()\` - Border definitioner
- \`func.shadow()\` - Skygge definitioner
- \`func.radius()\` - Border radius værdier

### Mixins Library
- Typography mixins (h1-h6, body text, labels)
- Layout mixins (container, grid, responsive)
- Button mixins (primary, secondary, base)
- Utility mixins (focus, sr-only, clearfix)
- State mixins (hover, focus, active)
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ColorSystem: Story = {
  render: () => ({
    template: `
      <div class="dkfds-demo">
        <h1>DKFDS Farve System</h1>
        
        <section>
          <h2>Semantiske Farver</h2>
          <div class="color-grid">
            <div class="color-item">
              <div class="color-swatch" style="background-color: var(--color-primary)"></div>
              <div class="color-info">
                <strong>Primary</strong><br>
                <code>func.color('primary')</code><br>
                <small>Primær brand farve</small>
              </div>
            </div>
            
            <div class="color-item">
              <div class="color-swatch" style="background-color: var(--color-success)"></div>
              <div class="color-info">
                <strong>Success</strong><br>
                <code>func.color('success')</code><br>
                <small>Succes meddelelser</small>
              </div>
            </div>
            
            <div class="color-item">
              <div class="color-swatch" style="background-color: var(--color-warning)"></div>
              <div class="color-info">
                <strong>Warning</strong><br>
                <code>func.color('warning')</code><br>
                <small>Advarsels meddelelser</small>
              </div>
            </div>
            
            <div class="color-item">
              <div class="color-swatch" style="background-color: var(--color-error)"></div>
              <div class="color-info">
                <strong>Error</strong><br>
                <code>func.color('error')</code><br>
                <small>Fejl meddelelser</small>
              </div>
            </div>
            
            <div class="color-item">
              <div class="color-swatch" style="background-color: var(--color-info)"></div>
              <div class="color-info">
                <strong>Info</strong><br>
                <code>func.color('info')</code><br>
                <small>Informations meddelelser</small>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2>Grå Skala</h2>
          <div class="color-grid">
            <div class="color-item">
              <div class="color-swatch" style="background-color: var(--color-gray-100)"></div>
              <div class="color-info">
                <strong>Gray 100</strong><br>
                <code>func.color('gray-100')</code><br>
                <small>#f5f5f5</small>
              </div>
            </div>
            
            <div class="color-item">
              <div class="color-swatch" style="background-color: var(--color-gray-300)"></div>
              <div class="color-info">
                <strong>Gray 300</strong><br>
                <code>func.color('gray-300')</code><br>
                <small>#bfbfbf</small>
              </div>
            </div>
            
            <div class="color-item">
              <div class="color-swatch" style="background-color: var(--color-gray-600)"></div>
              <div class="color-info">
                <strong>Gray 600</strong><br>
                <code>func.color('gray-600')</code><br>
                <small>#747474</small>
              </div>
            </div>
            
            <div class="color-item">
              <div class="color-swatch" style="background-color: var(--color-gray-900)"></div>
              <div class="color-info">
                <strong>Gray 900</strong><br>
                <code>func.color('gray-900')</code><br>
                <small>#1a1a1a</small>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2>Data Visualisering</h2>
          <div class="color-grid">
            <div class="color-item">
              <div class="color-swatch" style="background: linear-gradient(to right, #f3e7fd, #6543bd)"></div>
              <div class="color-info">
                <strong>Violet Palette</strong><br>
                <small>6 nuancer for diagrammer</small>
              </div>
            </div>
            
            <div class="color-item">
              <div class="color-swatch" style="background: linear-gradient(to right, #dff4f7, #15677b)"></div>
              <div class="color-info">
                <strong>Teal Palette</strong><br>
                <small>6 nuancer for diagrammer</small>
              </div>
            </div>
            
            <div class="color-item">
              <div class="color-swatch" style="background: linear-gradient(to right, #fde7f3, #902f58)"></div>
              <div class="color-info">
                <strong>Magenta Palette</strong><br>
                <small>6 nuancer for diagrammer</small>
              </div>
            </div>
          </div>
        </section>
      </div>
    `,
  }),
};

export const TypographySystem: Story = {
  render: () => ({
    template: `
      <div class="dkfds-demo">
        <h1>DKFDS Typography System</h1>
        
        <section>
          <h2>Responsive Headings</h2>
          <div class="typography-example">
            <h1>Heading 1 - Responsive</h1>
            <p><code>@include mixins.h1</code> - Skalerer fra 32px til 48px</p>
            
            <h2>Heading 2 - Responsive</h2>
            <p><code>@include mixins.h2</code> - Skalerer fra 24px til 32px</p>
            
            <h3>Heading 3 - Responsive</h3>
            <p><code>@include mixins.h3</code> - Skalerer fra 20px til 24px</p>
            
            <h4>Heading 4 - Responsive</h4>
            <p><code>@include mixins.h4</code> - Skalerer fra 18px til 20px</p>
            
            <h5>Heading 5 - Responsive</h5>
            <p><code>@include mixins.h5</code> - Skalerer fra 16px til 18px</p>
            
            <h6>Heading 6 - Responsive</h6>
            <p><code>@include mixins.h6</code> - Skalerer fra 13px til 16px</p>
          </div>
        </section>

        <section>
          <h2>Body Text Varianter</h2>
          <div class="typography-example">
            <p class="lead-text">Lead tekst - Større brødtekst til introer</p>
            <p><code>@include mixins.lead-text</code> - 20px font størrelse</p>
            
            <p>Standard brødtekst - Normal tekst til indhold</p>
            <p><code>@include mixins.body-copy-text</code> - 16px font størrelse</p>
            
            <p class="small-text">Lille tekst - Til metadata og hjælpetekst</p>
            <p><code>@include mixins.small-text</code> - 14px font størrelse</p>
          </div>
        </section>

        <section>
          <h2>Form Typography</h2>
          <div class="typography-example">
            <label class="form-label">Form Label</label>
            <p><code>@include mixins.form-label-text</code> - 18px, semibold</p>
            
            <p class="form-hint">Form hint tekst - Hjælpende information</p>
            <p><code>@include mixins.form-hint-text</code> - 14px, gray</p>
            
            <p class="form-error">Form fejl tekst - Fejl beskeder</p>
            <p><code>@include mixins.form-error-text</code> - 14px, rød, semibold</p>
          </div>
        </section>

        <section>
          <h2>Font Vægte</h2>
          <div class="typography-example">
            <p style="font-weight: 400">Normal (400) - Standard vægt</p>
            <p style="font-weight: 500">Medium (500) - Lidt tungere</p>
            <p style="font-weight: 600">Semibold (600) - Semi fed</p>
            <p style="font-weight: 700">Bold (700) - Fed</p>
          </div>
        </section>
      </div>
    `,
  }),
};

export const SpacingSystem: Story = {
  render: () => ({
    template: `
      <div class="dkfds-demo">
        <h1>DKFDS Spacing System</h1>
        
        <section>
          <h2>8px Base System</h2>
          <p>Alle spacing værdier er baseret på 8px enheder for konsistent rytme.</p>
          
          <div class="spacing-scale">
            <div class="spacing-example">
              <div class="spacing-box" style="width: 2px; height: 2px;"></div>
              <span>1 = 2px <code>func.units(1)</code></span>
            </div>
            <div class="spacing-example">
              <div class="spacing-box" style="width: 4px; height: 4px;"></div>
              <span>2 = 4px <code>func.units(2)</code></span>
            </div>
            <div class="spacing-example">
              <div class="spacing-box" style="width: 8px; height: 8px;"></div>
              <span>3 = 8px <code>func.units(3)</code></span>
            </div>
            <div class="spacing-example">
              <div class="spacing-box" style="width: 16px; height: 16px;"></div>
              <span>4 = 16px <code>func.units(4)</code></span>
            </div>
            <div class="spacing-example">
              <div class="spacing-box" style="width: 24px; height: 24px;"></div>
              <span>5 = 24px <code>func.units(5)</code></span>
            </div>
            <div class="spacing-example">
              <div class="spacing-box" style="width: 32px; height: 32px;"></div>
              <span>6 = 32px <code>func.units(6)</code></span>
            </div>
            <div class="spacing-example">
              <div class="spacing-box" style="width: 48px; height: 48px;"></div>
              <span>8 = 48px <code>func.units(8)</code></span>
            </div>
            <div class="spacing-example">
              <div class="spacing-box" style="width: 64px; height: 64px;"></div>
              <span>10 = 64px <code>func.units(10)</code></span>
            </div>
          </div>
        </section>

        <section>
          <h2>Komponent Spacing</h2>
          <div class="component-spacing">
            <div class="spacing-demo">
              <div class="p-3 bg-alternative">Lille padding (8px)</div>
              <code>.p-3</code> eller <code>padding: func.units(3)</code>
            </div>
            
            <div class="spacing-demo">
              <div class="p-5 bg-alternative">Medium padding (24px)</div>
              <code>.p-5</code> eller <code>padding: func.units(5)</code>
            </div>
            
            <div class="spacing-demo">
              <div class="p-8 bg-alternative">Stor padding (48px)</div>
              <code>.p-8</code> eller <code>padding: func.units(8)</code>
            </div>
          </div>
        </section>
      </div>
    `,
  }),
};

export const MixinsDemo: Story = {
  render: () => ({
    template: `
      <div class="dkfds-demo">
        <h1>DKFDS Mixins Library</h1>
        
        <section>
          <h2>Button Mixins</h2>
          <div class="button-demo">
            <button class="btn-primary">Primary Button</button>
            <p><code>@include mixins.button-primary</code></p>
            
            <button class="btn-secondary">Secondary Button</button>
            <p><code>@include mixins.button-secondary</code></p>
          </div>
        </section>

        <section>
          <h2>Layout Mixins</h2>
          <div class="layout-demo">
            <div class="container-example">
              <div class="bg-alternative p-4">Container med responsive max-width</div>
              <p><code>@include mixins.container</code></p>
            </div>
            
            <div class="grid-example mt-4">
              <div class="row bg-alternative">
                <div class="col-6 p-3 border">50% bredde</div>
                <div class="col-6 p-3 border">50% bredde</div>
              </div>
              <p><code>@include mixins.grid-row</code> og <code>@include mixins.grid-col(6)</code></p>
            </div>
          </div>
        </section>

        <section>
          <h2>Focus Mixins</h2>
          <div class="focus-demo">
            <button class="focus-example" tabindex="0">Fokuser på mig</button>
            <p><code>@include mixins.focus</code> - DKFDS standard focus styling</p>
          </div>
        </section>

        <section>
          <h2>Screen Reader Mixins</h2>
          <div class="sr-demo">
            <button>
              Slet <span class="sr-only">bruger John Doe</span>
            </button>
            <p><code>@include mixins.sr-only</code> - Skjuler visuelt, synlig for skærmlæsere</p>
          </div>
        </section>

        <section>
          <h2>Utility Mixins</h2>
          <div class="utility-demo">
            <p class="text-truncate" style="max-width: 200px;">Dette er en meget lang tekst der bliver afskåret med ellipsis</p>
            <p><code>@include mixins.text-truncate</code></p>
            
            <ul class="unstyled-list">
              <li>Punkt uden bullets</li>
              <li>Og ingen padding</li>
            </ul>
            <p><code>@include mixins.unstyled-list</code></p>
          </div>
        </section>
      </div>
    `,
  }),
};
