import { React, Suspense, useRef } from 'react';
import "./index.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Physics, useBox, usePlane } from "@react-three/cannon"

function Box() {
    const [ref, api] = useBox(() => ({ mass: 1 }));
    return (
        <mesh 
            ref={ref} position={[0, 2, 0]}
            onClick = {() => api.velocity.set(0, 2, 0)}
        >
            <boxBufferGeometry attach='geometry' />
            <meshLambertMaterial attach='material' color='hotpink' />
        </mesh>
    )
}

function Plane() {
    const [ref] = usePlane(() => ({
        rotation: [-Math.PI / 2, 0, 0],
    }));
    return (
        <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeBufferGeometry attach='geometry' args={[100, 100]} />
            <meshLambertMaterial attach='material' color='blue' />
        </mesh>
    )
}

function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('IRB120_3-58_IRC5_Base.rev1.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Cube.geometry} material={materials.Material} />
      <mesh
        geometry={nodes['IRB120_3-58_IRC5_Base_rev1'].geometry}
        material={nodes['IRB120_3-58_IRC5_Base_rev1'].material}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

// function BaseIRB() {
//     const {nodes, materials} = useGLTF('./static/IRB120_3-58_IRC5_Base.rev2.gltf')
//     return (
//         <mesh geometry={nodes.robot.geometry} material={materials.metal} />
//     )    
// }

export default function Base3dComponent() {
    return (
        <div className='canvas'>
            <Canvas>
                <OrbitControls />
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 15, 10]} angle={0.3} />
                <Physics>
                    <Box />
                    <Plane />
                </Physics>
                <Suspense fallback={null}>
                    <Model />
                </Suspense>
                
            </Canvas>
        </div>
    )
}