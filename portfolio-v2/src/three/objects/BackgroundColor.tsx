import { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Color } from 'three'
import { useSceneStore, type SectionId } from '../../store/useSceneStore'

const sectionBg: Record<SectionId, string> = {
  hero: '#050510',
  education: '#040d14',
  experience: '#120508',
  projects: '#0a0c14',
  skills: '#0c0618',
  contact: '#041210',
}

export function BackgroundColor() {
  const { scene } = useThree()
  const activeSection = useSceneStore((s) => s.activeSection)
  const target = useRef(new Color(sectionBg.hero))

  useFrame((_, delta) => {
    target.current.set(sectionBg[activeSection])
    if (!scene.background || !(scene.background instanceof Color)) {
      scene.background = new Color(sectionBg.hero)
    }
    ;(scene.background as Color).lerp(target.current, Math.min(delta * 2, 1))
  })

  return null
}
