import { styled } from '../styles'
import { ComponentProps, ElementType } from 'react'

export const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$ignite300',
  borderRadius: '$sm',
  border: 'none',
  fontWeight: '$bold',
  color: '$white',

  variants: {
    size: {
      small: {
        fontSize: '$sm',
        padding: '$2 $4',
      },
      big: {
        fontSize: '$lg',
        padding: '$3 $6',
      },
    },
  },

  defaultVariants: {
    size: 'small',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}
