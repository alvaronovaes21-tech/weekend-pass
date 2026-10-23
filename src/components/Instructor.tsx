import { offer } from '../data/content'
import { instructorPhotoSrc } from '../lib/assets'
import { Icon } from './Icon'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Instructor() {
  return (
    <section className="section section--tint" id="instrutora" aria-labelledby="instrutora-title">
      <div className="container instructor">
        <Reveal className="instructor__photo-wrap">
          <div className="instructor__photo">
            {instructorPhotoSrc ? (
              <img
                src={instructorPhotoSrc}
                alt={`${offer.instructor}, ${offer.instructorRole.toLowerCase()}`}
                loading="lazy"
                decoding="async"
                width={640}
                height={800}
              />
            ) : (
              <div className="instructor__placeholder" role="img" aria-label={`Identidade visual de ${offer.instructor}`}>
                <Icon name="user" size={96} />
                {import.meta.env.DEV && (
                  <small>Adicione a foto em src/assets/instrutora.jpg (aparece só em desenvolvimento)</small>
                )}
              </div>
            )}
          </div>
          <span className="instructor__crp">
            <Icon name="shield" size={18} />
            {offer.crp}
          </span>
        </Reveal>

        <Reveal delay={100} className="instructor__text">
          <SectionHeading align="left" eyebrow="Instrutora" id="instrutora-title" title="Quem conduzirá essa experiência?" />
          <h3>{offer.instructor}</h3>
          <p className="instructor__role">{offer.instructorRole}</p>
          <p className="instructor__reg">{offer.crp}</p>
          <p>
            O Weekend Pass nasce da proposta de aproximar conhecimento técnico, análise do comportamento e prática
            profissional, oferecendo um espaço de estudo e discussão para quem atua ou deseja atuar com crianças no
            contexto da neurodiversidade.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
