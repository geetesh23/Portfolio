import {Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import CanvasLoader from '../Loader'

const Earth = () => {

  const earth = useGLTF('./planet/scene.gltf')

  return (
    <mesh
    >
      <hemisphereLight intensity={1.5} groundColor='black' />
      <pointLight intensity={1.8} />
      <spotLight
      position={[-20, 50, 10]}
      angle={0.12}
      penumbra={1}
      intensity={1}
      castShadow
      shadow-mapSiz = {1024}
      />
      <primitive 
      object={earth.scene}
      scale= {0.017}
      rotation = {[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const EarthCanvas = ()=>{
  return(
    <Canvas shadows frameloop='demand' gl={{preserveDrawingBuffer:true}} camera={{fov:45, near:0.1, far:200,position:[-4, 3, 6]}}>
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls scale={0.25} autoRotate enableZoom={false} maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2} />   
        <Earth/>
      </Suspense>
    </Canvas>
  )
}
export default EarthCanvas ;