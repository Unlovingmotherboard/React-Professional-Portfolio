import React, {Suspense} from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import Portfolio from './components/Portfolio';
import { AppProvider } from './context/AppContext';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import './App.css';


// function Box(props) {
//     // This reference will give us direct access to the mesh
//     const meshRef = useRef()
//     // Set up state for the hovered and active state
//     const [hovered, setHover] = useState(false)
//     const [active, setActive] = useState(false)
//     // Subscribe this component to the render-loop, rotate the mesh every frame
//     useFrame((state, delta) => (meshRef.current.rotation.x += delta))
//     // Return view, these are regular three.js elements expressed in JSX
//     return (
//         <mesh
//             {...props}
//             ref={meshRef}
//             scale={active ? 1.5 : 1}
//             onClick={(event) => setActive(!active)}
//             onPointerOver={(event) => setHover(true)}
//             onPointerOut={(event) => setHover(false)}>
//             <boxGeometry args={[1, 1, 1]} />
//             <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
//         </mesh>
//     )
// }

const JapanaeseMapleTree = () => {
    const result = useLoader(GLTFLoader, '/japanese_maple/scene.gltf')

  return <primitive object={result.scene} />
  };

  const errPineTree = () => {
    const result = useLoader(GLTFLoader, '/errPineTree/scene.gltf')

  return <primitive object={result.scene} />
  };

  const PineTree3 = () => {
    const result = useLoader(GLTFLoader, '/pine_tree_3/scene.gltf')

  return <primitive object={result.scene} />
  };

  const PineTree2 = () => {
    const result = useLoader(GLTFLoader, '/pine_tree_2/scene.gltf')

  return <primitive object={result.scene} />
  };

const App = () => {
    return (
        <AppProvider>
            <div className='backgroundThreeJS'>
                <Canvas>
                    <ambientLight />
                    <pointLight position={[10, 10, 10]} />
                    {/* <Box position={[-1.2, 0, 0]} /> */}
                    <JapanaeseMapleTree position={[1,2,3]} className='japaneseMaple'/>
                    <PineTree3 position={[10,20,30]} />
                    <PineTree2 position={[40,30,15]} />
                </Canvas>
            </div>
            
            <div className='container'>
                <Portfolio />
            </div>
        </AppProvider>
    );
};


export default App;
