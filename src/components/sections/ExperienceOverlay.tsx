import { useState } from 'react'
import { experiences } from '../../data/experience'
import { CertificateModal } from '../common/CertificateModal'

export function ExperienceOverlay() {
  const [openCertificate, setOpenCertificate] = useState<{ src: string; type: 'pdf' | 'image' } | null>(
    null
  )

  return (
    <section id="experience">
      <h2>Experience</h2>
      {experiences.map((exp) => (
        <div key={exp.id} style={{ marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '1.8rem' }}>{exp.role}</h1>
          <p>
            {exp.org} · {exp.location} · {exp.period}
          </p>
          <ul>
            {exp.points.map((pt) => (
              <li key={pt}>
                <p style={{ display: 'inline' }}>{pt}</p>
              </li>
            ))}
          </ul>
          {exp.certificate && (
            <p>
              <button
                type="button"
                className="project-link certificate-trigger"
                onClick={() =>
                  setOpenCertificate({ src: exp.certificate!, type: exp.certificateType ?? 'pdf' })
                }
              >
                View Certificate →
              </button>
            </p>
          )}
        </div>
      ))}

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
