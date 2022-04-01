import { React, Suspense, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Stats from 'three/examples/jsm/libs/stats.module'
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js';

export default function Base3dComponent() {
    return(
        <div>My 3d</div>
    )
}













// import { React, Suspense, useRef } from 'react';
// import "../index.css";

// // import { Controls, useControl } from 'react-three-gui';
// import { Canvas, useThree, useFrame } from "@react-three/fiber";
// import { OrbitControls, useGLTF } from "@react-three/drei";
// import { Physics, useBox, usePlane } from "@react-three/cannon"
// import * as THREE from 'three'
// import AxisComponent from './AxisComponent';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

// function Box() {
//     const [ref, api] = useBox(() => ({ mass: 1 }));
//     return (
//         <mesh 
//             ref={ref} position={[0, 2, 0]}
//             onClick = {() => api.velocity.set(0, 2, 0)}
//         >
//             <boxBufferGeometry attach='geometry' />
//             <meshLambertMaterial attach='material' color='hotpink' />
//         </mesh>
//     )
// }

// function Plane() {
//     const [ref] = usePlane(() => ({
//         rotation: [-Math.PI / 2, 0, 0],
//     }));
//     return (
//         <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
//             <planeBufferGeometry attach='geometry' args={[100, 100]} />
//             <meshLambertMaterial attach='material' color='blue' />
//         </mesh>
//     )
// }

// function Model({ ...props }) {
//   const group = useRef()
//   const { nodes, materials } = useGLTF('IRB120_3-58_IRC5_Base.rev1.glb')
//   return (
//     <group ref={group} {...props} dispose={null}>
//       <mesh geometry={nodes.Cube.geometry} material={materials.Material} />
//       <mesh
//         geometry={nodes['IRB120_3-58_IRC5_Base_rev1'].geometry}
//         material={nodes['IRB120_3-58_IRC5_Base_rev1'].material}
//         rotation={[Math.PI / 2, 0, 0]}
//       />
//     </group>
//   )
// }

// function CarpaWeb() {
//     const {nodes, materials} = useGLTF('./assets/carpaTo.glb')
//     return (
//         <mesh geometry={nodes.robot.geometry} material={materials.metal} />
//     )    
// }

// // function BaseIRB() {
// //     const {nodes, materials} = useGLTF('./static/IRB120_3-58_IRC5_Base.rev2.gltf')
// //     return (
// //         <mesh geometry={nodes.robot.geometry} material={materials.metal} />
// //     )    
// // }

// export default function Base3dComponent() {
//     return (
//         <div className='canvas'>
//             {/* <ControlsProvider.Provider> */}
//                 <Canvas camera={{ up: [0, 0, 1], position: [10, -10, 10]}}>
//                     <OrbitControls />
//                     <ambientLight intensity={0.5} />
//                     <spotLight position={[10, 15, 10]} angle={0.3} />
//                     {/* <CarpaWeb /> */}
//                     {/* <AxisComponent position={[0,0,0]} rotation={[0, 0, 0]} />
//                     <AxisComponent position={[3,4,5]} rotation={[Math.PI/4, 0, 0]} /> */}

//                     {/* <Suspense fallback={null}>
//                         <Model />
//                     </Suspense> */}
                    
//                 </Canvas>
//             {/* </ControlsProvider.Provider> */}
//         </div>
//     )
// }