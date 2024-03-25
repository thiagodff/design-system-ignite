import type { Meta, StoryObj } from '@storybook/react'

import { Box, BoxProps } from '@ignite-ui/react'

// config global do button
const meta = {
  title: 'Form/Box',
  component: Box,

  args: {
    children: (
      <>
        <span>Testando elemento Box</span>
      </>
    ),
  },
} satisfies Meta<BoxProps>

export default meta
type Story = StoryObj<BoxProps>

export const Primary: Story = {}
