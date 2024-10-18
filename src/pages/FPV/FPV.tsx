import * as THREE from "three";
import {
  Clouds,
  Cloud,
  PointerLockControls,
  Sky,
  Stats,
  useTexture,
} from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import React, { Suspense } from "react";
import { TextureLoader } from "three";
import Building from "./objects/Building/Building";
import Grass from "./objects/Grass/Grass";
import { Ground } from "./objects/Ground/Ground";
import { css } from "@emotion/css";
import { Loader2 } from "lucide-react";

function Loading() {
  return (
    <div
      className={css`
        width: 100%;
        min-height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      `}
    >
      <div
        className={css`
          display: flex;
          flex-direction: row;
          gap: 5px;
          align-items: center;
        `}
      >
        <Loader2
          size={42}
          className={css`
            animation-name: spin;
            animation-duration: 400ms;
            animation-iteration-count: infinite;
            animation-timing-function: linear;
          `}
        />
        <h1>Загрузка...</h1>
      </div>
    </div>
  );
}

export default function FPV() {
  return (
    <div id="fpv-canvas">
      <Suspense fallback={<Loading />}>
        <Canvas
          camera={{
            fov: 80,
            position: [0, 3, 0],
            near: 0.001,
            far: 100.0,
            rotation: [0, 90, 0],
          }}
        >
          <PointerLockControls />
          <Sky sunPosition={[20, 20, 20]} />

          <Clouds material={THREE.MeshLambertMaterial}>
            <Cloud
              position={[0, 70, 0]}
              segments={20}
              bounds={[70, 10, 70]}
              volume={100}
              speed={0.01}
              color="white"
              opacity={0.3}
              concentrate={"random"}
            />
          </Clouds>
          <ambientLight intensity={4.0} />
          <Stats />
          <Ground />

          {/* Show buildings and objects */}
          <Building position={[-10, -10]} />
        </Canvas>
      </Suspense>
    </div>
  );
}
