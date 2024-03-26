import type { Meta, StoryObj } from '@storybook/react'

import { Heading, HeadingProps } from '@ignite-ui/react'

// config global do button
const meta = {
  title: 'Typography/Heading',
  component: Heading,

  args: {
    children: 'Custom title',
  },

  argTypes: {
    as: {
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'h2' },
      },
    },
  },
} satisfies Meta<HeadingProps>

export default meta
type Story = StoryObj<HeadingProps>

export const Primary: Story = {}

export const CustomTag: Story = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o heading sempre será um `h2`, mas podemos alterar isso com a propriedade `as`.',
      },
    },
  },
}
