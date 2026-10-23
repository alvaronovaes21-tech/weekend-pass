import { offer } from '../data/content'
import { CtaButton } from './CtaButton'
import { Icon } from './Icon'
import { Reveal } from './Reveal'

export function FinalCta() {
  return (
    <section className="final-cta" id="inscricao" aria-labelledby="final-title">
      <div className="final-cta__deco" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="container final-cta__inner">
        <Reveal>
          <h2 id="final-title">Do conhecimento à prática: dê o próximo passo na sua formação.</h2>
          <p className="final-cta__text">
            Participe de dois encontros voltados à análise, ao planejamento e à intervenção no contexto da
            neurodiversidade.
          </p>

          <ul className="final-cta__facts">
            <li>
              <Icon name="calendar" size={20} /> {offer.dates}
            </li>
            <li>
              <Icon name="video" size={20} /> {offer.modality}
            </li>
            <li>
              <Icon name="tag" size={20} /> {offer.comboPrice} pelo combo
            </li>
          </ul>

          <CtaButton checkout="combo" location="cta-final" variant="light" size="lg">
            QUERO ME INSCREVER NO WEEKEND PASS
          </CtaButton>
          <p className="final-cta__micro">
            <Icon name="lock" size={16} /> Pagamento no checkout oficial da Hotmart.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
