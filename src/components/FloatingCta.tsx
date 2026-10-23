import { useEffect, useState } from 'react'
import { offer } from '../data/content'
import { CtaButton } from './CtaButton'

/**
 * Barra de compra fixa, somente no mobile (via CSS). Aparece depois que o botão do hero sai da tela
 * e some quando um CTA grande (abaixo do vídeo, oferta ou CTA final) já está visível, para não duplicar nem cobrir conteúdo.
 */
export function FloatingCta() {
  const [heroGone, setHeroGone] = useState(false)
  const [ctaSectionVisible, setCtaSectionVisible] = useState(false)

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return

    const hero = document.getElementById('hero-cta')
    const heroObserver = hero
      ? new IntersectionObserver(([e]) => setHeroGone(!e.isIntersecting && e.boundingClientRect.top < 0))
      : null
    heroObserver?.observe(hero!)

    const visibleIds = new Set<string>()
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((e) => (e.isIntersecting ? visibleIds.add(e.target.id) : visibleIds.delete(e.target.id)))
      setCtaSectionVisible(visibleIds.size > 0)
    })
    ;['video-cta', 'oferta', 'inscricao'].forEach((id) => {
      const el = document.getElementById(id)
      if (el) sectionObserver.observe(el)
    })

    return () => {
      heroObserver?.disconnect()
      sectionObserver.disconnect()
    }
  }, [])

  const show = heroGone && !ctaSectionVisible

  return (
    <div className={`floating-cta ${show ? 'is-visible' : ''}`} aria-hidden={!show} inert={!show}>
      <div className="floating-cta__price">
        <span>Combo Weekend Pass</span>
        <strong>{offer.comboPrice}</strong>
      </div>
      <CtaButton checkout="combo" location="flutuante-mobile" size="md">
        QUERO MEU COMBO
      </CtaButton>
    </div>
  )
}
