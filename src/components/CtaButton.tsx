import type { MouseEvent, ReactNode } from 'react'
import { getCheckoutUrl, getCheckoutVariableName, type CheckoutKey } from '../config/links'
import { trackCheckoutClick } from '../lib/analytics'
import { notify } from '../lib/notify'
import { Icon } from './Icon'

interface CtaButtonProps {
  /** Qual link de checkout usar: 'at' (1) | 'crise' (2) | 'combo' (3). */
  checkout: CheckoutKey
  /** Posição do botão na página — usado apenas para medição de cliques. */
  location: string
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'light' | 'outline'
  size?: 'md' | 'lg'
  block?: boolean
  id?: string
  className?: string
}

/**
 * Único botão de compra do site. Todos os CTAs passam por aqui, então:
 *  - o link vem sempre de src/config/links.ts;
 *  - abre o checkout real da Hotmart em nova aba;
 *  - se o link não estiver configurado, NADA é simulado: mostra um aviso claro.
 */
export function CtaButton({
  checkout,
  location,
  children,
  variant = 'primary',
  size = 'md',
  block = false,
  id,
  className = '',
}: CtaButtonProps) {
  const url = getCheckoutUrl(checkout)
  const label = typeof children === 'string' ? children : location
  const classes = ['btn', `btn--${variant}`, `btn--${size}`, block ? 'btn--block' : '', className]
    .filter(Boolean)
    .join(' ')

  const content = (
    <>
      <span>{children}</span>
      <Icon name="arrow" size={size === 'lg' ? 22 : 18} className="btn__icon" />
    </>
  )

  if (url) {
    return (
      <a
        id={id}
        className={classes}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        data-checkout={checkout}
        onClick={() => trackCheckoutClick({ checkout, location, label })}
      >
        {content}
      </a>
    )
  }

  const handleMissing = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    const variable = getCheckoutVariableName(checkout)
    console.warn(`[Hotmart] Link de checkout não configurado: ${variable}. Edite src/config/links.ts.`)
    notify.show(
      import.meta.env.DEV
        ? `Link de checkout não configurado. Defina ${variable} em src/config/links.ts (ou no arquivo .env).`
        : 'As inscrições ainda não estão disponíveis por aqui. Tente novamente em instantes.',
    )
  }

  return (
    <button id={id} type="button" className={classes} data-checkout={checkout} onClick={handleMissing}>
      {content}
    </button>
  )
}
