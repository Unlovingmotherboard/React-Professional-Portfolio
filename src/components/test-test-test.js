import React from "react";
import { Canvas } from "@react-three/fiber";
import { Plane } from "@react-three/drei";

function BackgroundGrid() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <Plane args={[100, 100]} rotation={[-Math.PI / 2, 0, 0]}>
        <meshBasicMaterial color="lightgrey" wireframe={true} />
      </Plane>
    </Canvas>
  );
}

export default BackgroundGrid;