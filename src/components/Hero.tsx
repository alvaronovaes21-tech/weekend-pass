import { offer } from '../data/content'
import { CtaButton } from './CtaButton'
import { Icon } from './Icon'

function ModulesVisual() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="hero-visual__glow" />

      <div className="module module--at">
        <div className="module__head">
          <span className="module__day">Sáb · 28/11</span>
          <span className="module__icon">
            <Icon name="route" size={20} />
          </span>
        </div>
        <h3>A.T. na Prática</h3>
        <p>Intervenção em ambientes naturais, ABA e comunicação funcional.</p>
        <ul className="module__chips">
          <li>Observação</li>
          <li>Família e escola</li>
          <li>Autorregulação</li>
        </ul>
      </div>

      <div className="module module--crise">
        <div className="module__head">
          <span className="module__day module__day--pink">Dom · 29/11</span>
          <span className="module__icon module__icon--pink">
            <Icon name="search" size={20} />
          </span>
        </div>
        <h3>Estudo de Caso</h3>
        <p>Manejo de crise: da análise ABC à intervenção preventiva.</p>
        <div className="abc">
          <div className="abc__step">
            <b>A</b>
            <span>Antecedente</span>
          </div>
          <Icon name="arrow" size={16} className="abc__arrow" />
          <div className="abc__step">
            <b>B</b>
            <span>Comportamento</span>
          </div>
          <Icon name="arrow" size={16} className="abc__arrow" />
          <div className="abc__step">
            <b>C</b>
            <span>Consequência</span>
          </div>
        </div>
      </div>

      <div className="hero-visual__badge">
        <Icon name="layers" size={18} />
        <span>2 cursos · 1 combo</span>
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__bg" aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="hero__kicker">
            <Icon name="sparkles" size={16} />
            Weekend Pass · A.T. na Prática + Estudo de Caso
          </p>
          <h1 id="hero-title">
            Da análise do comportamento à <span>intervenção na prática</span>
          </h1>
          <p className="hero__subtitle">
            Dois dias de formação on-line para conectar a atuação do Acompanhante Terapêutico à análise funcional do
            comportamento e ao planejamento de intervenções preventivas no manejo de crises.
          </p>

          <ul className="hero__facts">
            <li>
              <Icon name="calendar" size={20} />
              <span>
                <strong>28 e 29 de novembro</strong> de 2026
              </span>
            </li>
            <li>
              <Icon name="video" size={20} />
              <span>
                Evento <strong>on-line e ao vivo</strong>
              </span>
            </li>
            <li>
              <Icon name="layers" size={20} />
              <span>
                <strong>Dois cursos</strong> em um único combo
              </span>
            </li>
          </ul>

          <div className="hero__price">
            <div className="hero__price-main">
              <span className="hero__price-label">Investimento do combo</span>
              <strong>{offer.comboPrice}</strong>
            </div>
            <div className="hero__price-side">
              <span className="hero__price-old">
                <span className="sr-only">Preço anterior: </span>
                <s>{offer.separatePrice}</s>
              </span>
              <span className="pill pill--pink">Economize {offer.savings}</span>
            </div>
          </div>

          <div className="hero__actions">
            <CtaButton checkout="combo" location="hero" size="lg" id="hero-cta">
              QUERO PARTICIPAR DO WEEKEND PASS
            </CtaButton>
            <p className="microcopy">
              <Icon name="lock" size={16} />
              Pagamento realizado com segurança no ambiente de checkout da Hotmart.
            </p>
          </div>
        </div>

        <ModulesVisual />
      </div>
    </section>
  )
}
