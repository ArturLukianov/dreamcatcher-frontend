import * as THREE from "three";
import { Clouds, Cloud, PointerLockControls, Sky, Stats } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
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
      <Canvas camera={{ fov: 80, position: [0, 3, 0], near: 0.001, far: 100.0 }}>
        <PointerLockControls />
        <Sky sunPosition={[20, 20, 20]} />

        <Clouds material={THREE.MeshLambertMaterial}>
          <Cloud position={[0,500,0]} segments={100} bounds={[500, 10, 500]} volume={100} speed={0.01} color="white" opacity={0.1} concentrate={"random"} />
        </Clouds>
        <ambientLight intensity={4.0} />
{/*        <Suspense fallback={null}>
          <Grass width={10} instances={500000}/>
        </Suspense>*/}
        <Truss1/>
        <Building position={[0, 0]} />
        <Building position={[5, 5]} />
        <Stats />
      </Canvas>
    </div>
  );
}
