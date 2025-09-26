import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import IconProvider from './IconProvider.vue';
import { createApp } from 'vue';

describe('IconProvider', () => {
  it('renders correctly with slot content', () => {
    const wrapper = mount(IconProvider, {
      slots: {
        default: '<div data-testid="child">Child content</div>',
      },
    });
    
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('[data-testid="child"]').exists()).toBe(true);
    expect(wrapper.text()).toContain('Child content');
  });

  it('provides icon configuration to child components', () => {
    const childComponent = {
      template: '<div>{{ iconConfig?.library || "no config" }}</div>',
      inject: ['iconConfig'],
    };

    const wrapper = mount(IconProvider, {
      props: {
        library: 'lucide',
        defaultSize: 20,
      },
      slots: {
        default: childComponent,
      },
    });

    expect(wrapper.text()).toContain('lucide');
  });

  it('applies default props correctly', () => {
    const wrapper = mount(IconProvider);
    
    // IconProvider should exist and render without errors
    expect(wrapper.exists()).toBe(true);
  });

  it('passes library prop to provide', () => {
    const library = 'heroicons';
    const childComponent = {
      template: '<div>{{ iconConfig?.library }}</div>',
      inject: ['iconConfig'],
    };

    const wrapper = mount(IconProvider, {
      props: { library },
      slots: {
        default: childComponent,
      },
    });

    expect(wrapper.text()).toBe(library);
  });

  it('passes defaultSize prop to provide', () => {
    const defaultSize = 24;
    const childComponent = {
      template: '<div>{{ iconConfig?.defaultSize }}</div>',
      inject: ['iconConfig'],
    };

    const wrapper = mount(IconProvider, {
      props: { defaultSize },
      slots: {
        default: childComponent,
      },
    });

    expect(wrapper.text()).toBe(String(defaultSize));
  });

  it('handles multiple nested providers correctly', () => {
    const innerChild = {
      template: '<div>{{ iconConfig?.library }}</div>',
      inject: ['iconConfig'],
    };

    const outerProvider = mount(IconProvider, {
      props: { library: 'lucide' },
      slots: {
        default: {
          components: { IconProvider },
          template: `
            <IconProvider library="heroicons">
              <inner-child />
            </IconProvider>
          `,
          components: { 'inner-child': innerChild, IconProvider },
        },
      },
    });

    // Inner provider should override outer provider
    expect(outerProvider.text()).toBe('heroicons');
  });
});