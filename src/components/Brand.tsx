import { logoSrc } from '../lib/assets'

interface BrandProps {
  tone?: 'default' | 'light'
}

/** Marca do evento. Usa src/assets/logo.* se existir; caso contrário, um símbolo provisório. */
export function Brand({ tone = 'default' }: BrandProps) {
  return (
    <a href="#topo" className={`brand brand--${tone}`} aria-label="Weekend Pass — voltar ao topo">
      {logoSrc ? (
        <img src={logoSrc} alt="" className="brand__logo" height={40} />
      ) : (
        <svg className="brand__mark" viewBox="0 0 64 64" width="40" height="40" aria-hidden="true">
          <rect width="64" height="64" rx="16" fill="currentColor" />
          <path
            d="M14 22l8 22 10-16 10 16 8-22"
            fill="none"
            stroke="#fff"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="32" cy="16" r="4" fill="#ffc2d6" />
        </svg>
      )}
      <span className="brand__text">
        <strong>Weekend Pass</strong>
        <small>A.T. na Prática + Manejo de Crise</small>
      </span>
    </a>
  )
}
