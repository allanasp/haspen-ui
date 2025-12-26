import type { Meta, StoryObj } from '@storybook/vue3-vite';

const meta: Meta = {
  title: 'Design Tokens/Utility Classes',
  parameters: {
    docs: {
      description: {
        component: `
# DKFDS Utility Classes

Haspen UI inkluderer alle utility classes fra Det Fælles Designsystem (DKFDS). Disse utility classes giver hurtig og konsistent styling uden at skrive custom CSS.

## Responsive Design

Næsten alle utility classes understøtter responsive varianter med følgende breakpoints:

- \`xs\`: 0px (standard, ingen prefix)
- \`sm\`: 576px
- \`md\`: 768px  
- \`lg\`: 992px
- \`xl\`: 1200px

Format: \`.{property}-{breakpoint}-{value}\`

Eksempel: \`.d-none .d-md-block\` (skjult på mobil, synlig fra tablet)
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Spacing: Story = {
  render: () => ({
    template: `
      <div class="utility-demo">
        <h2>Margin og Padding</h2>
        
        <h3>Spacing Scale</h3>
        <div class="spacing-grid">
          <div class="spacing-item">
            <div class="p-0 bg-alternative">p-0 (0px)</div>
          </div>
          <div class="spacing-item">
            <div class="p-1 bg-alternative">p-1 (2px)</div>
          </div>
          <div class="spacing-item">
            <div class="p-2 bg-alternative">p-2 (4px)</div>
          </div>
          <div class="spacing-item">
            <div class="p-3 bg-alternative">p-3 (8px)</div>
          </div>
          <div class="spacing-item">
            <div class="p-4 bg-alternative">p-4 (16px)</div>
          </div>
          <div class="spacing-item">
            <div class="p-5 bg-alternative">p-5 (24px)</div>
          </div>
          <div class="spacing-item">
            <div class="p-6 bg-alternative">p-6 (32px)</div>
          </div>
          <div class="spacing-item">
            <div class="p-7 bg-alternative">p-7 (40px)</div>
          </div>
          <div class="spacing-item">
            <div class="p-8 bg-alternative">p-8 (48px)</div>
          </div>
          <div class="spacing-item">
            <div class="p-9 bg-alternative">p-9 (56px)</div>
          </div>
        </div>

        <h3>Margin Eksempler</h3>
        <div class="demo-container bg-alternative">
          <div class="m-3 p-3 bg-normal">m-3 (margin på alle sider)</div>
          <div class="mt-5 p-3 bg-normal">mt-5 (margin-top)</div>
          <div class="mx-auto p-3 bg-normal" style="width: 200px;">mx-auto (centreret)</div>
          <div class="my-4 p-3 bg-normal">my-4 (margin top/bottom)</div>
        </div>

        <h3>Padding Eksempler</h3>
        <div class="demo-container">
          <div class="p-5 bg-alternative mb-3">p-5 (padding på alle sider)</div>
          <div class="px-6 py-2 bg-alternative mb-3">px-6 py-2 (forskellige x/y padding)</div>
          <div class="pt-8 pr-4 pb-2 pl-6 bg-alternative">pt-8 pr-4 pb-2 pl-6 (individuel padding)</div>
        </div>

        <h3>Responsive Spacing</h3>
        <div class="p-2 p-md-4 p-lg-6 bg-alternative">
          Padding ændrer sig ved forskellige skærmstørrelser
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: `
### Tilgængelige spacing værdier:
- \`0\`: 0px
- \`1\`: 2px
- \`2\`: 4px  
- \`3\`: 8px
- \`305\`: 12px
- \`4\`: 16px
- \`405\`: 20px
- \`5\`: 24px
- \`505\`: 28px
- \`6\`: 32px
- \`605\`: 36px
- \`7\`: 40px
- \`705\`: 44px
- \`8\`: 48px
- \`805\`: 52px
- \`9\`: 56px
- \`905\`: 60px

### Margin classes:
- \`.m-{size}\` - margin på alle sider
- \`.mt-{size}\` - margin-top
- \`.mr-{size}\` - margin-right  
- \`.mb-{size}\` - margin-bottom
- \`.ml-{size}\` - margin-left
- \`.mx-{size}\` - margin left/right
- \`.my-{size}\` - margin top/bottom
- \`.m-auto\`, \`.mx-auto\`, etc. - auto margin

### Padding classes:
- \`.p-{size}\` - padding på alle sider
- \`.pt-{size}\` - padding-top
- \`.pr-{size}\` - padding-right
- \`.pb-{size}\` - padding-bottom  
- \`.pl-{size}\` - padding-left
- \`.px-{size}\` - padding left/right
- \`.py-{size}\` - padding top/bottom
        `,
      },
    },
  },
};

export const Display: Story = {
  render: () => ({
    template: `
      <div class="utility-demo">
        <h2>Display Utilities</h2>
        
        <h3>Display Values</h3>
        <div class="demo-container">
          <div class="mb-4">
            <span class="d-inline p-2 bg-alternative">d-inline</span>
            <span class="d-inline p-2 bg-alternative">d-inline</span>
          </div>
          
          <div class="mb-4">
            <span class="d-inline-block p-2 bg-alternative" style="width: 150px;">d-inline-block</span>
            <span class="d-inline-block p-2 bg-alternative" style="width: 150px;">d-inline-block</span>
          </div>
          
          <div class="d-block p-2 bg-alternative mb-2">d-block</div>
          <div class="d-block p-2 bg-alternative mb-4">d-block</div>
          
          <div class="d-flex p-2 bg-alternative mb-2">
            <div class="p-2 bg-normal">d-flex child</div>
            <div class="p-2 bg-normal">d-flex child</div>
          </div>
          
          <div class="d-none">Dette element er skjult (d-none)</div>
        </div>

        <h3>Responsive Display</h3>
        <div class="demo-container">
          <div class="d-block d-md-none p-3 bg-alternative mb-2">
            Kun synlig på mobil (d-block d-md-none)
          </div>
          <div class="d-none d-md-block d-lg-none p-3 bg-alternative mb-2">
            Kun synlig på tablet (d-none d-md-block d-lg-none)
          </div>
          <div class="d-none d-lg-block p-3 bg-alternative">
            Kun synlig på desktop (d-none d-lg-block)
          </div>
        </div>

        <h3>Print Display</h3>
        <div class="demo-container">
          <div class="d-print-none p-3 bg-alternative mb-2">
            Skjules ved print (d-print-none)
          </div>
          <div class="d-none d-print-block p-3 bg-alternative">
            Kun synlig ved print (d-none d-print-block)
          </div>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: `
### Display classes:
- \`.d-none\` - display: none
- \`.d-inline\` - display: inline
- \`.d-inline-block\` - display: inline-block  
- \`.d-block\` - display: block
- \`.d-flex\` - display: flex
- \`.d-inline-flex\` - display: inline-flex

### Responsive varianter:
- \`.d-{breakpoint}-none\`
- \`.d-{breakpoint}-inline\`
- \`.d-{breakpoint}-inline-block\`
- \`.d-{breakpoint}-block\`
- \`.d-{breakpoint}-flex\`
- \`.d-{breakpoint}-inline-flex\`

### Print varianter:
- \`.d-print-none\`
- \`.d-print-inline\`
- \`.d-print-inline-block\`
- \`.d-print-block\`
- \`.d-print-flex\`
        `,
      },
    },
  },
};

export const Flexbox: Story = {
  render: () => ({
    template: `
      <div class="utility-demo">
        <h2>Flexbox Utilities</h2>
        
        <h3>Flex Direction</h3>
        <div class="demo-container">
          <div class="d-flex flex-row p-2 bg-alternative mb-3">
            <div class="p-2 bg-normal m-1">flex-row 1</div>
            <div class="p-2 bg-normal m-1">flex-row 2</div>
            <div class="p-2 bg-normal m-1">flex-row 3</div>
          </div>
          
          <div class="d-flex flex-column p-2 bg-alternative" style="height: 150px;">
            <div class="p-2 bg-normal m-1">flex-column 1</div>
            <div class="p-2 bg-normal m-1">flex-column 2</div>
            <div class="p-2 bg-normal m-1">flex-column 3</div>
          </div>
        </div>

        <h3>Justify Content</h3>
        <div class="demo-container">
          <div class="d-flex justify-content-start p-2 bg-alternative mb-2">
            <div class="p-2 bg-normal">start</div>
          </div>
          
          <div class="d-flex justify-content-center p-2 bg-alternative mb-2">
            <div class="p-2 bg-normal">center</div>
          </div>
          
          <div class="d-flex justify-content-end p-2 bg-alternative mb-2">
            <div class="p-2 bg-normal">end</div>
          </div>
          
          <div class="d-flex justify-content-between p-2 bg-alternative mb-2">
            <div class="p-2 bg-normal">between</div>
            <div class="p-2 bg-normal">between</div>
          </div>
          
          <div class="d-flex justify-content-around p-2 bg-alternative">
            <div class="p-2 bg-normal">around</div>
            <div class="p-2 bg-normal">around</div>
          </div>
        </div>

        <h3>Align Items</h3>
        <div class="demo-container">
          <div class="d-flex align-items-start p-2 bg-alternative mb-2" style="height: 100px;">
            <div class="p-2 bg-normal">start</div>
            <div class="p-4 bg-normal">start</div>
          </div>
          
          <div class="d-flex align-items-center p-2 bg-alternative mb-2" style="height: 100px;">
            <div class="p-2 bg-normal">center</div>
            <div class="p-4 bg-normal">center</div>
          </div>
          
          <div class="d-flex align-items-end p-2 bg-alternative" style="height: 100px;">
            <div class="p-2 bg-normal">end</div>
            <div class="p-4 bg-normal">end</div>
          </div>
        </div>

        <h3>Flex Wrap</h3>
        <div class="demo-container">
          <div class="d-flex flex-wrap p-2 bg-alternative" style="width: 300px;">
            <div class="p-3 bg-normal m-1">wrap 1</div>
            <div class="p-3 bg-normal m-1">wrap 2</div>
            <div class="p-3 bg-normal m-1">wrap 3</div>
            <div class="p-3 bg-normal m-1">wrap 4</div>
            <div class="p-3 bg-normal m-1">wrap 5</div>
          </div>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: `
### Flex Direction:
- \`.flex-row\`
- \`.flex-column\`
- \`.flex-row-reverse\`
- \`.flex-column-reverse\`

### Justify Content:
- \`.justify-content-start\`
- \`.justify-content-end\`
- \`.justify-content-center\`
- \`.justify-content-between\`
- \`.justify-content-around\`

### Align Items:
- \`.align-items-start\`
- \`.align-items-end\`
- \`.align-items-center\`
- \`.align-items-baseline\`
- \`.align-items-stretch\`

### Align Content:
- \`.align-content-start\`
- \`.align-content-end\`
- \`.align-content-center\`
- \`.align-content-between\`
- \`.align-content-around\`
- \`.align-content-stretch\`

### Align Self:
- \`.align-self-auto\`
- \`.align-self-start\`
- \`.align-self-end\`
- \`.align-self-center\`
- \`.align-self-baseline\`
- \`.align-self-stretch\`

### Flex Wrap:
- \`.flex-wrap\`
- \`.flex-nowrap\`
- \`.flex-wrap-reverse\`

Alle flexbox utilities understøtter responsive varianter: \`.flex-{breakpoint}-row\`, etc.
        `,
      },
    },
  },
};

export const Width: Story = {
  render: () => ({
    template: `
      <div class="utility-demo">
        <h2>Width Utilities</h2>
        
        <h3>Percentage Widths</h3>
        <div class="demo-container">
          <div class="w-percent-10 p-2 bg-alternative mb-2">w-percent-10 (10%)</div>
          <div class="w-percent-20 p-2 bg-alternative mb-2">w-percent-20 (20%)</div>
          <div class="w-percent-30 p-2 bg-alternative mb-2">w-percent-30 (30%)</div>
          <div class="w-percent-40 p-2 bg-alternative mb-2">w-percent-40 (40%)</div>
          <div class="w-percent-50 p-2 bg-alternative mb-2">w-percent-50 (50%)</div>
          <div class="w-percent-60 p-2 bg-alternative mb-2">w-percent-60 (60%)</div>
          <div class="w-percent-70 p-2 bg-alternative mb-2">w-percent-70 (70%)</div>
          <div class="w-percent-80 p-2 bg-alternative mb-2">w-percent-80 (80%)</div>
          <div class="w-percent-90 p-2 bg-alternative mb-2">w-percent-90 (90%)</div>
          <div class="w-percent-100 p-2 bg-alternative">w-percent-100 (100%)</div>
        </div>

        <h3>Responsive Width</h3>
        <div class="demo-container">
          <div class="w-percent-100 w-percent-md-50 w-percent-lg-30 p-3 bg-alternative">
            100% mobil → 50% tablet → 30% desktop
          </div>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: `
### Width classes:
- \`.w-percent-10\` - width: 10%
- \`.w-percent-20\` - width: 20%
- \`.w-percent-30\` - width: 30%
- \`.w-percent-40\` - width: 40%
- \`.w-percent-50\` - width: 50%
- \`.w-percent-60\` - width: 60%
- \`.w-percent-70\` - width: 70%
- \`.w-percent-80\` - width: 80%
- \`.w-percent-90\` - width: 90%
- \`.w-percent-100\` - width: 100%

### Responsive varianter:
- \`.w-percent-{breakpoint}-{value}\`

Eksempel: \`.w-percent-md-50\` = 50% width fra medium breakpoint
        `,
      },
    },
  },
};

export const BackgroundColors: Story = {
  render: () => ({
    template: `
      <div class="utility-demo">
        <h2>Background Colors</h2>
        
        <div class="demo-container">
          <div class="bg-normal p-4 mb-3 border">
            <strong>bg-normal</strong><br>
            Standard hvid baggrund
          </div>
          
          <div class="bg-alternative p-4 mb-3">
            <strong>bg-alternative</strong><br>
            Grå baggrund (#F5F5F5)
          </div>
          
          <div class="bg-modal p-4 text-white">
            <strong>bg-modal</strong><br>
            Modal overlay baggrund
          </div>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: `
### Background classes:
- \`.bg-normal\` - Hvid baggrund
- \`.bg-alternative\` - Grå baggrund (#F5F5F5)
- \`.bg-modal\` - Modal overlay baggrund

Note: DKFDS har begrænset antal background utility classes. Flere farver håndteres gennem komponent-specifikke styles.
        `,
      },
    },
  },
};

export const Position: Story = {
  render: () => ({
    template: `
      <div class="utility-demo">
        <h2>Position Utilities</h2>
        
        <div class="demo-container">
          <div class="position-relative p-5 bg-alternative" style="height: 200px;">
            <div class="position-static p-2 bg-normal mb-2">position-static (default)</div>
            <div class="position-absolute p-2 bg-normal" style="top: 20px; right: 20px;">
              position-absolute
            </div>
            <div class="position-relative p-2 bg-normal" style="top: 10px; left: 10px;">
              position-relative
            </div>
          </div>
        </div>

        <h3>Position Shortcuts</h3>
        <div class="demo-container">
          <div class="alert alert-info">
            <strong>Fixed positioning:</strong><br>
            <code>.fixed-top</code> - Fastgjort til toppen<br>
            <code>.fixed-bottom</code> - Fastgjort til bunden<br>
            <code>.sticky-top</code> - Sticky positioning i toppen
          </div>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: `
### Position classes:
- \`.position-static\` - position: static
- \`.position-relative\` - position: relative
- \`.position-absolute\` - position: absolute
- \`.position-fixed\` - position: fixed
- \`.position-sticky\` - position: sticky

### Position shortcuts:
- \`.fixed-top\` - Fixed til viewport top
- \`.fixed-bottom\` - Fixed til viewport bottom
- \`.sticky-top\` - Sticky til container top
        `,
      },
    },
  },
};

export const TextAlignment: Story = {
  render: () => ({
    template: `
      <div class="utility-demo">
        <h2>Text Alignment</h2>
        
        <div class="demo-container">
          <div class="align-text-left p-3 bg-alternative mb-2">
            align-text-left - Venstrejusteret tekst
          </div>
          
          <div class="align-text-center p-3 bg-alternative mb-2">
            align-text-center - Centreret tekst
          </div>
          
          <div class="align-text-right p-3 bg-alternative mb-4">
            align-text-right - Højrejusteret tekst
          </div>
          
          <div class="align-text-left align-text-md-center align-text-lg-right p-3 bg-alternative">
            Responsive: Venstre → Center → Højre
          </div>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: `
### Text alignment classes:
- \`.align-text-left\` - text-align: left
- \`.align-text-center\` - text-align: center
- \`.align-text-right\` - text-align: right

### Responsive varianter:
- \`.align-text-{breakpoint}-left\`
- \`.align-text-{breakpoint}-center\`
- \`.align-text-{breakpoint}-right\`
        `,
      },
    },
  },
};

export const Accessibility: Story = {
  render: () => ({
    template: `
      <div class="utility-demo">
        <h2>Accessibility Utilities</h2>
        
        <div class="demo-container">
          <div class="p-3 bg-alternative">
            <p>Synlig tekst med skjult ekstra kontekst:</p>
            <button class="btn btn-primary">
              Slet <span class="sr-only">bruger John Doe</span>
            </button>
          </div>
          
          <div class="alert alert-info mt-3">
            <strong>sr-only klassen</strong><br>
            Skjuler visuelt indhold men bevarer det for skærmlæsere.
            Bruges til at give ekstra kontekst til assistive teknologier.
          </div>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: `
### Accessibility class:
- \`.sr-only\` - Skjuler element visuelt men bevarer det for skærmlæsere

Bruges til at tilføje kontekst for skærmlæsere uden at påvirke det visuelle layout.
        `,
      },
    },
  },
};
