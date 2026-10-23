import { useEffect, useState } from 'react'
import { notify } from '../lib/notify'
import { Icon } from './Icon'

/** Aviso discreto (não é pop-up invasivo): aparece só após o clique em um botão sem link configurado. */
export function Toast() {
  const [message, setMessage] = useState<string | null>(null)

  useEffect(() => notify.subscribe(setMessage), [])

  useEffect(() => {
    if (!message) return
    const timer = window.setTimeout(() => setMessage(null), 9000)
    return () => window.clearTimeout(timer)
  }, [message])

  if (!message) return null

  return (
    <div className="toast" role="status" aria-live="polite">
      <Icon name="info" size={20} />
      <p>{message}</p>
      <button type="button" className="toast__close" onClick={() => setMessage(null)} aria-label="Fechar aviso">
        <Icon name="close" size={18} />
      </button>
    </div>
  )
}
