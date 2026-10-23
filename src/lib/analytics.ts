import { GA_MEASUREMENT_ID, META_PIXEL_ID } from '../config/analytics'
import type { CheckoutKey } from '../config/links'

type AnyFn = (...args: unknown[]) => void

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: AnyFn
    fbq?: AnyFn & { callMethod?: AnyFn; queue?: unknown[]; loaded?: boolean; version?: string; push?: AnyFn }
    _fbq?: Window['fbq']
  }
}

function injectScript(src: string) {
  const script = document.createElement('script')
  script.async = true
  script.src = src
  document.head.appendChild(script)
}

function initGoogleAnalytics(id: string) {
  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments)
  }
  window.gtag('js', new Date())
  window.gtag('config', id, { anonymize_ip: true })
  injectScript(`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`)
}

function initMetaPixel(id: string) {
  if (window.fbq) return
  const fbq = function (...args: unknown[]) {
    if (fbq.callMethod) fbq.callMethod(...args)
    else fbq.queue.push(args)
  } as NonNullable<Window['fbq']> & { queue: unknown[] }
  fbq.queue = []
  fbq.loaded = true
  fbq.version = '2.0'
  fbq.push = fbq
  window.fbq = fbq
  window._fbq = fbq
  injectScript('https://connect.facebook.net/en_US/fbevents.js')
  window.fbq('init', id)
  window.fbq('track', 'PageView')
}

/** Carrega GA e/ou Pixel somente se os IDs estiverem configurados. */
export function initAnalytics() {
  if (GA_MEASUREMENT_ID) initGoogleAnalytics(GA_MEASUREMENT_ID)
  if (META_PIXEL_ID) initMetaPixel(META_PIXEL_ID)
}

export interface CheckoutClickPayload {
  /** Qual checkout foi acionado (at | crise | combo). */
  checkout: CheckoutKey
  /** Onde na página o botão está (ex.: "hero", "header", "oferta"). */
  location: string
  /** Texto do botão. */
  label: string
}

/**
 * Registra um clique em botão de compra. Funciona com GTM (dataLayer), GA4 (gtag)
 * e Meta Pixel (fbq) — somente se algum deles estiver presente na página.
 * Não coleta nenhum dado pessoal.
 */
export function trackCheckoutClick({ checkout, location, label }: CheckoutClickPayload) {
  if (typeof window === 'undefined') return

  window.dataLayer?.push({
    event: 'checkout_click',
    checkout,
    button_location: location,
    button_label: label,
  })

  window.gtag?.('event', 'begin_checkout_click', {
    checkout,
    button_location: location,
    button_label: label,
  })

  window.fbq?.('trackCustom', 'CheckoutClick', { checkout, button_location: location })
}
