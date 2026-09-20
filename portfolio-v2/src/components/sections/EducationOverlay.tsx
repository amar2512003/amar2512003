import { college, school } from '../../data/education'
import { CGPAChart } from '../ui/CGPAChart'
import { useInView } from '../../hooks/useInView'

export function EducationOverlay() {
  const { ref, inView } = useInView<HTMLElement>()

  return (
    <section id="education" ref={ref} className={`section-tall edu-section${inView ? ' in-view' : ''}`}>
      <div className="section-header">
        <span className="section-number">01</span>
        <h2>Education</h2>
      </div>

      <div className="edu-card glass-card">
        <div className="edu-card-header">
          <div className="edu-icon">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
          </div>
          <div>
            <h3 className="edu-school">{college.school}</h3>
            <p className="edu-degree">{college.degree}</p>
            <p className="edu-meta">
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {college.location} · {college.period}
            </p>
          </div>
        </div>
        <CGPAChart semesters={college.semesters} />
      </div>

      <div className="school-block glass-card">
        <div className="edu-card-header">
          <div className="edu-icon edu-icon-school">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
          </div>
          <div>
            <h3 className="edu-school">{school.school}</h3>
            <p className="edu-degree">{school.board}</p>
            <p className="edu-meta">
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {school.location} · {school.period}
            </p>
          </div>
        </div>
        <div className="school-scores">
          {school.scores.map((s) => (
            <div className="school-score-row" key={s.label}>
              <span className="school-score-label">{s.label}</span>
              <div className="school-score-track">
                <div className="school-score-fill" style={{ width: inView ? `${s.percent}%` : '0%' }} />
              </div>
              <span className="school-score-value">{s.percent}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
