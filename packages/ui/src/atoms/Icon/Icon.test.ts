import { describe, it, expect, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import { nextTick } from 'vue';
import Icon from './Icon.vue';
import IconProvider from './IconProvider.vue';
import { testComponentAccessibility, configureHaspenAxe } from '../../test-utils/accessibility';
import { haspenIcons } from './libraries';

// Configure axe for tests
configureHaspenAxe();

// Mock icon component for testing
const MockIcon = {
  name: 'MockIcon',
  props: ['size', 'aria-hidden', 'aria-label'],
  template: '<svg :width="size" :height="size"><circle /></svg>',
};

describe('Icon', () => {
  beforeEach(() => {
    // Reset any global state
    document.documentElement.className = '';
  });

  describe('Accessibility', () => {
    it('meets WCAG 2.1 AA accessibility standards', async () => {
      const wrapper = mount(IconProvider, {
        props: {
          icons: { 'test-icon': MockIcon },
        },
        slots: {
          default: () => mount(Icon, {
            props: {
              name: 'test-icon',
              size: 24,
            },
          }),
        },
      });

      await nextTick();

      await testComponentAccessibility(wrapper.element as HTMLElement, {
        componentName: 'Icon',
        testContrast: false, // Skip color contrast for SVG icons
      });
    });

    it('has proper ARIA attributes by default', () => {
      const wrapper = mount(IconProvider, {
        props: {
          icons: { 'test-icon': MockIcon },
        },
        slots: {
          default: () => mount(Icon, {
            props: {
              name: 'test-icon',
            },
          }),
        },
      });

      const icon = wrapper.findComponent(MockIcon);
      expect(icon.props('aria-hidden')).toBe(true);
    });

    it('supports semantic icons with aria-label', () => {
      const wrapper = mount(IconProvider, {
        props: {
          icons: { 'test-icon': MockIcon },
        },
        slots: {
          default: () => mount(Icon, {
            props: {
              name: 'test-icon',
              'aria-hidden': false,
              'aria-label': 'Test icon',
            },
          }),
        },
      });

      const icon = wrapper.findComponent(MockIcon);
      expect(icon.props('aria-hidden')).toBe(false);
      expect(icon.props('aria-label')).toBe('Test icon');
    });
  });

  describe('Custom Icons', () => {
    it('renders custom icons from provider', () => {
      const wrapper = mount(IconProvider, {
        props: {
          library: 'custom',
          icons: { 'test-icon': MockIcon },
        },
        slots: {
          default: () => mount(Icon, {
            props: {
              name: 'test-icon',
              size: 24,
            },
          }),
        },
      });

      const icon = wrapper.findComponent(MockIcon);
      expect(icon.exists()).toBe(true);
      expect(icon.props('size')).toBe(24);
    });

    it('renders built-in icons', () => {
      const wrapper = mount(IconProvider, {
        props: {
          library: 'custom',
          icons: haspenIcons,
        },
        slots: {
          default: () => mount(Icon, {
            props: {
              name: 'sun',
              size: 20,
            },
          }),
        },
      });

      // Should render SunIcon component
      expect(wrapper.html()).toContain('sun-icon');
    });

    it('warns when icon not found', () => {
      const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

      mount(IconProvider, {
        props: {
          library: 'custom',
          icons: {},
        },
        slots: {
          default: () => mount(Icon, {
            props: {
              name: 'nonexistent',
            },
          }),
        },
      });

      expect(consoleSpy).toHaveBeenCalledWith(
        'Icon "nonexistent" not found in custom library'
      );

      consoleSpy.mockRestore();
    });
  });

  describe('Provider Integration', () => {
    it('uses configuration from provider', () => {
      const wrapper = mount(IconProvider, {
        props: {
          library: 'custom',
          prefix: 'test-prefix',
          icons: { 'test-icon': MockIcon },
        },
        slots: {
          default: () => mount(Icon, {
            props: {
              name: 'test-icon',
            },
          }),
        },
      });

      const iconWrapper = wrapper.findComponent(Icon);
      expect(iconWrapper.classes()).toContain('test-prefix-test-icon');
    });

    it('allows library override per icon', () => {
      const wrapper = mount(IconProvider, {
        props: {
          library: 'heroicons',
          icons: { 'custom-icon': MockIcon },
        },
        slots: {
          default: () => mount(Icon, {
            props: {
              name: 'custom-icon',
              library: 'custom',
            },
          }),
        },
      });

      // Should render custom icon despite provider being heroicons
      const icon = wrapper.findComponent(MockIcon);
      expect(icon.exists()).toBe(true);
    });

    it('works without provider (uses defaults)', () => {
      const wrapper = mount(Icon, {
        props: {
          name: 'test',
        },
      });

      expect(wrapper.exists()).toBe(true);
    });
  });

  describe('CSS Classes', () => {
    it('applies base icon classes', () => {
      const wrapper = mount(IconProvider, {
        props: {
          icons: { 'test-icon': MockIcon },
        },
        slots: {
          default: () => mount(Icon, {
            props: {
              name: 'test-icon',
            },
          }),
        },
      });

      const iconWrapper = wrapper.findComponent(Icon);
      expect(iconWrapper.classes()).toContain('haspen-icon');
      expect(iconWrapper.classes()).toContain('haspen-icon--test-icon');
    });

    it('applies prefix classes when configured', () => {
      const wrapper = mount(IconProvider, {
        props: {
          prefix: 'my-prefix',
          icons: { 'test-icon': MockIcon },
        },
        slots: {
          default: () => mount(Icon, {
            props: {
              name: 'test-icon',
            },
          }),
        },
      });

      const iconWrapper = wrapper.findComponent(Icon);
      expect(iconWrapper.classes()).toContain('my-prefix-test-icon');
    });

    it('applies library-specific classes', () => {
      const wrapper = mount(IconProvider, {
        props: {
          library: 'heroicons',
        },
        slots: {
          default: () => mount(Icon, {
            props: {
              name: 'sun',
            },
          }),
        },
      });

      const iconWrapper = wrapper.findComponent(Icon);
      expect(iconWrapper.classes()).toContain('haspen-icon--heroicons');
    });
  });

  describe('Props', () => {
    it('passes through size prop', () => {
      const wrapper = mount(IconProvider, {
        props: {
          icons: { 'test-icon': MockIcon },
        },
        slots: {
          default: () => mount(Icon, {
            props: {
              name: 'test-icon',
              size: 32,
            },
          }),
        },
      });

      const icon = wrapper.findComponent(MockIcon);
      expect(icon.props('size')).toBe(32);
    });

    it('uses default size when not specified', () => {
      const wrapper = mount(IconProvider, {
        props: {
          icons: { 'test-icon': MockIcon },
        },
        slots: {
          default: () => mount(Icon, {
            props: {
              name: 'test-icon',
            },
          }),
        },
      });

      const icon = wrapper.findComponent(MockIcon);
      expect(icon.props('size')).toBe(16);
    });

    it('passes through accessibility props', () => {
      const wrapper = mount(IconProvider, {
        props: {
          icons: { 'test-icon': MockIcon },
        },
        slots: {
          default: () => mount(Icon, {
            props: {
              name: 'test-icon',
              'aria-hidden': false,
              'aria-label': 'Custom label',
            },
          }),
        },
      });

      const icon = wrapper.findComponent(MockIcon);
      expect(icon.props('aria-hidden')).toBe(false);
      expect(icon.props('aria-label')).toBe('Custom label');
    });
  });
});