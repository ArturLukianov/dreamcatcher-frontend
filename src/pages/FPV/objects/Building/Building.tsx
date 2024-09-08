
import React from "react";
import { TextureLoader } from "three";
import leatherImage from './leather.jpg';

const texture = new TextureLoader().load(leatherImage)

export default function Building(props: { position: number[] }) {
  const { position } = props;
  return (
    <mesh position={[position[0], 0, position[1]]}>
      <boxGeometry  args={[2,3,2]}/>
      <meshBasicMaterial map={texture} />
    </mesh>
  );
}