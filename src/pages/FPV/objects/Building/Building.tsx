
import React from "react";
import { TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import building from './ll18.fbx';


export default function Building(props: { position: number[] }) {
  const { position } = props;
  // return (
  //   <mesh position={[position[0], 0, position[1]]}>
  //     <boxGeometry  args={[2,3,2]}/>
  //     <meshBasicMaterial map={texture} />
  //   </mesh>
  // );

  const fbx = useLoader(FBXLoader, building)
  console.log(fbx);
  return <primitive object={fbx} position={[position[0], -1, position[1]]} />
}