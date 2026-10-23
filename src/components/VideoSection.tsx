import { youtubeVideoUrl } from '../config/links'
import { offer } from '../data/content'
import { getYoutubeEmbedUrl } from '../lib/youtube'
import { CtaButton } from './CtaButton'
import { Icon } from './Icon'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

function VideoPlayer({ embedUrl }: { embedUrl: string }) {
  return (
    <div className="video-frame">
      <iframe
        src={embedUrl}
        title="Vídeo de apresentação do Weekend Pass"
        loading="lazy"
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  )
}

function VideoPlaceholder({ invalid }: { invalid: boolean }) {
  return (
    <div className="video-frame video-frame--placeholder" role="img" aria-label="Vídeo de apresentação em breve">
      <div className="video-placeholder">
        <span className="video-placeholder__play">
          <Icon name="play" size={40} />
        </span>
        <p>Vídeo de apresentação em breve.</p>
        {import.meta.env.DEV && (
          <small>
            {invalid
              ? 'YOUTUBE_VIDEO_URL inválida: use um link de vídeo do YouTube (watch?v=, youtu.be/ ou embed/).'
              : 'Defina YOUTUBE_VIDEO_URL em src/config/links.ts (aparece só em desenvolvimento).'}
          </small>
        )}
      </div>
    </div>
  )
}

export function VideoSection() {
  const embedUrl = youtubeVideoUrl ? getYoutubeEmbedUrl(youtubeVideoUrl) : null

  if (youtubeVideoUrl && !embedUrl) {
    console.warn('[YouTube] YOUTUBE_VIDEO_URL não é uma URL de vídeo do YouTube reconhecida. Edite src/config/links.ts.')
  }

  return (
    <section className="section section--video" id="apresentacao" aria-labelledby="video-title">
      <div className="container container--video">
        <SectionHeading
          eyebrow="Apresentação"
          id="video-title"
          title="Conheça o Weekend Pass e descubra como os dois cursos se complementam"
          description="Assista à apresentação e conheça a proposta dos dois encontros, os conteúdos abordados e como essa experiência pode ampliar seu repertório para analisar comportamentos e planejar intervenções mais conscientes, éticas e individualizadas."
        />

        <Reveal>{embedUrl ? <VideoPlayer embedUrl={embedUrl} /> : <VideoPlaceholder invalid={Boolean(youtubeVideoUrl)} />}</Reveal>

        <Reveal className="video-cta" delay={80}>
          <div id="video-cta" className="video-cta__inner">
            <h3>Do conhecimento à prática: participe dos dois encontros do Weekend Pass.</h3>
            <p className="video-cta__meta">
              <Icon name="calendar" size={18} />
              <span>28 e 29 de novembro de 2026</span>
              <span className="video-cta__sep" aria-hidden="true">
                •
              </span>
              <Icon name="video" size={18} />
              <span>On-line e ao vivo</span>
            </p>
            <p className="video-cta__price">
              <strong>{offer.comboPrice}</strong> pelo combo
            </p>
            <CtaButton checkout="combo" location="video" size="lg">
              QUERO GARANTIR MEU COMBO POR R$ 217,00
            </CtaButton>
            <p className="microcopy microcopy--center">
              <Icon name="lock" size={16} />
              Você será direcionado(a) ao checkout oficial da Hotmart para concluir sua inscrição.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
