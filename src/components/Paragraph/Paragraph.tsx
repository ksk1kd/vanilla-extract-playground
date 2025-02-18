import { variant } from './style.css'

interface ParagraphProps {
  children: React.ReactNode
  fontSize?: 'small' | 'medium' | 'large'
}

export function Paragraph({ children, fontSize = 'small' }: ParagraphProps) {
  return <p className={variant[fontSize]}>{children}</p>
}
