/**
 * Rastreamento OPCIONAL. Nenhum script é carregado enquanto os IDs estiverem vazios.
 * Preencha em .env (VITE_GA_MEASUREMENT_ID / VITE_META_PIXEL_ID) quando tiver os IDs reais.
 *
 * Atenção à LGPD: ao ativar GA/Pixel, avalie incluir aviso/consentimento de cookies
 * e atualizar a Política de Privacidade.
 */
export const GA_MEASUREMENT_ID = ((import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined) ?? '').trim()
export const META_PIXEL_ID = ((import.meta.env.VITE_META_PIXEL_ID as string | undefined) ?? '').trim()
