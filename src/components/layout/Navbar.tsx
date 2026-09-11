import { useState } from 'react'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <nav>
      <span>Amar Sinha</span>

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
        <a href="#education" className="nav-link" onClick={close}>Education</a>
        <a href="#experience" className="nav-link" onClick={close}>Experience</a>
        <a href="#projects" className="nav-link" onClick={close}>Projects</a>
        <a href="#skills" className="nav-link" onClick={close}>Skills</a>
        <a href="#contact" className="nav-link" onClick={close}>Contact</a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="resume-btn"
          onClick={close}
        >
          Resume
        </a>
        <a
          href="/resume.pdf"
          download="Amar-Sinha-Resume.pdf"
          className="resume-download"
          aria-label="Download resume"
          title="Download resume"
          onClick={close}
        >
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 3v12" />
            <path d="m7 10 5 5 5-5" />
            <path d="M5 21h14" />
          </svg>
        </a>
      </span>
    </nav>
  )
}
