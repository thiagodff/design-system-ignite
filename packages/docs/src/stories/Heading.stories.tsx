import type { Meta, StoryObj } from '@storybook/react'

import { Heading, HeadingProps } from '@thiagod-ui/react'

// config global do button
const meta = {
  title: 'Typography/Heading',
  component: Heading,

  args: {
    children: 'Custom title',
    size: 'md',
    as: 'h1',
  },
  argTypes: {
    as: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'inline-radio',
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
