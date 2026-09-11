import { profile } from '../../data/profile'

const icons = {
  github: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56
        0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71
        1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.69
        0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18
        3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.4-5.25 5.68.41.36.78 1.07.78 2.16
        0 1.56-.01 2.82-.01 3.2 0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05
        c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  ),
  leetcode: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
      <path d="M13.98 22.5a4.3 4.3 0 0 1-3.06-1.27l-3.4-3.4a4.32 4.32 0 0 1 0-6.1l5.35-5.36a4.32 4.32 0 0 1 6.1 0
        l1.7 1.7a1.13 1.13 0 0 1-1.6 1.6l-1.7-1.7a2.07 2.07 0 0 0-2.9 0l-5.35 5.36a2.07 2.07 0 0 0 0 2.9l3.4 3.4
        a2.07 2.07 0 0 0 2.9 0l1.7-1.7a1.13 1.13 0 0 1 1.6 1.6l-1.7 1.7a4.3 4.3 0 0 1-3.04 1.27Zm7.34-8.66H10.9
        a1.13 1.13 0 0 1 0-2.26h10.42a1.13 1.13 0 0 1 0 2.26Z" />
    </svg>
  ),
}

export function SocialLinks() {
  const links = [
    { key: 'github', href: profile.socials.github, label: 'GitHub' },
    { key: 'linkedin', href: profile.socials.linkedin, label: 'LinkedIn' },
    { key: 'leetcode', href: profile.socials.leetcode, label: 'LeetCode' },
  ] as const

  return (
    <div className="social-links">
      {links.map((link) => (
        <a
          key={link.key}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          aria-label={link.label}
          className="social-link"
        >
          {icons[link.key]}
          <span>{link.label}</span>
        </a>
      ))}
    </div>
  )
}
