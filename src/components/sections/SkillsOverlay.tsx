import { skills } from '../../data/skills'

export function SkillsOverlay() {
  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <h1 style={{ fontSize: '1.8rem' }}>Skills &amp; Tech</h1>
      <div className="skills-grid">
        {skills.map((group) => (
          <div className="skill-card" key={group.id}>
            <div className="skill-icon">{group.icon}</div>
            <h3 className="skill-category">{group.category}</h3>
            <p className="skill-items">{group.items.join(', ')}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
