// Teste do conversor de URLs do YouTube. Rode com: npm test (Node 22.18+ / 24)
import assert from 'node:assert/strict'
import { getYoutubeEmbedUrl, getYoutubeVideoId } from '../src/lib/youtube.ts'

const ID = 'dQw4w9WgXcQ'
const base = `https://www.youtube-nocookie.com/embed/${ID}?rel=0&modestbranding=1&playsinline=1`

const valid: [string, string][] = [
  [`https://www.youtube.com/watch?v=${ID}`, base],
  [`https://youtube.com/watch?v=${ID}&feature=share`, base],
  [`https://m.youtube.com/watch?v=${ID}`, base],
  [`https://youtu.be/${ID}`, base],
  [`https://youtu.be/${ID}?si=abc123`, base],
  [`https://www.youtube.com/embed/${ID}`, base],
  [`https://www.youtube-nocookie.com/embed/${ID}`, base],
  [`https://www.youtube.com/shorts/${ID}`, base],
  [`https://www.youtube.com/live/${ID}?feature=share`, base],
  [`  https://youtu.be/${ID}  `, base],
  [`https://youtu.be/${ID}?t=90`, `${base}&start=90`],
  [`https://www.youtube.com/watch?v=${ID}&t=1m30s`, `${base}&start=90`],
]

const invalid: string[] = [
  '',
  '   ',
  'texto qualquer',
  'dQw4w9WgXcQ',
  'javascript:alert(1)',
  'data:text/html,<script>alert(1)</script>',
  `https://evil.com/watch?v=${ID}`,
  `https://youtube.com.evil.com/watch?v=${ID}`,
  `https://evil.com/?u=https://youtu.be/${ID}`,
  'https://www.youtube.com/watch?v=curto',
  `https://www.youtube.com/watch?v=${ID}extra`,
  `https://www.youtube.com/watch?v="><script>`,
  'https://www.youtube.com/',
  'https://www.youtube.com/@canal',
  'https://www.youtube.com/playlist?list=PL123',
  `ftp://youtu.be/${ID}`,
  'https://youtu.be/',
]

let passed = 0
for (const [input, expected] of valid) {
  assert.equal(getYoutubeEmbedUrl(input), expected, `deveria converter: ${input}`)
  assert.equal(getYoutubeVideoId(input), ID)
  assert.ok(!expected.includes('autoplay'), 'nunca deve haver autoplay')
  passed++
}
for (const input of invalid) {
  assert.equal(getYoutubeEmbedUrl(input), null, `deveria rejeitar: ${JSON.stringify(input)}`)
  passed++
}

console.log(`OK — ${passed} casos aprovados (${valid.length} válidos, ${invalid.length} rejeitados).`)
