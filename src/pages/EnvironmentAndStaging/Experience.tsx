import { useRef } from 'react';
import { OrbitControls, Stage, useHelper } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useControls } from 'leva';
import { Perf } from 'r3f-perf';
import * as THREE from 'three';

export const Experience = () => {
  const cubeRef = useRef<THREE.Mesh | null>(null);
  const directionalLightRef = useRef<THREE.DirectionalLight>(null!);

  useHelper(directionalLightRef, THREE.DirectionalLightHelper, 1);

  useFrame((_state, delta) => {
    if (!cubeRef.current) return;

    cubeRef.current.rotation.y += delta * 0.2;
  });

  const { envMapIntensity } = useControls('environment map', {
    envMapIntensity: { value: 7, min: 0, max: 12 },
  });

  return (
    <>
      <Perf position="top-left" />

      <OrbitControls makeDefault />

      <color args={['ivory']} attach="background" />

      <Stage
        shadows={{ type: 'contact', opacity: 0.2, blur: 3 }}
        environment="sunset"
        preset="portrait"
        intensity={envMapIntensity}
      >
        <mesh position-y={1} position-x={-2} castShadow>
          <sphereGeometry />
          <meshStandardMaterial color="orange" />
        </mesh>

        <mesh
          ref={cubeRef}
          position-x={2}
          position-y={1}
          scale={1.5}
          castShadow
        >
          <boxGeometry />
          <meshStandardMaterial color="mediumpurple" />
        </mesh>
      </Stage>
    </>
  );
};
