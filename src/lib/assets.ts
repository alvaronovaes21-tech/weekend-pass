/**
 * Detecta automaticamente imagens opcionais colocadas em src/assets/:
 *   - logo.(svg|png|webp|jpg)        -> logotipo do evento (cabeçalho e rodapé)
 *   - instrutora.(jpg|jpeg|png|webp) -> foto profissional da instrutora
 *
 * Se o arquivo não existir, a página usa uma composição gráfica no lugar.
 */
const logoModules = import.meta.glob('../assets/logo.{svg,png,webp,jpg,jpeg}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>

const instructorModules = import.meta.glob('../assets/instrutora.{jpg,jpeg,png,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>

export const logoSrc: string | undefined = Object.values(logoModules)[0]
export const instructorPhotoSrc: string | undefined = Object.values(instructorModules)[0]
