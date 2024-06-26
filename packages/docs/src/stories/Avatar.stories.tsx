import type { Meta, StoryObj } from '@storybook/react'

import { Avatar, AvatarProps } from '@thiagod-ui/react'

// config global do button
const meta = {
  title: 'Data display/Avatar',
  component: Avatar,

  args: {
    src: 'https://github.com/thiagodff.png',
    alt: 'Thiago Dornelles',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<AvatarProps>

export default meta
type Story = StoryObj<AvatarProps>

export const Primary: Story = {}

export const WithFallback: Story = {
  args: {
    src: undefined,
  },
}
