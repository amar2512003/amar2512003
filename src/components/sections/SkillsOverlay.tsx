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

const ICONS: Record<SkillGroup['icon'], LucideIcon> = {
  languages: Braces,
  'ml-cv': BrainCircuit,
  'frontend-3d': Layers,
  'backend-apis': Server,
  databases: Database,
  'devops-cloud': CloudCog,
}

export function SkillsOverlay() {
  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <h1 style={{ fontSize: '1.8rem' }}>Skills &amp; Tech</h1>
      <div className="skills-grid">
        {skills.map((group) => {
          const Icon = ICONS[group.icon]
          return (
            <div className="skill-card" key={group.id}>
              <div className="skill-icon">
                <Icon size={22} strokeWidth={1.75} />
              </div>
              <h3 className="skill-category">{group.category}</h3>
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
