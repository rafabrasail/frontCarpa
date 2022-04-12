import React, { useRef, useEffect, Component } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Stats from 'three/examples/jsm/libs/stats.module'
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import ConfigRobotComponent, {joints} from './robot_config';


const Base3dComponent = () => {
  const mountRef = useRef(null);
  let model

  // console.log(joints)

  useEffect(() => {
    //Data from the canvas
    const currentRef = mountRef.current;
    const { clientWidth: width, clientHeight: height } = currentRef;

    //Scene, camera, renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 1, 1000);
    scene.add(camera);
    camera.up.set(0, 0, 1);
    camera.position.set(0,150, 50);    
    camera.lookAt(new THREE.Vector3());

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    currentRef.appendChild(renderer.domElement);

    //OrbitControls
    const orbitControls = new OrbitControls(camera, renderer.domElement);
    orbitControls.enableDamping = true;

    //Resize canvas
    const resize = () => {
      renderer.setSize(currentRef.clientWidth, currentRef.clientHeight);
      camera.aspect = currentRef.clientWidth / currentRef.clientHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", resize);

    //Animate the scene
    const animate = () => {
      orbitControls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    //Light
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);


    //Grid
    const grid = new THREE.GridHelper( 100, 100 );
    grid.geometry.rotateX( Math.PI / 2 );
    grid.material.opacity = 0.25;
    grid.material.transparent = true;
    scene.add( grid );



    // //cube
    // const cube = new THREE.Mesh(
    //   new THREE.BoxBufferGeometry(1, 1, 1),
    //   new THREE.MeshBasicMaterial()
    // );
    // scene.add(cube);

    //loader
    const gltfLoader = new GLTFLoader();
    gltfLoader.load('./modules/carpa/carpaUp.glb', 
    function(gltf) {
        model = gltf.scene
        model.rotateX(  Math.PI / 2 )
        model.rotateY(  Math.PI )
        // model.geometry.rotateX( Math.PI / 2 );
        scene.add( model )
    });


    return () => {
      window.removeEventListener("resize", resize);
      currentRef.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      className='Contenedor3D container'
      ref={mountRef}
      style={{ width: "100%", height: "100vh" }}
    ></div>
  );
}

export default Base3dComponent;











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