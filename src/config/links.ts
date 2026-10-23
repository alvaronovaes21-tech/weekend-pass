/**
 * ============================================================
 *  LINKS DO SITE — ÚNICO LUGAR PARA EDITAR (Hotmart e YouTube)
 * ============================================================
 *
 *  Nenhum componente contém URLs de compra: todos os botões recebem o destino daqui.
 *  Para trocar um link, altere apenas a constante correspondente abaixo.
 *
 *  Alternativa: variáveis de ambiente em um arquivo .env (veja .env.example).
 *  Se existirem, elas têm prioridade sobre os valores deste arquivo.
 *
 *  Se um link de checkout estiver vazio ou inválido, o botão NÃO redireciona e nada
 *  é simulado: o visitante recebe um aviso e o desenvolvedor vê qual variável ajustar.
 */

/** Curso "A.T. na Prática" (sábado, 28/11/2026) — R$ 147,00 */
export const HOTMART_CHECKOUT_AT_PRATICA = 'https://pay.hotmart.com/B108159916G'

/** Curso "Estudo de Caso — Manejo de Crise" (domingo, 29/11/2026) — R$ 156,60 */
export const HOTMART_CHECKOUT_MANEJO_CRISE = 'https://pay.hotmart.com/G108160022N'

/** Combo "Weekend Pass" (os dois cursos) — R$ 217,00. Usado em TODOS os botões do combo. */
export const HOTMART_CHECKOUT_COMBO = 'https://pay.hotmart.com/C108160075W'

/**
 * Vídeo de apresentação (YouTube). Deixe vazio ('') para exibir o espaço reservado
 * "Vídeo de apresentação em breve.". Formatos aceitos:
 *   https://www.youtube.com/watch?v=XXXXXXXXXXX
 *   https://youtu.be/XXXXXXXXXXX
 *   https://www.youtube.com/embed/XXXXXXXXXXX
 *   https://www.youtube.com/shorts/XXXXXXXXXXX
 */
export const YOUTUBE_VIDEO_URL = ''

// ---------------------------------------------------------------------------
// Daqui para baixo não é necessário editar.
// ---------------------------------------------------------------------------

export type CheckoutKey = 'at' | 'crise' | 'combo'

const env = import.meta.env

const RAW_LINKS: Record<CheckoutKey, string> = {
  at: (env.VITE_HOTMART_CHECKOUT_AT_PRATICA as string | undefined) || HOTMART_CHECKOUT_AT_PRATICA,
  crise: (env.VITE_HOTMART_CHECKOUT_MANEJO_CRISE as string | undefined) || HOTMART_CHECKOUT_MANEJO_CRISE,
  combo: (env.VITE_HOTMART_CHECKOUT_COMBO as string | undefined) || HOTMART_CHECKOUT_COMBO,
}

const VARIABLE_NAMES: Record<CheckoutKey, string> = {
  at: 'HOTMART_CHECKOUT_AT_PRATICA',
  crise: 'HOTMART_CHECKOUT_MANEJO_CRISE',
  combo: 'HOTMART_CHECKOUT_COMBO',
}

/** Só aceita links https:// válidos (evita texto solto ou esquemas perigosos como javascript:). */
function isValidCheckoutUrl(value: string): boolean {
  const trimmed = value.trim()
  if (!trimmed) return false
  try {
    return new URL(trimmed).protocol === 'https:'
  } catch {
    return false
  }
}

export function getCheckoutUrl(key: CheckoutKey): string | null {
  const value = RAW_LINKS[key]
  return isValidCheckoutUrl(value) ? value.trim() : null
}

export function getCheckoutVariableName(key: CheckoutKey): string {
  return VARIABLE_NAMES[key]
}

/** URL do vídeo configurada (env tem prioridade). Validação/conversão em lib/youtube.ts. */
export const youtubeVideoUrl: string = (
  ((env.VITE_YOUTUBE_VIDEO_URL as string | undefined) || YOUTUBE_VIDEO_URL) ?? ''
).trim()
