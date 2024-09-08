import { PointerLockControls, Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { TextureLoader } from "three";
import leatherImage from './leather.jpg';

function Ground() {
  return (
    <mesh position={[0, -5, 0]} rotation-x={-Math.PI / 2}>
      <planeGeometry args={[500, 500]} />
      <meshStandardMaterial color="gray" />
    </mesh>
  );
}

const texture = new TextureLoader().load(leatherImage)

function Building(props: { position: number[] }) {
  const { position } = props;
  return (
    <mesh position={[position[0], 0, position[1]]}>
      <boxGeometry  args={[2,3,2]}/>
      <meshBasicMaterial map={texture} />
    </mesh>
  );
}

export default function FPV() {
  return (
    <div id="fpv-canvas">
      <Canvas camera={{ fov: 50 }}>
        <PointerLockControls />
        <Sky sunPosition={[20, 20, 20]} />
        <ambientLight intensity={0.5} />
        <Ground />
        <Building position={[0, 0]} />
        <Building position={[5, 5]} />
      </Canvas>
    </div>
  );
}
