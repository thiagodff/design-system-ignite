import type { Meta, StoryObj } from '@storybook/react'

import { Box, Text, TextInput, TextInputProps } from '@ignite-ui/react'

// config global do button
const meta = {
  title: 'Form/Text Input',
  component: TextInput,

  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">E-mail address</Text>
          <Story />
        </Box>
      )
    },
  ],
} satisfies Meta<TextInputProps>

export default meta
type Story = StoryObj<TextInputProps>

export const Primary: Story = {
  args: {
    placeholder: 'Type your e-mail',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const WithPrefix: Story = {
  args: {
    prefix: 'quin.to/',
  },
}
