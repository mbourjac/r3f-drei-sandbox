import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import type * as THREE from 'three';

export const Experience = () => {
  const groupRef = useRef<THREE.Group | null>(null);
  const cubeRef = useRef<THREE.Mesh | null>(null);

  useFrame((_state, delta) => {
    const group = groupRef.current;
    const cube = cubeRef.current;

    if (!group || !cube) return;

    group.rotation.y += delta;
    cube.rotation.y += delta;
  });

  return (
    <>
      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshBasicMaterial color="greenyellow" />
      </mesh>
      <group ref={groupRef}>
        <mesh position-x={-2}>
          <sphereGeometry />
          <meshBasicMaterial color="orange" />
        </mesh>
        <mesh
          ref={cubeRef}
          rotation-y={Math.PI * 0.25}
          position-x={2}
          scale={1.5}
        >
          <boxGeometry />
          <meshBasicMaterial color="mediumpurple" />
        </mesh>
      </group>
    </>
  );
};
