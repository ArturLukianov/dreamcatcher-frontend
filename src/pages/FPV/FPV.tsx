import { Cloud, PointerLockControls, Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { TextureLoader } from "three";
import Building from "./objects/Building/Building";

function Ground() {
  return (
    <mesh position={[0, -5, 0]} rotation-x={-Math.PI / 2}>
      <planeGeometry args={[500, 500]} />
      <meshStandardMaterial color="gray" />
    </mesh>
  );
}

export default function FPV() {
  return (
    <div id="fpv-canvas">
      <Canvas camera={{ fov: 50 }}>
        <PointerLockControls />
        <Sky sunPosition={[20, 20, 20]} />

        <Cloud position={[0,50,0]} segments={50} bounds={[100, 10, 100]} volume={30} speed={0.01} color="white" opacity={0.1} />
        <ambientLight intensity={0.5} />
        <Ground />
        <Building position={[0, 0]} />
        <Building position={[5, 5]} />
      </Canvas>
    </div>
  );
}
