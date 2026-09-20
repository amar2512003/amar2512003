import {
  Braces,
  BrainCircuit,
  Layers,
  Server,
  Database,
  CloudCog,
  type LucideIcon,
} from 'lucide-react'
import { skills, type SkillGroup } from '../../data/skills'
import { useInView } from '../../hooks/useInView'

const ICONS: Record<SkillGroup['icon'], LucideIcon> = {
  languages: Braces,
  'ml-cv': BrainCircuit,
  'frontend-3d': Layers,
  'backend-apis': Server,
  databases: Database,
  'devops-cloud': CloudCog,
}

export function SkillsOverlay() {
  const { ref, inView } = useInView<HTMLElement>()

  return (
    <section id="skills" ref={ref} className={`skills-section${inView ? ' in-view' : ''}`}>
      <div className="section-header">
        <span className="section-number">04</span>
        <h2>Skills</h2>
      </div>
      <h3 className="skills-subtitle">Skills & Tech</h3>
      <div className="skills-grid">
        {skills.map((group, i) => {
          const Icon = ICONS[group.icon]
          return (
            <div
              className="skill-card glass-card"
              key={group.id}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="skill-icon">
                <Icon size={22} strokeWidth={1.75} />
              </div>
              <h4 className="skill-category">{group.category}</h4>
              <div className="skill-items">
                {group.items.map((item) => (
                  <span className="skill-tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
