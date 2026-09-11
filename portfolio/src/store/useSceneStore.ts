import { create } from 'zustand'

export type SectionId = 'hero' | 'education' | 'experience' | 'projects' | 'skills' | 'contact'

interface SceneState {
  activeSection: SectionId
  setActiveSection: (id: SectionId) => void
}

export const useSceneStore = create<SceneState>((set) => ({
  activeSection: 'hero',
  setActiveSection: (id) => set({ activeSection: id }),
}))
