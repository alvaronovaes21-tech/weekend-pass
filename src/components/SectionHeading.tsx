import type { ReactNode } from 'react'

interface SectionHeadingProps {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  id?: string
  align?: 'center' | 'left'
  tone?: 'default' | 'light'
}

export function SectionHeading({ eyebrow, title, description, id, align = 'center', tone = 'default' }: SectionHeadingProps) {
  return (
    <header className={`section-heading section-heading--${align} section-heading--${tone}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 id={id}>{title}</h2>
      {description && <p className="section-heading__desc">{description}</p>}
    </header>
  )
}
