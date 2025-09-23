import { describe, it, expect, beforeEach, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { nextTick } from 'vue';
import { ThemeToggle } from './index';

// Mock the theme composable
const mockToggleMode = vi.fn();
const mockIsDark = vi.ref(false);

vi.mock('@haspen-ui/composables', () => ({
  useTheme: () => ({
    isDark: mockIsDark,
    toggleMode: mockToggleMode,
  }),
}));

describe('ThemeToggle', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockIsDark.value = false;
  });

  describe('Rendering', () => {
    it('renders with default props', () => {
      const wrapper = mount(ThemeToggle);
      
      expect(wrapper.find('.theme-toggle').exists()).toBe(true);
      expect(wrapper.find('.theme-toggle--default').exists()).toBe(true);
      expect(wrapper.find('.theme-toggle--md').exists()).toBe(true);
    });

    it('renders with custom variant and size', () => {
      const wrapper = mount(ThemeToggle, {
        props: {
          variant: 'outline',
          size: 'lg',
        },
      });
      
      expect(wrapper.find('.theme-toggle--outline').exists()).toBe(true);
      expect(wrapper.find('.theme-toggle--lg').exists()).toBe(true);
    });

    it('renders with label when showLabel is true', () => {
      const wrapper = mount(ThemeToggle, {
        props: {
          showLabel: true,
        },
      });
      
      expect(wrapper.find('.theme-toggle__label').exists()).toBe(true);
      expect(wrapper.find('.theme-toggle__label').text()).toBe('Light mode');
    });

    it('renders custom labels', () => {
      const wrapper = mount(ThemeToggle, {
        props: {
          showLabel: true,
          lightLabel: 'Day Mode',
          darkLabel: 'Night Mode',
        },
      });
      
      expect(wrapper.find('.theme-toggle__label').text()).toBe('Day Mode');
    });

    it('shows dark label when theme is dark', async () => {
      mockIsDark.value = true;
      
      const wrapper = mount(ThemeToggle, {
        props: {
          showLabel: true,
          lightLabel: 'Day Mode',
          darkLabel: 'Night Mode',
        },
      });
      
      await nextTick();
      expect(wrapper.find('.theme-toggle__label').text()).toBe('Night Mode');
    });
  });

  describe('States', () => {
    it('applies disabled class when disabled', () => {
      const wrapper = mount(ThemeToggle, {
        props: {
          disabled: true,
        },
      });
      
      expect(wrapper.find('.theme-toggle--disabled').exists()).toBe(true);
      expect(wrapper.find('button').attributes('disabled')).toBeDefined();
    });

    it('applies loading class when loading', async () => {
      const wrapper = mount(ThemeToggle);
      
      // Trigger toggle to start loading
      await wrapper.find('button').trigger('click');
      await nextTick();
      
      expect(wrapper.find('.theme-toggle--loading').exists()).toBe(true);
    });
  });

  describe('Accessibility', () => {
    it('has proper ARIA attributes', () => {
      const wrapper = mount(ThemeToggle);
      const button = wrapper.find('button');
      
      expect(button.attributes('type')).toBe('button');
      expect(button.attributes('aria-label')).toBe('Switch to dark mode');
      expect(button.attributes('aria-pressed')).toBe('false');
    });

    it('updates aria-pressed based on theme state', async () => {
      const wrapper = mount(ThemeToggle);
      
      // Initially light mode
      expect(wrapper.find('button').attributes('aria-pressed')).toBe('false');
      
      // Switch to dark mode
      mockIsDark.value = true;
      await nextTick();
      
      expect(wrapper.find('button').attributes('aria-pressed')).toBe('true');
    });

    it('uses custom aria label', () => {
      const wrapper = mount(ThemeToggle, {
        props: {
          ariaLabel: 'Custom theme toggle',
        },
      });
      
      expect(wrapper.find('button').attributes('aria-label')).toBe('Custom theme toggle');
    });

    it('updates aria label based on current mode', async () => {
      const wrapper = mount(ThemeToggle);
      
      // Initially light mode
      expect(wrapper.find('button').attributes('aria-label')).toBe('Switch to dark mode');
      
      // Switch to dark mode
      mockIsDark.value = true;
      await nextTick();
      
      expect(wrapper.find('button').attributes('aria-label')).toBe('Switch to light mode');
    });
  });

  describe('Theme Integration', () => {
    it('calls toggleMode when clicked', async () => {
      const wrapper = mount(ThemeToggle);
      
      await wrapper.find('button').trigger('click');
      
      expect(mockToggleMode).toHaveBeenCalledOnce();
    });

    it('does not call toggleMode when disabled', async () => {
      const wrapper = mount(ThemeToggle, {
        props: {
          disabled: true,
        },
      });
      
      await wrapper.find('button').trigger('click');
      
      expect(mockToggleMode).not.toHaveBeenCalled();
    });

    it('does not call toggleMode when loading', async () => {
      const wrapper = mount(ThemeToggle);
      
      // Start first toggle (will set loading state)
      await wrapper.find('button').trigger('click');
      
      // Try to click again while loading
      await wrapper.find('button').trigger('click');
      
      // Should only be called once
      expect(mockToggleMode).toHaveBeenCalledTimes(1);
    });
  });

  describe('Events', () => {
    it('emits toggle event with current state', async () => {
      const wrapper = mount(ThemeToggle);
      
      await wrapper.find('button').trigger('click');
      
      // Wait for loading delay
      await new Promise(resolve => setTimeout(resolve, 200));
      await nextTick();
      
      const toggleEvents = wrapper.emitted('toggle');
      expect(toggleEvents).toBeTruthy();
      expect(toggleEvents?.[0]).toEqual([false]); // isDark value
    });

    it('emits change event with mode', async () => {
      const wrapper = mount(ThemeToggle);
      
      await wrapper.find('button').trigger('click');
      
      // Wait for loading delay
      await new Promise(resolve => setTimeout(resolve, 200));
      await nextTick();
      
      const changeEvents = wrapper.emitted('change');
      expect(changeEvents).toBeTruthy();
      expect(changeEvents?.[0]).toEqual(['light']); // mode value
    });
  });

  describe('Icons', () => {
    it('shows sun icon in light mode', () => {
      mockIsDark.value = false;
      const wrapper = mount(ThemeToggle);
      
      expect(wrapper.find('.theme-toggle__icon--sun').exists()).toBe(true);
      expect(wrapper.find('.theme-toggle__icon--moon').exists()).toBe(false);
    });

    it('shows moon icon in dark mode', async () => {
      mockIsDark.value = true;
      const wrapper = mount(ThemeToggle);
      
      await nextTick();
      
      expect(wrapper.find('.theme-toggle__icon--moon').exists()).toBe(true);
      expect(wrapper.find('.theme-toggle__icon--sun').exists()).toBe(false);
    });
  });

  describe('Thumb Position', () => {
    it('positions thumb correctly for light mode', () => {
      mockIsDark.value = false;
      const wrapper = mount(ThemeToggle, {
        props: {
          size: 'md',
        },
      });
      
      const thumb = wrapper.find('.theme-toggle__thumb');
      expect(thumb.attributes('style')).toContain('transform: translateX(0px)');
    });

    it('positions thumb correctly for dark mode', async () => {
      mockIsDark.value = true;
      const wrapper = mount(ThemeToggle, {
        props: {
          size: 'md',
        },
      });
      
      await nextTick();
      
      const thumb = wrapper.find('.theme-toggle__thumb');
      expect(thumb.attributes('style')).toContain('transform: translateX(24px)');
    });

    it('adjusts thumb position for different sizes', async () => {
      mockIsDark.value = true;
      
      const smallWrapper = mount(ThemeToggle, { props: { size: 'sm' } });
      const largeWrapper = mount(ThemeToggle, { props: { size: 'lg' } });
      
      await nextTick();
      
      expect(smallWrapper.find('.theme-toggle__thumb').attributes('style')).toContain('translateX(20px)');
      expect(largeWrapper.find('.theme-toggle__thumb').attributes('style')).toContain('translateX(28px)');
    });
  });
});