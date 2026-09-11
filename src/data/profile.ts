export interface Profile {
  name: string
  location: string
  email: string
  summary: string
  socials: { github: string; linkedin: string; leetcode: string; instagram: string; site: string }
}

export const profile: Profile = {
  name: 'Amar Sinha',
  location: 'Kolkata, India',
  email: 'sinhaamar178@gmail.com',
  summary:
    'Computer Science (Data Science) undergraduate with hands-on experience in machine learning, computer vision, and full-stack development. Applied project experience in object detection, real-time tracking, and end-to-end web deployment.',
  socials: {
    github: 'https://github.com/amar2512003',
    linkedin: 'https://www.linkedin.com/in/amar-sinha2512/',
    leetcode: 'https://leetcode.com/u/Amar2512/',
    instagram: 'https://www.instagram.com/a.m.a.r_25.12/',
    site: 'https://v0-amarsinhaaa.vercel.app/',
  },
}