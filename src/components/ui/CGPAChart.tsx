import { useInView } from '../../hooks/useInView'
import type { SemesterScore } from '../../data/education'

const MAX_CGPA = 10

export function CGPAChart({ semesters }: { semesters: SemesterScore[] }) {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <div ref={ref} className={`cgpa-wrapper${inView ? ' in-view' : ''}`}>
      <p className="cgpa-caption">CGPA by semester </p>
      <div className="cgpa-chart" role="img" aria-label="CGPA per semester bar chart">
        {semesters.map((s, i) => {
          const heightPct = (s.cgpa / MAX_CGPA) * 100
          const delay = `${i * 0.08}s`
          return (
            <div className="cgpa-bar-col" key={s.sem} style={{ transitionDelay: delay }}>
              <span className="cgpa-value">{inView ? s.cgpa.toFixed(2) : ''}</span>
              <div className="cgpa-bar-track">
                <div
                  className="cgpa-bar-fill"
                  style={{ height: inView ? `${heightPct}%` : '0%', transitionDelay: delay }}
                />
              </div>
              <span className="cgpa-label">Sem {s.sem}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
