import type { Meta, StoryObj } from '@storybook/react'

import { Box, Text, TextArea, TextAreaProps } from '@ignite-ui/react'

// config global do button
const meta = {
  title: 'Form/Text Area',
  component: TextArea,

  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Observations</Text>
          <Story />
        </Box>
      )
    },
  ],
} satisfies Meta<TextAreaProps>

export default meta
type Story = StoryObj<TextAreaProps>

export const Primary: Story = {
  args: {
    placeholder: 'Tell us more about your experience',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
