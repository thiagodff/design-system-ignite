import type { Meta, StoryObj } from '@storybook/react'

import { Button, ButtonProps } from '@ignite-ui/react'

// config global do button
const meta = {
  title: 'Form/Button',
  component: Button,

  args: {
    children: 'Enviar',
  },
} satisfies Meta<ButtonProps>

export default meta
type Story = StoryObj<ButtonProps>

export const Small: Story = {}

export const Big: Story = {
  args: {
    size: 'big',
  },
}
