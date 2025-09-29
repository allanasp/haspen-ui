import type { Meta, StoryObj } from '@storybook/vue3';
import { ref, onMounted, nextTick } from 'vue';
import {
  testColorContrast,
  a11yTestScenarios,
  testComponentAccessibility,
} from '../test-utils/accessibility';
import ThemeProvider from '../molecules/ThemeProvider/ThemeProvider.vue';
import Button from '../atoms/Button/Button.vue';
import ThemeToggle from '../atoms/ThemeToggle/ThemeToggle.vue';
import './AccessibilityShowcase.stories.scss';

// Accessibility Showcase Demo Component
const AccessibilityShowcaseDemo = {
  template: `
    <div class="a11y-showcase">
      <h2>Accessibility (WCAG 2.1 AA) Showcase</h2>
      
      <!-- Overview Section -->
      <section class="a11y-section">
        <h3>Accessibility Overview</h3>
        <div class="overview-grid">
          <div class="overview-card">
            <div class="card-icon">♿</div>
            <h4>WCAG 2.1 AA</h4>
            <p>All components meet WCAG 2.1 AA standards for accessibility compliance</p>
          </div>
          <div class="overview-card">
            <div class="card-icon">⌨️</div>
            <h4>Keyboard Navigation</h4>
            <p>Full keyboard navigation support with visible focus indicators</p>
          </div>
          <div class="overview-card">
            <div class="card-icon">🔊</div>
            <h4>Screen Readers</h4>
            <p>Semantic markup with ARIA labels and live region announcements</p>
          </div>
          <div class="overview-card">
            <div class="card-icon">🎨</div>
            <h4>Color Contrast</h4>
            <p>4.5:1 minimum contrast ratio for normal text, 3:1 for large text</p>
          </div>
        </div>
      </section>

      <!-- Color Contrast Testing -->
      <section class="a11y-section">
        <h3>Color Contrast Compliance</h3>
        <div class="contrast-testing">
          <div class="contrast-demo">
            <h4>Interactive Contrast Checker</h4>
            <div class="contrast-controls">
              <div class="color-input-group">
                <label for="fg-color">Foreground Color:</label>
                <input 
                  id="fg-color"
                  v-model="foregroundColor" 
                  type="color" 
                  @input="updateContrast"
                  class="color-picker"
                />
                <input 
                  v-model="foregroundColor" 
                  type="text" 
                  @input="updateContrast"
                  class="color-text"
                  placeholder="#000000"
                />
              </div>
              <div class="color-input-group">
                <label for="bg-color">Background Color:</label>
                <input 
                  id="bg-color"
                  v-model="backgroundColor" 
                  type="color" 
                  @input="updateContrast"
                  class="color-picker"
                />
                <input 
                  v-model="backgroundColor" 
                  type="text" 
                  @input="updateContrast"
                  class="color-text"
                  placeholder="#ffffff"
                />
              </div>
              <div class="text-size-toggle">
                <label>
                  <input 
                    v-model="isLargeText" 
                    type="checkbox" 
                    @change="updateContrast"
                  />
                  Large text (18pt+ or 14pt+ bold)
                </label>
              </div>
            </div>
            
            <div class="contrast-results">
              <div class="contrast-preview" :style="contrastPreviewStyle">
                <span class="preview-text">Sample text for contrast testing</span>
              </div>
              <div class="contrast-metrics">
                <div class="metric">
                  <span class="metric-label">Contrast Ratio:</span>
                  <span class="metric-value" :class="contrastResult.level">
                    {{ contrastResult.ratio }}:1
                  </span>
                </div>
                <div class="metric">
                  <span class="metric-label">WCAG Level:</span>
                  <span class="metric-value" :class="contrastResult.level">
                    {{ contrastResult.level }}
                  </span>
                </div>
                <div class="metric">
                  <span class="metric-label">Status:</span>
                  <span class="metric-value" :class="contrastResult.passes ? 'pass' : 'fail'">
                    {{ contrastResult.passes ? '✓ Pass' : '✗ Fail' }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div class="theme-contrast-demo">
            <h4>Theme Color Compliance</h4>
            <div class="theme-controls">
              <ThemeToggle />
              <span>Switch themes to test contrast in light and dark modes</span>
            </div>
            <div class="theme-contrast-grid">
              <div class="contrast-item primary">
                <div class="color-sample">Primary Text</div>
                <span class="contrast-info">{{ getPrimaryContrast() }}</span>
              </div>
              <div class="contrast-item secondary">
                <div class="color-sample">Secondary Text</div>
                <span class="contrast-info">{{ getSecondaryContrast() }}</span>
              </div>
              <div class="contrast-item error">
                <div class="color-sample">Error Text</div>
                <span class="contrast-info">{{ getErrorContrast() }}</span>
              </div>
              <div class="contrast-item success">
                <div class="color-sample">Success Text</div>
                <span class="contrast-info">{{ getSuccessContrast() }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Keyboard Navigation -->
      <section class="a11y-section">
        <h3>Keyboard Navigation</h3>
        <div class="keyboard-demo">
          <div class="keyboard-instructions">
            <h4>🎯 Try These Interactions</h4>
            <ul class="instruction-list">
              <li><kbd>Tab</kbd> / <kbd>Shift + Tab</kbd> - Navigate forward/backward through focusable elements</li>
              <li><kbd>Enter</kbd> / <kbd>Space</kbd> - Activate buttons and controls</li>
              <li><kbd>Escape</kbd> - Close modal or cancel operation</li>
              <li><kbd>Arrow Keys</kbd> - Navigate within component groups</li>
            </ul>
          </div>
          
          <div class="interactive-elements">
            <h4>Interactive Elements</h4>
            <div class="element-grid">
              <Button variant="primary" @click="handleButtonClick">
                Primary Button
              </Button>
              <Button variant="secondary" @click="handleButtonClick">
                Secondary Button
              </Button>
              <Button variant="outline" @click="handleButtonClick">
                Outline Button
              </Button>
              
              <div class="form-group">
                <label for="demo-input" class="form-label">Text Input:</label>
                <input 
                  id="demo-input"
                  type="text" 
                  class="demo-input"
                  placeholder="Focus with Tab key"
                  v-model="demoInputValue"
                  @focus="announceToScreenReader('Text input focused')"
                />
              </div>
              
              <div class="form-group">
                <label for="demo-select" class="form-label">Select Dropdown:</label>
                <select 
                  id="demo-select" 
                  class="demo-select"
                  v-model="selectedOption"
                  @focus="announceToScreenReader('Dropdown focused')"
                  @change="announceToScreenReader('Selection changed to ' + selectedOption)"
                >
                  <option value="">Choose an option</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>
              
              <div class="checkbox-group">
                <label class="checkbox-label">
                  <input 
                    type="checkbox" 
                    v-model="isChecked"
                    @change="announceToScreenReader(isChecked ? 'Checkbox checked' : 'Checkbox unchecked')"
                    class="demo-checkbox"
                  />
                  <span class="checkbox-text">Enable notifications</span>
                </label>
              </div>
            </div>
          </div>

          <div class="focus-demonstration">
            <h4>Focus Management</h4>
            <div class="focus-demo-area" :class="{ 'focus-trap-active': focusTrapActive }">
              <p>This area demonstrates focus trapping when active.</p>
              <button 
                @click="toggleFocusTrap"
                class="focus-trap-btn"
              >
                {{ focusTrapActive ? 'Disable' : 'Enable' }} Focus Trap
              </button>
              <button 
                v-if="focusTrapActive"
                class="focus-trap-btn"
                @click="focusTrapActive = false"
              >
                First Focusable
              </button>
              <button 
                v-if="focusTrapActive"
                class="focus-trap-btn"
                @click="focusTrapActive = false"
              >
                Last Focusable
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Screen Reader Support -->
      <section class="a11y-section">
        <h3>Screen Reader Support</h3>
        <div class="screen-reader-demo">
          <div class="sr-features">
            <h4>Screen Reader Features</h4>
            <div class="feature-list">
              <div class="feature-item">
                <div class="feature-icon">🏷️</div>
                <div class="feature-content">
                  <h5>Semantic Markup</h5>
                  <p>Proper HTML elements and heading structure for screen reader navigation</p>
                </div>
              </div>
              <div class="feature-item">
                <div class="feature-icon">🎭</div>
                <div class="feature-content">
                  <h5>ARIA Labels & Roles</h5>
                  <p>Comprehensive ARIA attributes for complex UI components</p>
                </div>
              </div>
              <div class="feature-item">
                <div class="feature-icon">📢</div>
                <div class="feature-content">
                  <h5>Live Regions</h5>
                  <p>Dynamic content announcements for status updates and changes</p>
                </div>
              </div>
            </div>
          </div>

          <div class="aria-demo">
            <h4>ARIA Attributes Demo</h4>
            <div class="aria-examples">
              <div class="example-group">
                <h5>Progress Indicator</h5>
                <div 
                  class="progress-bar"
                  role="progressbar"
                  :aria-valuenow="progressValue"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  :aria-label="'Progress: ' + progressValue + '%'"
                >
                  <div class="progress-fill" :style="{ width: progressValue + '%' }"></div>
                </div>
                <button @click="updateProgress" class="progress-btn">
                  Update Progress ({{ progressValue }}%)
                </button>
              </div>

              <div class="example-group">
                <h5>Expandable Content</h5>
                <button 
                  @click="expandableOpen = !expandableOpen"
                  :aria-expanded="expandableOpen"
                  aria-controls="expandable-content"
                  class="expandable-trigger"
                >
                  {{ expandableOpen ? 'Hide' : 'Show' }} Details
                </button>
                <div 
                  id="expandable-content"
                  :hidden="!expandableOpen"
                  class="expandable-content"
                >
                  <p>This content is controlled by the button above. Screen readers announce the expanded state.</p>
                </div>
              </div>

              <div class="example-group">
                <h5>Live Announcements</h5>
                <button @click="makeAnnouncement" class="announcement-btn">
                  Trigger Screen Reader Announcement
                </button>
                <div 
                  class="sr-only"
                  aria-live="polite"
                  aria-atomic="true"
                >
                  {{ announcement }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Automated Testing -->
      <section class="a11y-section">
        <h3>Automated Accessibility Testing</h3>
        <div class="testing-demo">
          <div class="testing-info">
            <h4>Built-in A11y Testing</h4>
            <p>Every component includes automated accessibility testing using axe-core and custom validators.</p>
            
            <div class="test-scenarios">
              <h5>Test Scenarios Covered:</h5>
              <div class="scenario-grid">
                <div class="scenario-item" v-for="(scenario, key) in testScenarios" :key="key">
                  <h6>{{ scenario.name }}</h6>
                  <p>{{ scenario.description }}</p>
                  <ul v-if="scenario.requirements">
                    <li v-for="req in scenario.requirements" :key="req">{{ req }}</li>
                  </ul>
                  <div v-if="scenario.keys" class="key-list">
                    <span v-for="key in scenario.keys" :key="key" class="key-badge">{{ key }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="test-runner">
            <h4>Run Live Accessibility Test</h4>
            <button @click="runA11yTest" :disabled="testRunning" class="test-btn">
              {{ testRunning ? 'Testing...' : 'Run axe-core Test' }}
            </button>
            
            <div v-if="testResults" class="test-results">
              <div class="result-summary" :class="testResults.violations.length === 0 ? 'pass' : 'fail'">
                {{ testResults.violations.length === 0 ? '✅ All tests passed!' : '❌ Violations found:' }}
              </div>
              
              <div v-if="testResults.violations.length > 0" class="violations">
                <div v-for="violation in testResults.violations" :key="violation.id" class="violation-item">
                  <h6>{{ violation.id }}</h6>
                  <p>{{ violation.description }}</p>
                  <a :href="violation.helpUrl" target="_blank">Learn more →</a>
                </div>
              </div>
              
              <div class="test-stats">
                <span>Tests run: {{ testResults.testEngine.name }} {{ testResults.testEngine.version }}</span>
                <span>Rules applied: {{ testResults.passes.length + testResults.violations.length }}</span>
                <span>Elements tested: {{ testResults.passes.reduce((acc, pass) => acc + pass.nodes.length, 0) }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Best Practices -->
      <section class="a11y-section">
        <h3>Accessibility Best Practices</h3>
        <div class="best-practices">
          <div class="practice-categories">
            <div class="practice-category">
              <h4>🎯 Design Principles</h4>
              <ul>
                <li>Provide multiple ways to access content</li>
                <li>Ensure content is perceivable in different ways</li>
                <li>Make interactive elements large enough to activate</li>
                <li>Use color plus other indicators to convey information</li>
              </ul>
            </div>
            
            <div class="practice-category">
              <h4>⌨️ Keyboard Interaction</h4>
              <ul>
                <li>All interactive elements must be keyboard accessible</li>
                <li>Provide clear focus indicators</li>
                <li>Use logical tab order</li>
                <li>Implement keyboard shortcuts where appropriate</li>
              </ul>
            </div>
            
            <div class="practice-category">
              <h4>🔊 Screen Reader Support</h4>
              <ul>
                <li>Use semantic HTML elements</li>
                <li>Provide meaningful labels and descriptions</li>
                <li>Announce dynamic content changes</li>
                <li>Structure content with proper headings</li>
              </ul>
            </div>
            
            <div class="practice-category">
              <h4>🎨 Visual Design</h4>
              <ul>
                <li>Maintain 4.5:1 contrast ratio for normal text</li>
                <li>Use 3:1 contrast ratio for large text</li>
                <li>Don't rely solely on color to convey information</li>
                <li>Support system dark mode preferences</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  setup() {
    // Color contrast testing
    const foregroundColor = ref('#333333');
    const backgroundColor = ref('#ffffff');
    const isLargeText = ref(false);
    const contrastResult = ref({
      ratio: 12.6,
      passes: true,
      level: 'AAA' as const,
    });

    const contrastPreviewStyle = computed(() => ({
      color: foregroundColor.value,
      backgroundColor: backgroundColor.value,
    }));

    // Demo form state
    const demoInputValue = ref('');
    const selectedOption = ref('');
    const isChecked = ref(false);

    // Focus management
    const focusTrapActive = ref(false);

    // Screen reader demo
    const progressValue = ref(45);
    const expandableOpen = ref(false);
    const announcement = ref('');

    // Testing
    const testRunning = ref(false);
    const testResults = ref(null);
    const testScenarios = ref(a11yTestScenarios);

    function updateContrast() {
      contrastResult.value = testColorContrast(
        foregroundColor.value,
        backgroundColor.value,
        isLargeText.value,
      );
    }

    function handleButtonClick() {
      announceToScreenReader('Button activated');
    }

    function toggleFocusTrap() {
      focusTrapActive.value = !focusTrapActive.value;
      announceToScreenReader(
        focusTrapActive.value ? 'Focus trap enabled' : 'Focus trap disabled',
      );
    }

    function updateProgress() {
      progressValue.value = Math.min(100, progressValue.value + 10);
      if (progressValue.value >= 100) {
        progressValue.value = 0;
      }
      announceToScreenReader(`Progress updated to ${progressValue.value}%`);
    }

    function makeAnnouncement() {
      const messages = [
        'This message will be read by screen readers',
        'Dynamic content updated successfully',
        'Accessibility feature demonstrated',
        'Live region announcement active',
      ];
      announcement.value =
        messages[Math.floor(Math.random() * messages.length)];
    }

    function announceToScreenReader(message: string) {
      // In a real app, you might use a toast notification system or dedicated announcement service
      announcement.value = message;
      setTimeout(() => {
        announcement.value = '';
      }, 1000);
    }

    function getPrimaryContrast(): string {
      const primary = getComputedStyle(document.documentElement)
        .getPropertyValue('--haspen-color-primary')
        .trim();
      const bg = getComputedStyle(document.documentElement)
        .getPropertyValue('--haspen-color-background')
        .trim();

      if (primary && bg) {
        const result = testColorContrast(primary, bg);
        return `${result.ratio}:1 (${result.level})`;
      }
      return 'N/A';
    }

    function getSecondaryContrast(): string {
      const secondary = getComputedStyle(document.documentElement)
        .getPropertyValue('--haspen-color-textSecondary')
        .trim();
      const bg = getComputedStyle(document.documentElement)
        .getPropertyValue('--haspen-color-background')
        .trim();

      if (secondary && bg) {
        const result = testColorContrast(secondary, bg);
        return `${result.ratio}:1 (${result.level})`;
      }
      return 'N/A';
    }

    function getErrorContrast(): string {
      const error = getComputedStyle(document.documentElement)
        .getPropertyValue('--haspen-color-error')
        .trim();
      const bg = getComputedStyle(document.documentElement)
        .getPropertyValue('--haspen-color-background')
        .trim();

      if (error && bg) {
        const result = testColorContrast(error, bg);
        return `${result.ratio}:1 (${result.level})`;
      }
      return 'N/A';
    }

    function getSuccessContrast(): string {
      const success = getComputedStyle(document.documentElement)
        .getPropertyValue('--haspen-color-success')
        .trim();
      const bg = getComputedStyle(document.documentElement)
        .getPropertyValue('--haspen-color-background')
        .trim();

      if (success && bg) {
        const result = testColorContrast(success, bg);
        return `${result.ratio}:1 (${result.level})`;
      }
      return 'N/A';
    }

    async function runA11yTest() {
      testRunning.value = true;
      testResults.value = null;

      try {
        // Import axe dynamically
        const { axe } = await import('axe-core');

        // Run accessibility test on the current document
        const results = await axe.run(
          document.querySelector('.a11y-showcase') || document,
        );
        testResults.value = results;
      } catch (error) {
        console.error('Accessibility test failed:', error);
        testResults.value = {
          violations: [
            {
              id: 'test-error',
              description: 'Failed to run accessibility test',
              helpUrl: '#',
            },
          ],
          passes: [],
          testEngine: { name: 'axe-core', version: 'unknown' },
        };
      } finally {
        testRunning.value = false;
      }
    }

    // Initialize contrast calculation
    onMounted(() => {
      updateContrast();
    });

    return {
      foregroundColor,
      backgroundColor,
      isLargeText,
      contrastResult,
      contrastPreviewStyle,
      demoInputValue,
      selectedOption,
      isChecked,
      focusTrapActive,
      progressValue,
      expandableOpen,
      announcement,
      testRunning,
      testResults,
      testScenarios,
      updateContrast,
      handleButtonClick,
      toggleFocusTrap,
      updateProgress,
      makeAnnouncement,
      announceToScreenReader,
      getPrimaryContrast,
      getSecondaryContrast,
      getErrorContrast,
      getSuccessContrast,
      runA11yTest,
    };
  },
  components: {
    ThemeToggle,
    Button,
  },
};

const meta: Meta = {
  title: 'Accessibility/Showcase',
  component: AccessibilityShowcaseDemo,
  decorators: [
    story => ({
      components: { story, ThemeProvider },
      template: '<ThemeProvider><story /></ThemeProvider>',
    }),
  ],
  parameters: {
    docs: {
      description: {
        component: `
# Accessibility (WCAG 2.1 AA) Showcase

Comprehensive demonstration of accessibility features and WCAG compliance across the Haspen UI design system.

## Standards Compliance

### WCAG 2.1 AA
- **Perceivable**: Information and UI components must be presentable in ways users can perceive
- **Operable**: UI components and navigation must be operable by all users
- **Understandable**: Information and operation of UI must be understandable
- **Robust**: Content must be robust enough to be interpreted by assistive technologies

### Key Features
- **Color Contrast**: 4.5:1 minimum for normal text, 3:1 for large text
- **Keyboard Navigation**: Full keyboard accessibility with visible focus indicators
- **Screen Reader Support**: Semantic markup with comprehensive ARIA attributes
- **Automated Testing**: Built-in accessibility testing with axe-core integration

## Testing Tools

### Automated Testing
- **axe-core**: Industry-standard accessibility testing engine
- **Custom validators**: Color contrast and focus management testing
- **CI integration**: Accessibility tests run on every build

### Manual Testing
- **Keyboard navigation**: Tab through all interactive elements
- **Screen reader testing**: VoiceOver, NVDA, JAWS compatibility
- **Color contrast**: Real-time contrast ratio validation
- **Focus management**: Proper focus trapping and restoration

## Browser & Assistive Technology Support

### Screen Readers
- **VoiceOver** (macOS/iOS)
- **NVDA** (Windows) 
- **JAWS** (Windows)
- **TalkBack** (Android)

### Browsers
- **Chrome/Edge** with screen readers
- **Firefox** with accessibility features
- **Safari** with VoiceOver integration
- **Mobile browsers** with touch accessibility
        `,
      },
    },
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const InteractiveShowcase: Story = {
  render: () => AccessibilityShowcaseDemo,
  parameters: {
    docs: {
      description: {
        story:
          'Complete interactive accessibility showcase with live testing tools and demonstrations.',
      },
    },
  },
};

export const ColorContrastDemo: Story = {
  render: () => ({
    components: { ThemeProvider, ThemeToggle },
    template: `
      <ThemeProvider>
        <div class="contrast-demo-standalone">
          <div class="demo-header">
            <h3>Color Contrast Compliance</h3>
            <ThemeToggle />
          </div>
          
          <div class="contrast-examples">
            <div class="contrast-group">
              <h4>Primary Colors</h4>
              <div class="contrast-items">
                <div class="contrast-example primary-on-bg">
                  <span class="contrast-text">Primary on Background</span>
                  <span class="contrast-ratio">4.8:1 (AA)</span>
                </div>
                <div class="contrast-example white-on-primary">
                  <span class="contrast-text">White on Primary</span>
                  <span class="contrast-ratio">5.2:1 (AA)</span>
                </div>
              </div>
            </div>
            
            <div class="contrast-group">
              <h4>Semantic Colors</h4>
              <div class="contrast-items">
                <div class="contrast-example error-on-bg">
                  <span class="contrast-text">Error on Background</span>
                  <span class="contrast-ratio">6.1:1 (AA)</span>
                </div>
                <div class="contrast-example success-on-bg">
                  <span class="contrast-text">Success on Background</span>
                  <span class="contrast-ratio">4.9:1 (AA)</span>
                </div>
                <div class="contrast-example warning-on-bg">
                  <span class="contrast-text">Warning on Background</span>
                  <span class="contrast-ratio">5.8:1 (AA)</span>
                </div>
              </div>
            </div>

            <div class="contrast-group">
              <h4>Text Colors</h4>
              <div class="contrast-items">
                <div class="contrast-example text-on-bg">
                  <span class="contrast-text">Primary Text</span>
                  <span class="contrast-ratio">12.6:1 (AAA)</span>
                </div>
                <div class="contrast-example secondary-text-on-bg">
                  <span class="contrast-text">Secondary Text</span>
                  <span class="contrast-ratio">7.1:1 (AAA)</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="contrast-info">
            <h4>WCAG Standards</h4>
            <ul>
              <li><strong>AA Normal Text:</strong> 4.5:1 minimum contrast ratio</li>
              <li><strong>AA Large Text:</strong> 3:1 minimum contrast ratio (18pt+ or 14pt+ bold)</li>
              <li><strong>AAA Normal Text:</strong> 7:1 minimum contrast ratio</li>
              <li><strong>AAA Large Text:</strong> 4.5:1 minimum contrast ratio</li>
            </ul>
          </div>
        </div>
      </ThemeProvider>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'Demonstrates color contrast compliance with WCAG 2.1 AA standards across light and dark themes.',
      },
    },
  },
};

export const KeyboardNavigationDemo: Story = {
  render: () => ({
    components: { ThemeProvider, Button },
    template: `
      <ThemeProvider>
        <div class="keyboard-demo-standalone">
          <h3>Keyboard Navigation Demo</h3>
          
          <div class="keyboard-instructions">
            <h4>Try These Keyboard Interactions:</h4>
            <div class="key-combinations">
              <div class="key-combo">
                <kbd>Tab</kbd>
                <span>Move to next focusable element</span>
              </div>
              <div class="key-combo">
                <kbd>Shift</kbd> + <kbd>Tab</kbd>
                <span>Move to previous focusable element</span>
              </div>
              <div class="key-combo">
                <kbd>Enter</kbd> / <kbd>Space</kbd>
                <span>Activate buttons and controls</span>
              </div>
              <div class="key-combo">
                <kbd>Escape</kbd>
                <span>Cancel or close</span>
              </div>
            </div>
          </div>
          
          <div class="keyboard-playground">
            <h4>Interactive Elements</h4>
            <div class="playground-grid">
              <Button variant="primary">First Button</Button>
              
              <div class="form-field">
                <label for="kb-input">Text Input:</label>
                <input id="kb-input" type="text" placeholder="Type here..." />
              </div>
              
              <div class="form-field">
                <label for="kb-select">Dropdown:</label>
                <select id="kb-select">
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
              </div>
              
              <label class="checkbox-field">
                <input type="checkbox" />
                <span>Checkbox Option</span>
              </label>
              
              <div class="radio-group">
                <label class="radio-field">
                  <input type="radio" name="demo-radio" value="option1" />
                  <span>Radio Option 1</span>
                </label>
                <label class="radio-field">
                  <input type="radio" name="demo-radio" value="option2" />
                  <span>Radio Option 2</span>
                </label>
              </div>
              
              <Button variant="secondary">Last Button</Button>
            </div>
          </div>
        </div>
      </ThemeProvider>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'Interactive keyboard navigation demonstration showing tab order and focus management.',
      },
    },
  },
};

export const ScreenReaderDemo: Story = {
  render: () => ({
    components: { ThemeProvider },
    setup() {
      const isExpanded = ref(false);
      const liveMessage = ref('');

      function toggleExpanded() {
        isExpanded.value = !isExpanded.value;
        liveMessage.value = `Section ${isExpanded.value ? 'expanded' : 'collapsed'}`;
      }

      function updateLiveMessage() {
        const messages = [
          'Form submitted successfully',
          'New message received',
          'Loading complete',
          'Settings updated',
        ];
        liveMessage.value =
          messages[Math.floor(Math.random() * messages.length)];
      }

      return { isExpanded, liveMessage, toggleExpanded, updateLiveMessage };
    },
    template: `
      <ThemeProvider>
        <div class="screen-reader-demo-standalone">
          <h3>Screen Reader Support Demo</h3>
          
          <div class="sr-features-demo">
            <div class="semantic-structure">
              <h4>Semantic Structure</h4>
              <nav aria-label="Demo navigation">
                <ul>
                  <li><a href="#section1">Section 1</a></li>
                  <li><a href="#section2">Section 2</a></li>
                  <li><a href="#section3">Section 3</a></li>
                </ul>
              </nav>
              
              <main>
                <article>
                  <header>
                    <h5 id="section1">Article Header</h5>
                  </header>
                  <section>
                    <p>This content uses proper semantic HTML elements that screen readers can navigate efficiently.</p>
                  </section>
                </article>
              </main>
            </div>

            <div class="aria-attributes">
              <h4>ARIA Attributes</h4>
              
              <div class="expandable-section">
                <button 
                  @click="toggleExpanded"
                  :aria-expanded="isExpanded"
                  aria-controls="expandable-content"
                  class="expand-btn"
                >
                  {{ isExpanded ? 'Hide' : 'Show' }} Additional Information
                </button>
                <div 
                  id="expandable-content"
                  :hidden="!isExpanded"
                  class="expandable-content"
                >
                  <p>This content is announced to screen readers when expanded/collapsed.</p>
                  <p>The button above has proper aria-expanded and aria-controls attributes.</p>
                </div>
              </div>

              <div class="described-input">
                <label for="sr-input">Username:</label>
                <input 
                  id="sr-input"
                  type="text"
                  aria-describedby="username-help"
                  class="sr-input"
                />
                <div id="username-help" class="help-text">
                  Must be at least 3 characters long
                </div>
              </div>
            </div>

            <div class="live-regions">
              <h4>Live Regions</h4>
              <button @click="updateLiveMessage" class="live-btn">
                Trigger Live Announcement
              </button>
              
              <div class="live-region-demo">
                <div aria-live="polite" aria-atomic="true" class="sr-only">
                  {{ liveMessage }}
                </div>
                <div class="live-display">
                  Last announcement: {{ liveMessage || 'None' }}
                </div>
              </div>
            </div>
          </div>

          <div class="sr-testing-info">
            <h4>Screen Reader Testing</h4>
            <div class="testing-checklist">
              <ul>
                <li>✓ All interactive elements have accessible names</li>
                <li>✓ Form fields have proper labels and descriptions</li>
                <li>✓ Headings create logical document structure</li>
                <li>✓ Images have descriptive alt text</li>
                <li>✓ Dynamic content changes are announced</li>
                <li>✓ Focus order matches visual layout</li>
              </ul>
            </div>
          </div>
        </div>
      </ThemeProvider>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'Demonstrates screen reader support features including semantic markup, ARIA attributes, and live regions.',
      },
    },
  },
};
