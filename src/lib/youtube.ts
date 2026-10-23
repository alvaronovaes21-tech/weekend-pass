/**
 * Converte uma URL comum do YouTube na URL de incorporação com privacidade aprimorada
 * (youtube-nocookie.com). Retorna null para qualquer coisa que não seja uma URL de vídeo
 * do YouTube reconhecida — nenhum texto livre vai direto para o HTML.
 *
 * Sem dependências e sem imports, para poder ser testado com `npm test`.
 */

const VIDEO_ID = /^[A-Za-z0-9_-]{11}$/

const YOUTUBE_HOSTS = new Set([
  'youtube.com',
  'www.youtube.com',
  'm.youtube.com',
  'youtube-nocookie.com',
  'www.youtube-nocookie.com',
])

/** Aceita "90", "90s" ou "1m30s" e devolve segundos (ou null). */
function parseStart(value: string | null): number | null {
  if (!value) return null
  const match = /^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s?)?$/.exec(value.trim())
  if (!match || !match[0]) return null
  const [, h = '0', m = '0', s = '0'] = match
  const seconds = Number(h) * 3600 + Number(m) * 60 + Number(s)
  return seconds > 0 ? seconds : null
}

export function getYoutubeVideoId(rawUrl: string): string | null {
  const input = rawUrl.trim()
  if (!input) return null

  let url: URL
  try {
    url = new URL(input)
  } catch {
    return null
  }
  if (url.protocol !== 'https:' && url.protocol !== 'http:') return null

  const host = url.hostname.toLowerCase()
  let candidate: string | null = null

  if (host === 'youtu.be' || host === 'www.youtu.be') {
    candidate = url.pathname.split('/')[1] ?? null
  } else if (YOUTUBE_HOSTS.has(host)) {
    const [, first, second] = url.pathname.split('/')
    if (first === 'watch') candidate = url.searchParams.get('v')
    else if (first === 'embed' || first === 'shorts' || first === 'live' || first === 'v') candidate = second ?? null
  }

  return candidate && VIDEO_ID.test(candidate) ? candidate : null
}

export function getYoutubeEmbedUrl(rawUrl: string): string | null {
  const id = getYoutubeVideoId(rawUrl)
  if (!id) return null

  let start: number | null = null
  try {
    const params = new URL(rawUrl.trim()).searchParams
    start = parseStart(params.get('t') ?? params.get('start'))
  } catch {
    /* já validado em getYoutubeVideoId */
  }

  // rel=0: sugestões só do mesmo canal. Sem autoplay: o visitante decide quando assistir.
  const query = new URLSearchParams({ rel: '0', modestbranding: '1', playsinline: '1' })
  if (start) query.set('start', String(start))

  return `https://www.youtube-nocookie.com/embed/${id}?${query.toString()}`
}
