import { useState } from 'react'
import { experiences } from '../../data/experience'
import { CertificateModal } from '../common/CertificateModal'
import { useInView } from '../../hooks/useInView'

export function ExperienceOverlay() {
  const [openCertificate, setOpenCertificate] = useState<{ src: string; type: 'pdf' | 'image' } | null>(
    null
  )
  const { ref, inView } = useInView<HTMLElement>()

  return (
    <section id="experience" ref={ref} className={`exp-section${inView ? ' in-view' : ''}`}>
      <div className="section-header">
        <span className="section-number">02</span>
        <h2>Experience</h2>
      </div>

      <div className="exp-timeline">
        {experiences.map((exp, i) => (
          <div
            key={exp.id}
            className="exp-card glass-card"
            style={{ transitionDelay: `${i * 0.15}s` }}
          >
            <div className="exp-timeline-dot" />
            <div className="exp-period-badge">{exp.period}</div>
            <h3 className="exp-role">{exp.role}</h3>
            <p className="exp-org">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
              {exp.org} · {exp.location}
            </p>
            <ul className="exp-points">
              {exp.points.map((pt) => (
                <li key={pt}>
                  <p>{pt}</p>
                </li>
              ))}
            </ul>
            {exp.certificate && (
              <button
                type="button"
                className="certificate-trigger-btn"
                onClick={() =>
                  setOpenCertificate({ src: exp.certificate!, type: exp.certificateType ?? 'pdf' })
                }
              >
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="7" />
                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                </svg>
                View Certificate
              </button>
            )}
          </div>
        ))}
      </div>

      {openCertificate && (
        <CertificateModal
          src={openCertificate.src}
          type={openCertificate.type}
          onClose={() => setOpenCertificate(null)}
        />
      )}
    </section>
  )
}
