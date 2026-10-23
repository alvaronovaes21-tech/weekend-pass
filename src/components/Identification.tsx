import { painPoints } from '../data/content'
import { Icon } from './Icon'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Identification() {
  return (
    <section className="section" aria-labelledby="identificacao-title">
      <div className="container">
        <SectionHeading
          eyebrow="Faz sentido para você?"
          id="identificacao-title"
          title="Você sabe a teoria, mas quer desenvolver mais segurança para aplicá-la na prática?"
        />

        <ul className="pain-grid">
          {painPoints.map((item, i) => (
            <li key={item.text}>
              <Reveal delay={i * 60} className="card pain-card">
                <span className="icon-badge">
                  <Icon name={item.icon} size={24} />
                </span>
                <p>{item.text}</p>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal className="callout">
          <p>
            O Weekend Pass foi estruturado para aproximar <strong>conhecimento técnico</strong>,{' '}
            <strong>discussão de casos</strong> e <strong>raciocínio prático</strong>, ajudando você a ampliar sua
            compreensão e a refletir sobre a atuação com mais clareza.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
