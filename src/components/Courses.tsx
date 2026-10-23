import { courses, offer } from '../data/content'
import { CourseCard } from './CourseCard'
import { CtaButton } from './CtaButton'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Courses() {
  return (
    <section className="section section--tint" id="conteudo" aria-labelledby="cursos-title">
      <div className="container">
        <SectionHeading
          eyebrow="Os dois cursos"
          id="cursos-title"
          title="Dois dias, dois cursos, uma jornada completa"
          description="Conheça o conteúdo de cada encontro. Eles se complementam e podem ser feitos em sequência, no combo."
        />

        <div className="courses-grid">
          <Reveal>
            <CourseCard variant="at" checkout="at" {...courses.at} />
          </Reveal>
          <Reveal delay={100}>
            <CourseCard variant="crise" checkout="crise" {...courses.crise} />
          </Reveal>
        </div>

        <Reveal className="combo-strip">
          <div>
            <p className="combo-strip__title">Prefere participar dos dois encontros?</p>
            <p className="combo-strip__text">
              No combo Weekend Pass você garante os dois cursos por <strong>{offer.comboPrice}</strong> — economia de{' '}
              {offer.savings} em relação aos valores separados ({offer.separatePrice}).
            </p>
          </div>
          <CtaButton checkout="combo" location="cursos-combo" size="lg">
            QUERO GARANTIR MEU WEEKEND PASS
          </CtaButton>
        </Reveal>
      </div>
    </section>
  )
}
