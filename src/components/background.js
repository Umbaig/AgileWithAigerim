import { Stage, PresentationControls, Center, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from 'react'
import { WorkAreaModel } from "./workareamodel";


function Background() {
    return (
        <>
            {/* <PresentationControls speed={1.5} global polar={[-0.1, Math.PI / 4]}> */}
            <Canvas dpr={[1, 2]} camera={{ fov: 45, position: [0, 0, 8] }} style={{ "position": "fixed", "top": 0, "width": "100%" }}>
                <directionalLight intensity={0.2} args={[0xf2b407, 1]} position={[0, 0, 1]} />
                {/* <Stage intensity={0.3} shadows={false} environment={"city"}> */}
                <Environment preset="sunset" />
                <Center>
                    <WorkAreaModel scale={5} />
                </Center>
                {/* </Stage> */}
            </Canvas>
            {/* </PresentationControls> */}
        </>
    );
}

export default Background;