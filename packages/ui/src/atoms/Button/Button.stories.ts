import type { Meta, StoryObj } from '@storybook/vue3';
import Button from './Button.vue';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: 'boolean',
    },
  },
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    default: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    default: 'Secondary Button',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    default: 'Outline Button',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    default: 'Ghost Button',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    default: 'Small Button',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    default: 'Large Button',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    default: 'Disabled Button',
  },
};
