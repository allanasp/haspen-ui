import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from './Button.vue'

describe('Button', () => {
  it('renders properly', () => {
    const wrapper = mount(Button, {
      slots: {
        default: 'Click me'
      }
    })
    expect(wrapper.text()).toBe('Click me')
  })

  it('applies variant class', () => {
    const wrapper = mount(Button, {
      props: {
        variant: 'secondary'
      }
    })
    expect(wrapper.classes()).toContain('haspen-button--secondary')
  })

  it('applies size class', () => {
    const wrapper = mount(Button, {
      props: {
        size: 'lg'
      }
    })
    expect(wrapper.classes()).toContain('haspen-button--lg')
  })

  it('shows loader when loading', () => {
    const wrapper = mount(Button, {
      props: {
        loading: true
      }
    })
    expect(wrapper.find('.haspen-button__loader').exists()).toBe(true)
  })

  it('is disabled when disabled prop is true', () => {
    const wrapper = mount(Button, {
      props: {
        disabled: true
      }
    })
    expect(wrapper.attributes('disabled')).toBeDefined()
  })
}) 