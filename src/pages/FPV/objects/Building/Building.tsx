
import * as THREE from "three";
import React from "react";
import { TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import building from './building.fbx';
import { useFBX, Wireframe } from "@react-three/drei";


export default function Building(props: { position: number[] }) {
  const { position } = props;
  // return (
  //   <mesh position={[position[0], 0, position[1]]}>
  //     <boxGeometry  args={[2,3,2]}/>
  //     <meshBasicMaterial map={texture} />
  //   </mesh>
  // );

  const fbx = useFBX(building)
  fbx.scale.multiplyScalar(0.1);
  let box3 = new THREE.Box3().setFromObject(fbx);
  let size = new THREE.Vector3();
  console.log(box3.getSize(size));

  return <primitive object={fbx} position={[position[0] - 10, 1, position[1] - 5]} />
}