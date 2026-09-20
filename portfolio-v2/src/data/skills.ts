export interface SkillGroup {
  id: string
  category: string
  icon: 'languages' | 'ml-cv' | 'frontend-3d' | 'backend-apis' | 'databases' | 'devops-cloud'
  items: string[]
}

export const skills: SkillGroup[] = [
  {
    id: 'languages',
    category: 'Languages',
    icon: 'languages',
    items: ['Python', 'Java', 'JavaScript', 'TypeScript', 'R', 'Kotlin', 'SQL'],
  },
  {
    id: 'ml-cv',
    category: 'Machine Learning & Computer Vision',
    icon: 'ml-cv',
    items: ['YOLOv8', 'ByteTrack', 'DeepFace', 'OpenCV', 'Scikit-learn', 'R Shiny'],
  },
  {
    id: 'frontend-3d',
    category: 'Frontend & 3D',
    icon: 'frontend-3d',
    items: ['React', 'Three.js', 'React Three Fiber', 'Zustand', 'Leaflet.js'],
  },
  {
    id: 'backend-apis',
    category: 'Backend & APIs',
    icon: 'backend-apis',
    items: ['Node.js', 'Express', 'FastAPI', 'Socket.IO', 'WebRTC', 'REST APIs'],
  },
  {
    id: 'databases',
    category: 'Databases',
    icon: 'databases',
    items: ['MongoDB', 'PostgreSQL'],
  },
  {
    id: 'devops-cloud',
    category: 'DevOps & Cloud',
    icon: 'devops-cloud',
    items: ['Docker', 'CI/CD', 'Render', 'Vercel', 'Netlify', 'Git', 'GitHub'],
  },
]
