
import { PerspectiveCamera } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { motion } from "framer-motion-3d"
import { Html } from '@react-three/drei'
import './demo.css';

function Cube(props) {
  const meshRef = useRef();
  var a = 1;
  const [hidden, set] = useState()
  var left = false;

  const [rot, setRot] = useState(false);

  const setTurn = () => {
    setRot(!rot);
  }

  // useFrame(() => {
  //   if (!meshRef.current) {
  //     return;
  //   }

  //   //console.log(props.leftRot)


  //   // meshRef.current.rotation.x += 0.01;
  //   // meshRef.current.rotation.y += 0.01;

  //   // meshRef.current.scale += 0.01;
  //   // meshRef.current.scale += 0.01;

  //   //a += 0.01;
  //   // meshRef.current.position.set(0,0,a)
  //   // meshRef.current.scale.set(a,a,a)
  // });

  return (
    <motion.mesh
      onClick={setTurn}
      animate={rot == true ? { rotateY: -1.57, scaleY: [null, 0.8, 1], scaleX: [null, 0.8, 1], scaleZ: [null, 0.8, 1]} : { rotateY: 0, scaleY: [null, 0.8, 1], scaleX: [null, 0.8, 1], scaleZ: [null, 0.8, 1] }}
      transition={{
        duration: 1,
        // scaleX: {duration: 0.1},
        // scaleY: {duration: 0.1},
        // scaleZ: {duration: 0.1},
      }}
      ref={meshRef}
      >

      <PerspectiveCamera />
      <boxGeometry args={[4,4,4]} />
      <meshStandardMaterial color="#ffffff" />
      {/* <Html transform={true} occlude position={[1, 1, 1]} className="label" center> */}
      <Html
        transform
        position={[0, 0, 2.05]}
        occlude
        // onOcclude={set}
        // style={{
        //   transition: 'all 4s',
        //   opacity: hidden ? 0 : 1,
        //   // transform: `scale(${hidden ? 0.5 : 1})`
        // }}
        >
        <p>blabla</p>
        <img class="imgAigerim" src="/pictures/aigerim.jpg" />
      </Html>
      <Html
        transform
        position={[0, 1, 2.05]}
        occlude
        // onOcclude={set}
        // style={{
        //   transition: 'all 4s',
        //   opacity: hidden ? 0 : 1,
        //   // transform: `scale(${hidden ? 0.5 : 1})`
        // }}
        >
        <p>Consultation</p>
      </Html>

    </motion.mesh>
  );
}

export default function R3fDemo() {

  var l = false;
  const [le, setL] = useState(false)

  const rotateLeft = () => {
    setL(true)
  }

  return (
    <>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Cube />
      </Canvas>
    </>
  );
}