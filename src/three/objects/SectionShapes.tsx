import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import type { Group, Mesh } from 'three'
import { useSceneStore, type SectionId } from '../../store/useSceneStore'

interface ShapeDef {
  id: SectionId
  color: string
  geometry: React.ReactNode
  metalness?: number
  roughness?: number
  emissive?: string
  emissiveIntensity?: number
}

const shapes: ShapeDef[] = [
  { id: 'hero', color: '#6ee7b7', geometry: <torusKnotGeometry args={[1.1, 0.32, 180, 24]} /> },
  { id: 'education', color: '#7dd3fc', geometry: <icosahedronGeometry args={[1.3, 0]} /> },
  { id: 'experience', color: '#fca5a5', geometry: <octahedronGeometry args={[1.4, 0]} /> },
  {
    id: 'projects',
    color: '#201c01',
    geometry: <cylinderGeometry args={[1.1, 1.1, 1.6, 6, 1]} />,
    metalness: 0.35,
    roughness: 0.35,
    emissive: '#fde047',
    emissiveIntensity: 0.6,
  },
  { id: 'skills', color: '#c4b5fd', geometry: <torusGeometry args={[1, 0.4, 32, 64]} /> },
  { id: 'contact', color: '#67e8f9', geometry: <sphereGeometry args={[1.3, 32, 32]} /> },
]

function SectionShape({ def }: { def: ShapeDef }) {
  const groupRef = useRef<Group>(null)
  const meshRef = useRef<Mesh>(null)
  const activeSection = useSceneStore((s) => s.activeSection)

  useFrame((_, delta) => {
    if (!groupRef.current || !meshRef.current) return
    const target = activeSection === def.id ? 1 : 0
    const current = groupRef.current.scale.x
    const next = current + (target - current) * Math.min(delta * 4, 1)
    groupRef.current.scale.setScalar(next)
    meshRef.current.rotation.x += delta * 0.25
    meshRef.current.rotation.y += delta * 0.35
  })

  return (
    <group ref={groupRef} scale={def.id === 'hero' ? 1 : 0}>
      <mesh ref={meshRef}>
        {def.geometry}
        <meshStandardMaterial
          color={def.color}
          roughness={def.roughness ?? 0.25}
          metalness={def.metalness ?? 0.6}
          emissive={def.emissive ?? '#000000'}
          emissiveIntensity={def.emissiveIntensity ?? 0}
        />
      </mesh>
    </group>
  )
}

export function SectionShapes() {
  return (
    <>
      {shapes.map((def) => (
        <SectionShape key={def.id} def={def} />
      ))}
    </>
  )
}
