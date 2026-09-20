import { useState } from 'react'
import { CertificateModal } from '../common/CertificateModal'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [resumeOpen, setResumeOpen] = useState(false)
  const close = () => setOpen(false)

  const navItems = [
    { href: '#education', label: 'Education' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav>
      <a href="#hero" className="nav-brand" onClick={close}>
        <span className="nav-brand-icon">AS</span>
        <span className="nav-brand-name">Amar Sinha</span>
      </a>

      <button
        type="button"
        className="nav-toggle"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>

      <span className={`nav-links${open ? ' open' : ''}`}>
        {navItems.map((item) => (
          <a key={item.href} href={item.href} className="nav-link" onClick={close}>
            {item.label}
          </a>
        ))}
        <div className="nav-resume-group">
          <button
            type="button"
            className="resume-btn"
            onClick={() => {
              setResumeOpen(true)
              close()
            }}
          >
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
            Resume
          </button>
          <a
            href="/resume.pdf"
            download="Amar-Sinha-Resume.pdf"
            className="resume-download"
            aria-label="Download resume"
            title="Download resume"
            onClick={close}
          >
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 3v12" />
              <path d="m7 10 5 5 5-5" />
              <path d="M5 21h14" />
            </svg>
          </a>
        </div>
      </span>

      {resumeOpen && (
        <CertificateModal
          src="/resume.pdf"
          type="pdf"
          fileName="Amar-Sinha-Resume.pdf"
          onClose={() => setResumeOpen(false)}
        />
      )}
    </nav>
  )
}
