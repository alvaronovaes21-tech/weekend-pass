import { footerContact, legalLinks } from '../config/site'
import { offer } from '../data/content'
import { Brand } from './Brand'

export function Footer() {
  const legal = legalLinks.filter((l) => l.href)
  const contacts = [
    footerContact.email && { label: 'E-mail', href: `mailto:${footerContact.email}`, text: footerContact.email },
    footerContact.whatsappUrl && { label: 'WhatsApp', href: footerContact.whatsappUrl, text: 'Falar no WhatsApp' },
    footerContact.instagramUrl && { label: 'Instagram', href: footerContact.instagramUrl, text: 'Instagram' },
  ].filter(Boolean) as { label: string; href: string; text: string }[]

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__id">
            <Brand tone="light" />
            <p>
              {offer.fullName}
              <br />
              Instrutora: {offer.instructor} · {offer.crp}
            </p>
          </div>

          {(legal.length > 0 || contacts.length > 0) && (
            <nav className="site-footer__links" aria-label="Links institucionais e contato">
              <ul>
                {legal.map((l) => (
                  <li key={l.label}>
                    <a href={l.href}>{l.label}</a>
                  </li>
                ))}
                {contacts.map((c) => (
                  <li key={c.label}>
                    <a href={c.href} target={c.href.startsWith('mailto:') ? undefined : '_blank'} rel="noopener noreferrer">
                      {c.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>

        <div className="site-footer__legal">
          <p>
            Esta página apresenta o evento e direciona ao checkout da Hotmart para pagamento. Nenhum dado de pagamento é
            solicitado ou armazenado neste site.
          </p>
          <p>
            O conteúdo tem finalidade educacional e não substitui supervisão, avaliação individualizada ou treinamento
            específico necessário para procedimentos de segurança.
          </p>
          <p className="site-footer__copy">
            © {new Date().getFullYear()} {offer.name} · {offer.instructor} · {offer.crp}
          </p>
        </div>
      </div>
    </footer>
  )
}
