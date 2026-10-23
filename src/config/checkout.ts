/**
 * ============================================================
 *  CONFIGURAÇÃO CENTRALIZADA DOS LINKS DE CHECKOUT (HOTMART)
 * ============================================================
 *
 *  >>> É AQUI que você cola os links reais da Hotmart. <<<
 *
 *  Substitua o texto entre aspas de cada constante pelo link completo,
 *  por exemplo: 'https://pay.hotmart.com/XXXXXXXX?off=XXXX'
 *
 *  Alternativa: defina VITE_HOTMART_CHECKOUT_URL_1/2/3 em um arquivo .env
 *  (veja .env.example). Se a variável de ambiente existir, ela tem prioridade.
 *
 *  Enquanto o valor for vazio ou continuar com o texto de placeholder,
 *  NENHUM botão redireciona: o visitante recebe um aviso e nada é simulado.
 */

/** 1 — Curso "A.T. na Prática" (sábado, 28/11/2026) — R$ 147,00 */
export const HOTMART_CHECKOUT_URL_1 = 'https://pay.hotmart.com/G108160022N'

/** 2 — Curso "Estudo de Caso — Manejo de Crise" (domingo, 29/11/2026) — R$ 156,60 */
export const HOTMART_CHECKOUT_URL_2 = 'https://pay.hotmart.com/G108160022N'

/** 3 — Combo "Weekend Pass" (os dois cursos) — R$ 217,00 */
export const HOTMART_CHECKOUT_URL_3 = 'https://pay.hotmart.com/C108160075W'

export type CheckoutKey = 'at' | 'crise' | 'combo'

const env = import.meta.env

const RAW_LINKS: Record<CheckoutKey, string> = {
  at: (env.VITE_HOTMART_CHECKOUT_URL_1 as string | undefined) || HOTMART_CHECKOUT_URL_1,
  crise: (env.VITE_HOTMART_CHECKOUT_URL_2 as string | undefined) || HOTMART_CHECKOUT_URL_2,
  combo: (env.VITE_HOTMART_CHECKOUT_URL_3 as string | undefined) || HOTMART_CHECKOUT_URL_3,
}

const VARIABLE_NAMES: Record<CheckoutKey, string> = {
  at: 'HOTMART_CHECKOUT_URL_1',
  crise: 'HOTMART_CHECKOUT_URL_2',
  combo: 'HOTMART_CHECKOUT_URL_3',
}

/** Só aceita links https:// válidos (evita placeholder, texto solto ou esquemas perigosos). */
function isValidCheckoutUrl(value: string): boolean {
  const trimmed = value.trim()
  if (!trimmed || trimmed.startsWith('COLE_AQUI')) return false
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
