import { profile } from '../../data/profile'
import { SocialLinks } from '../ui/SocialLinks'

export function HeroOverlay() {
  return (
    <section id="hero">
      <div className="hero-top">
        <img
          src="/profile.png"
          alt={profile.name}
          className="hero-photo"
        />
        <h1>
          {profile.name}
          <br />
          <span className="accent">Full-Stack Developer &amp; ML Engineer</span>
        </h1>
      </div>
      <p>{profile.summary}</p>
      <SocialLinks />
    </section>
  )
}
