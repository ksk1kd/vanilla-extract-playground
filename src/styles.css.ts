import { globalStyle, style } from '@vanilla-extract/css'

globalStyle('html', {
  boxSizing: 'border-box',
  vars: {
    '--font-size--small': '1rem',
    '--font-size--medium': '2rem',
    '--font-size--large': '3rem',
  },
})

export const title = style({
  fontSize: '4rem',
})

export const subtitle = style({
  fontSize: 'var(--font-size--large)',
})

export const link = style({
  color: 'blue',
  ':hover': {
    opacity: 0.6,
    textDecoration: 'underline',
  },
})
