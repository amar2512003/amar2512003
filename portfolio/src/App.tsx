import { HeroScene } from './scenes/HeroScene'
import { Navbar } from './components/layout/Navbar'
import { HeroOverlay } from './components/sections/HeroOverlay'
import { EducationOverlay } from './components/sections/EducationOverlay'
import { ExperienceOverlay } from './components/sections/ExperienceOverlay'
import { ProjectsOverlay } from './components/sections/ProjectsOverlay'
import { SkillsOverlay } from './components/sections/SkillsOverlay'
import { ContactOverlay } from './components/sections/ContactOverlay'
import { useSectionObserver } from './hooks/useSectionObserver'

function App() {
  useSectionObserver(['hero', 'education', 'experience', 'projects', 'skills', 'contact'])

  return (
    <>
      <div className="canvas-layer">
        <HeroScene />
      </div>
      <Navbar />
      <main className="content-layer">
        <HeroOverlay />
        <EducationOverlay />
        <ExperienceOverlay />
        <ProjectsOverlay />
        <SkillsOverlay />
        <ContactOverlay />
      </main>
    </>
  )
}

export default App
