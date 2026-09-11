import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { SectionShapes } from '../three/objects/SectionShapes'
import { BackgroundColor } from '../three/objects/BackgroundColor'

export function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }}>
      <BackgroundColor />
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 3, 3]} intensity={1.2} />
      <SectionShapes />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.4} />
    </Canvas>
  )
}
