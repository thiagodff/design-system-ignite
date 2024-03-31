import type { Meta, StoryObj } from '@storybook/react'

import { Text, TextProps } from '@ignite-ui/react'

// config global do button
const meta = {
  title: 'Typography/Text',
  component: Text,

  args: {
    size: 'md',
    children:
      'loren ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} satisfies Meta<TextProps>

export default meta
type Story = StoryObj<TextProps>

export const Primary: Story = {}

export const CustomTag: Story = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
