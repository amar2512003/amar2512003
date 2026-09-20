import { profile } from '../../data/profile'
import { SocialLinks } from '../ui/SocialLinks'
import { useInView } from '../../hooks/useInView'

export function HeroOverlay() {
  const { ref, inView } = useInView<HTMLElement>()

  return (
    <section id="hero" ref={ref} className={`hero-section${inView ? ' in-view' : ''}`}>
      <div className="hero-badge">
        <span className="hero-badge-dot" />
        Available for opportunities
      </div>
      <div className="hero-top">
        <div className="hero-photo-wrapper">
          <img
            src="/profile.png"
            alt={profile.name}
            className="hero-photo"
          />
          <div className="hero-photo-ring" />
        </div>
        <div className="hero-text">
          <h1>
            {profile.name}
            <br />
            <span className="accent">Full-Stack & ML Developer</span>
          </h1>
          <p className="hero-location">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {profile.location}
          </p>
        </div>
      </div>
      <p className="hero-summary">{profile.summary}</p>
      <SocialLinks />
      <div className="hero-scroll-indicator">
        <span>Scroll to explore</span>
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
