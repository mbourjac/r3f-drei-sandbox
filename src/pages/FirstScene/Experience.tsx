import { useRef } from 'react';
import { useThree, extend, useFrame } from '@react-three/fiber';
import type * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { CustomObject } from './CustomObject';

extend({ OrbitControls });

export const Experience = () => {
  const { camera, gl } = useThree();

  const cubeRef = useRef<THREE.Mesh | null>(null);

  useFrame((_state, delta) => {
    const cube = cubeRef.current;

    if (!cube) return;

    cube.rotation.y += delta;
  });

  return (
    <>
      <orbitControls args={[camera, gl.domElement]} />
      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />
      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
      <group>
        <mesh position-x={-2}>
          <sphereGeometry />
          <meshStandardMaterial color="orange" />
        </mesh>
        <mesh
          ref={cubeRef}
          rotation-y={Math.PI * 0.25}
          position-x={2}
          scale={1.5}
        >
          <boxGeometry />
          <meshStandardMaterial color="mediumpurple" />
        </mesh>
      </group>
      <CustomObject />
    </>
  );
};
