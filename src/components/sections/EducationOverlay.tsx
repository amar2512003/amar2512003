import { college, school } from '../../data/education'
import { CGPAChart } from '../ui/CGPAChart'

export function EducationOverlay() {
  return (
    <section id="education" className="section-tall">
      <h2>Education</h2>
      <h1 style={{ fontSize: '1.8rem' }}>{college.school}</h1>
      <p>
        {college.degree}
        <br />
        {college.location} · {college.period}
      </p>

      <CGPAChart semesters={college.semesters} />

      <div className="school-block">
        <h1 style={{ fontSize: '1.4rem' }}>{school.school}</h1>
        <p>
          {school.board}
          <br />
          {school.location} · {school.period}
        </p>
        <div className="school-scores">
          {school.scores.map((s) => (
            <div className="school-score-row" key={s.label}>
              <span className="school-score-label">{s.label}</span>
              <div className="school-score-track">
                <div className="school-score-fill" style={{ width: `${s.percent}%` }} />
              </div>
              <span className="school-score-value">{s.percent}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
