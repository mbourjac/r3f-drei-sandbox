import { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';
import { Perf } from 'r3f-perf';
import { Model } from './Model';

export const Experience = () => {
  return (
    <>
      <Perf position="top-left" />

      <OrbitControls makeDefault />

      <directionalLight castShadow position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />

      <color args={['ivory']} attach="background" />

      <mesh
        receiveShadow
        position-y={-1}
        rotation-x={-Math.PI * 0.5}
        scale={10}
      >
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>

      <Suspense>
        <Model />
      </Suspense>
    </>
  );
};
