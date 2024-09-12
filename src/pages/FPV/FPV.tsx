import * as THREE from "three";
import { Clouds, Cloud, PointerLockControls, Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { TextureLoader } from "three";
import Building from "./objects/Building/Building";
import Grass from "./objects/Grass/Grass";

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

        <Clouds material={THREE.MeshLambertMaterial}>
          <Cloud position={[0,500,0]} segments={100} bounds={[500, 10, 500]} volume={100} speed={0.01} color="white" opacity={0.1} concentrate={"random"} />
        </Clouds>
        <ambientLight intensity={4.0} />
        <Ground />

        <Building position={[-10, -10]} />
      </Canvas>
    </div>
  );
}
