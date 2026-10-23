import { journey } from '../data/content'
import { CtaButton } from './CtaButton'
import { Icon } from './Icon'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function ComboSpecial() {
  return (
    <section className="section" aria-labelledby="combo-title">
      <div className="container">
        <SectionHeading
          eyebrow="Por que o combo?"
          id="combo-title"
          title="Dois encontros complementares. Uma visão mais integrada da intervenção."
        />

        <div className="split-text">
          <Reveal>
            <p>
              O primeiro curso, <strong>A.T. na Prática</strong>, aborda a atuação prática do Acompanhante Terapêutico:
              identidade profissional, ambientes naturais, observação do comportamento e estratégias de intervenção.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <p>
              O segundo, <strong>Estudo de Caso — Manejo de Crise</strong>, aprofunda o raciocínio de análise funcional e
              o planejamento preventivo para situações de crise, a partir da discussão de casos.
            </p>
          </Reveal>
        </div>

        <ol className="journey">
          {journey.map((step, i) => (
            <li key={step.title} className="journey__item">
              <Reveal delay={i * 90} className="journey__card">
                <span className="journey__num">{i + 1}</span>
                <span className="icon-badge icon-badge--lg">
                  <Icon name={step.icon} size={28} />
                </span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </Reveal>
              {i < journey.length - 1 && <Icon name="arrow" size={26} className="journey__arrow" />}
            </li>
          ))}
        </ol>

        <div className="section-cta">
          <CtaButton checkout="combo" location="beneficios" size="lg">
            QUERO PARTICIPAR DOS DOIS ENCONTROS
          </CtaButton>
        </div>

        <p className="note note--center">
          <Icon name="info" size={18} />
          <span>
            O evento tem finalidade educacional e não substitui supervisão clínica nem treinamento específico de
            procedimentos de segurança.
          </span>
        </p>
      </div>
    </section>
  )
}
