import { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Color } from 'three'
import { useSceneStore, type SectionId } from '../../store/useSceneStore'

const sectionBg: Record<SectionId, string> = {
  hero: '#0a0a0f',
  education: '#0a0f14',
  experience: '#140a0a',
  projects: '#14110a',
  skills: '#0f0a14',
  contact: '#0a1412',
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
