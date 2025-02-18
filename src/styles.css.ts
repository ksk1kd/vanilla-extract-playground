import { globalStyle, style } from '@vanilla-extract/css'

globalStyle('html', {
  boxSizing: 'border-box',
})

export const title = style({
  fontSize: '4rem',
})
