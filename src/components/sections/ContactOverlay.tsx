import { profile } from '../../data/profile'
import { useInView } from '../../hooks/useInView'

const gmailComposeHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`

const icons = {
  gmail: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
      <path d="M2 6.5A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 17.5v-11Z
        M4.2 6l7.8 6 7.8-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05
        c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  ),
  whatsapp: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
      <path d="M17.47 14.38c-.29-.15-1.7-.84-1.96-.93-.26-.1-.46-.15-.65.14-.19.29-.75.93-.92 1.12-.17.19-.34.22-.63.07-.29-.15-1.22-.45-2.32-1.43-.86-.76-1.44-1.71-1.61-2-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.65-1.57-.89-2.15-.23-.56-.47-.48-.65-.49-.17-.01-.36-.01-.55-.01-.19 0-.51.07-.78.36-.26.29-1.02 1-1.02 2.43 0 1.43 1.05 2.82 1.19 3.01.15.19 2.06 3.14 4.99 4.4.7.3 1.24.48 1.67.61.7.22 1.34.19 1.84.12.56-.08 1.7-.7 1.94-1.37.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.55-.34Z"/>
      <path d="M12.02 2C6.5 2 2.03 6.44 2.03 11.92c0 1.85.5 3.58 1.38 5.08L2 22l5.16-1.35a10.05 10.05 0 0 0 4.86 1.24h.01c5.52 0 9.99-4.44 9.99-9.92C21.99 6.44 17.53 2 12.02 2Zm0 18.06h-.01a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.06.8.82-2.98-.19-.31a8.07 8.07 0 0 1-1.25-4.34c0-4.47 3.65-8.11 8.13-8.11 2.17 0 4.21.85 5.75 2.38a8.06 8.06 0 0 1 2.38 5.74c0 4.47-3.65 8.13-8.14 8.13Z"/>
    </svg>
  ),
}

const whatsappHref = 'https://wa.me/917003391277'

const contacts = [
  { key: 'gmail', label: 'Gmail', href: gmailComposeHref },
  { key: 'linkedin', label: 'LinkedIn', href: profile.socials.linkedin },
  { key: 'instagram', label: 'Instagram', href: profile.socials.instagram },
  { key: 'whatsapp', label: 'WhatsApp', href: whatsappHref },
] as const

export function ContactOverlay() {
  const { ref, inView } = useInView<HTMLElement>()

  return (
    <section
      id="contact"
      ref={ref}
      className={`contact-section${inView ? ' in-view' : ''}`}
    >
      <h2>Get in Touch</h2>
      <h1 style={{ fontSize: '1.8rem' }}>Let&apos;s build something</h1>
      <p>Open to opportunities, collaborations, and interesting conversations — reach out on any of these.</p>
      <div className="contact-grid">
        {contacts.map((c, i) => (
          <a
            key={c.key}
            href={c.href}
            target="_blank"
            rel="noreferrer"
            className="contact-card"
            style={{ transitionDelay: `${i * 0.12}s` }}
          >
            <span className="contact-icon">{icons[c.key]}</span>
            <span className="contact-text">
              <span className="contact-label">{c.label}</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}