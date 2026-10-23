import type { CheckoutKey } from '../config/links'
import { CtaButton } from './CtaButton'
import { Icon } from './Icon'

interface CourseCardProps {
  variant: 'at' | 'crise'
  checkout: CheckoutKey
  tag: string
  title: string
  price: string
  dateLabel: string
  schedule: string[]
  topics: string[]
  cta: string
}

export function CourseCard({ variant, checkout, tag, title, price, dateLabel, schedule, topics, cta }: CourseCardProps) {
  return (
    <article className={`course course--${variant}`}>
      <div className="course__top">
        <span className="course__tag">
          <Icon name="calendar" size={16} />
          {tag}
        </span>
        <h3>{title}</h3>
        <p className="course__price">
          Por <strong>{price}</strong>
        </p>
      </div>

      <div className="course__body">
        <div className="course__when">
          <p>
            <Icon name="calendar" size={18} />
            <span>{dateLabel}</span>
          </p>
          <p>
            <Icon name="clock" size={18} />
            <span>{schedule.join(' · ')}</span>
          </p>
        </div>

        <h4>O que você vai ver</h4>
        <ul className="checklist">
          {topics.map((topic) => (
            <li key={topic}>
              <span className="checklist__icon">
                <Icon name="check" size={14} />
              </span>
              {topic}
            </li>
          ))}
        </ul>

        <CtaButton checkout={checkout} location={`curso-${variant}`} variant="secondary" block>
          {cta}
        </CtaButton>
      </div>
    </article>
  )
}
