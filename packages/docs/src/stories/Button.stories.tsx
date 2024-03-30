import type { Meta, StoryObj } from '@storybook/react'

import { Button, ButtonProps } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'

// config global do button
const meta = {
  title: 'Form/Button',
  component: Button,

  args: {
    children: 'Send',
  },
  argTypes: {
    onClick: { action: 'clicked' },
  },
} satisfies Meta<ButtonProps>

export default meta
type Story = StoryObj<ButtonProps>

export const Primary: Story = {}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Create new',
  },
}

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    children: 'Cancel',
  },
}

export const Small: Story = {
  args: {
    size: 'sm',
  },
}

export const WithIcon: Story = {
  args: {
    children: (
      <>
        Próximo Passo
        <ArrowRight weight="bold" />
      </>
    ),
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
