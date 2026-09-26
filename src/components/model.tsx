'use client'

import { useRef } from 'react'
import { Canvas, useFrame, type ThreeElements } from '@react-three/fiber'
import { useGLTF, CameraControls } from '@react-three/drei'
import type { Mesh } from 'three'

const Model = (props: ThreeElements['mesh']) => {
  const ref = useRef<Mesh>(null!)
  const model = useGLTF('/me.glb')
  useFrame(() => (ref.current.rotation.y += 0.005))
  return (
    <mesh {...props} ref={ref} scale={1}>
      <primitive object={model.scene} />
    </mesh>
  )
}

const ModelView = () => {
  return (
    <Canvas camera={{ position: [-1, 4, 7] }}>
      <Model position={[0, -2, 0]} />
      <CameraControls makeDefault />
      <ambientLight intensity={1.6} />
      <spotLight position={[10, 10, 10]} angle={0.5} penumbra={1} />
    </Canvas>
  )
}
export default ModelView
