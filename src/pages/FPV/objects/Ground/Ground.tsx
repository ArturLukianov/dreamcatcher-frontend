import React, { Suspense } from "react";
import * as THREE from "three";

import groundDiff from './rocky_terrain_02_diff_1k.jpg';
import groundDisp from './rocky_terrain_02_disp_1k.png';
import groundNormal from './rocky_terrain_02_nor_gl_1k.png';
import groundRoguh from './rocky_terrain_02_rough_1k.png';
import { useTexture } from "@react-three/drei";

function repeatMap(map) {
    map.wrapS = THREE.RepeatWrapping;
    map.wrapT = THREE.RepeatWrapping;
    map.repeat.set(20, 20);
}

export function Ground() {
  const props = useTexture({
    map: groundDiff,
    displacementMap: groundDisp,
    normalMap: groundNormal,
    roughnessMap: groundRoguh,
    // aoMap: 'PavingStones092_1K_AmbientOcclusion.jpg',
  })

  repeatMap(props.map);
  repeatMap(props.normalMap);
  repeatMap(props.displacementMap);
  repeatMap(props.roughnessMap);

  return (
    <mesh position={[0, -5, 0]} rotation-x={-Math.PI / 2}>
      <planeGeometry args={[500, 500]} />

      <meshStandardMaterial {...props} />
    </mesh>
  );
}

