import { projects } from '../../data/projects'
import { ScreenshotCarousel } from '../ui/ScreenshotCarousel'

export function ProjectsOverlay() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      {projects.map((project) => (
        <div key={project.id} style={{ marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '1.8rem' }}>{project.title}</h1>
          <p>{project.description}</p>
          {project.screenshots && project.screenshots.length > 0 && (
            <ScreenshotCarousel images={project.screenshots} alt={project.title} />
          )}
          <div>
            {project.stack.map((s) => (
              <span className="tag" key={s}>
                {s}
              </span>
            ))}
          </div>
          <p>
            {project.links.github && (
              <a href={project.links.github} target="_blank" rel="noreferrer" className="project-link">
                View on GitHub →
              </a>
            )}
            {project.links.github && project.links.demo && ' · '}
            {project.links.demo && (
              <a href={project.links.demo} target="_blank" rel="noreferrer" className="project-link">
                Live Demo →
              </a>
            )}
          </p>
        </div>
      ))}
    </section>
  )
}
