import { style, styleVariants } from '@vanilla-extract/css'

const base = style({ lineHeight: 1.2 })

const fontSizes = {
  small: 'var(--font-size--small)',
  medium: 'var(--font-size--medium)',
  large: 'var(--font-size--large)',
}

export const variant = styleVariants(fontSizes, (fontSize) => [
  base,
  { fontSize },
])
