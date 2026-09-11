export interface SkillGroup {
  id: string
  category: string
  icon: string
  items: string[]
}

export const skills: SkillGroup[] = [
  {
    id: 'languages',
    category: 'Languages',
    icon: '🐍',
    items: ['Python', 'JavaScript', 'TypeScript', 'R', 'Kotlin', 'SQL'],
  },
  {
    id: 'ml-cv',
    category: 'Machine Learning & Computer Vision',
    icon: '📊',
    items: ['YOLOv8', 'ByteTrack', 'DeepFace', 'OpenCV', 'Scikit-learn', 'R Shiny'],
  },
  {
    id: 'frontend-3d',
    category: 'Frontend & 3D',
    icon: '🎮',
    items: ['React', 'Three.js', 'React Three Fiber', 'Zustand', 'Leaflet.js'],
  },
  {
    id: 'backend-apis',
    category: 'Backend & APIs',
    icon: '⚡',
    items: ['Node.js', 'Express', 'FastAPI', 'Socket.IO', 'WebRTC', 'REST APIs'],
  },
  {
    id: 'databases',
    category: 'Databases',
    icon: '🗄️',
    items: ['MongoDB', 'PostgreSQL'],
  },
  {
    id: 'devops-cloud',
    category: 'DevOps & Cloud',
    icon: '☁️',
    items: ['Docker', 'CI/CD', 'Render', 'Vercel', 'Netlify', 'Git', 'GitHub'],
  },
]
