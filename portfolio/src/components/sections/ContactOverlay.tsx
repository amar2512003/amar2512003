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
}

const contacts = [
  { key: 'gmail', label: 'Gmail', value: profile.email, href: gmailComposeHref },
  { key: 'linkedin', label: 'LinkedIn', value: 'linkedin.com/in/amar-sinha2512', href: profile.socials.linkedin },
  { key: 'instagram', label: 'Instagram', value: '@a.m.a.r_25.12', href: profile.socials.instagram },
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
              <span className="contact-value">{c.value}</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}
