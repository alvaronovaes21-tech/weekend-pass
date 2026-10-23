import { offer, offerIncludes } from '../data/content'
import { CtaButton } from './CtaButton'
import { Icon } from './Icon'
import { Reveal } from './Reveal'

export function Offer() {
  return (
    <section className="section section--offer" id="oferta" aria-labelledby="oferta-title">
      <div className="container">
        <Reveal className="offer">
          <div className="offer__deco" aria-hidden="true" />
          <div className="offer__info">
            <p className="eyebrow eyebrow--light">Investimento e oferta</p>
            <h2 id="oferta-title">Garanta os dois cursos em um único combo</h2>
            <ul className="offer__list">
              {offerIncludes.map((item) => (
                <li key={item}>
                  <span className="checklist__icon checklist__icon--pink">
                    <Icon name="check" size={14} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="offer__meta">
              <Icon name="calendar" size={18} /> {offer.dates} · <Icon name="video" size={18} /> {offer.modality}
            </p>
          </div>

          <div className="offer__box">
            <p className="offer__from">
              De <s>{offer.separatePrice}</s> por
            </p>
            <p className="offer__price">{offer.comboPrice}</p>
            <p className="pill pill--pink offer__save">
              <Icon name="tag" size={16} />
              Economize {offer.savings}
            </p>
            <CtaButton checkout="combo" location="oferta" variant="light" size="lg" block>
              QUERO GARANTIR MEU COMBO POR R$ 217,00
            </CtaButton>
            <p className="offer__secure">
              <Icon name="lock" size={16} />
              Você será direcionado(a) ao checkout oficial da Hotmart para concluir sua inscrição.
            </p>
            <p className="offer__fine">Se o preço ou as condições forem alterados na Hotmart, prevalece a informação oficial do checkout.</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
