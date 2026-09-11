import { experiences } from '../../data/experience'

export function ExperienceOverlay() {
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
              <a href={exp.certificate} target="_blank" rel="noreferrer" className="project-link">
                View Certificate →
              </a>
            </p>
          )}
        </div>
      ))}
    </section>
  )
}
