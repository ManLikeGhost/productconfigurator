import { MeshReflectorMaterial, PresentationControls, Stage } from '@react-three/drei'
//  Loading the model directly 
// import { useLoader } from '@react-three/fiber'
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { Suspense } from 'react'
//  Loading the model directly 
import  Chair from './Chair.jsx'



const Experience = () => {
  //  Loading the model directly 
  // const gltf = useLoader(GLTFLoader, './models/chair.gltf')
  return (
    <>
      <PresentationControls
        speed={1.5}
        global
        polar={[-0.1, Math.PI / 4]}
        rotation={[Math.PI / 8, Math.PI / 4, 0]}
      >
        <Stage environment="city" intensity={0.6} castShadow={false}>
          <Suspense fallback={null}>
            <Chair/>
        </Suspense>
          {/* Loading the model directly */}
          {/* <Suspense fallback={null}><primitive object={gltf.scene} /></Suspense> */}
          {/* Loading the model directly */}
          {/* Initial box mesh */}
          {/* <mesh>
          <boxGeometry />
          <meshNormalMaterial />
        </mesh> */}
          {/* Initial box mesh */}
        </Stage>
        <mesh rotation={[-Math.PI / 2, 0, 0]} position-y={-2}>
          <planeGeometry args={[100, 100]} />
          <MeshReflectorMaterial
            blur={[300, 100]}
            resolution={2048}
            mixBlur={1}
            mixStrength={40}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#101010"
            metalness={0.5} mirror={0} />
        </mesh>
      </PresentationControls>
    </>
  )
}

export default Experience