import { audience } from '../data/content'
import { Icon } from './Icon'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Audience() {
  return (
    <section className="section" aria-labelledby="publico-title">
      <div className="container">
        <SectionHeading eyebrow="Público" id="publico-title" title="Para quem é o evento?" />

        <ul className="audience-grid">
          {audience.map((item, i) => (
            <li key={item.title}>
              <Reveal delay={(i % 3) * 70} className="card audience-card">
                <span className="icon-badge">
                  <Icon name={item.icon} size={24} />
                </span>
                <p>{item.title}</p>
              </Reveal>
            </li>
          ))}
        </ul>

        <p className="note note--center">
          <Icon name="info" size={18} />
          <span>
            A aplicação das estratégias deve respeitar a formação, a competência profissional, as necessidades
            individuais e os limites éticos de cada atuação.
          </span>
        </p>
      </div>
    </section>
  )
}
