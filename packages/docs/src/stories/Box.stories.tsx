import type { Meta, StoryObj } from '@storybook/react'

import { Box, BoxProps, Text } from '@thiagod-ui/react'

// config global do button
const meta = {
  title: 'Form/Box',
  component: Box,

  args: {
    children: <Text>Testando elemento Box</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} satisfies Meta<BoxProps>

export default meta
type Story = StoryObj<BoxProps>

export const Primary: Story = {}
