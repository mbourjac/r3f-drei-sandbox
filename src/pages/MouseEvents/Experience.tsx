import { useRef } from 'react';
import { OrbitControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import type { BoxGeometry, Mesh, MeshStandardMaterial } from 'three';

export const Experience = () => {
  const cubeRef = useRef<Mesh<BoxGeometry, MeshStandardMaterial> | null>(null);

  useFrame((_state, delta) => {
    const cube = cubeRef.current;

    if (!cube) return;

    cube.rotation.y += delta * 0.2;
  });

  const handleClick = () => {
    const cube = cubeRef.current;

    if (!cube) return;

    cube.material.color.set(`hsl(${String(Math.random() * 360)}, 100%, 75%)`);
  };

  return (
    <>
      <OrbitControls makeDefault />

      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />

      <color args={['ivory']} attach="background" />

      <mesh position-x={-2}>
        <sphereGeometry />
        <meshStandardMaterial color="orange" />
      </mesh>

      <mesh ref={cubeRef} position-x={2} scale={1.5} onClick={handleClick}>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
    </>
  );
};
