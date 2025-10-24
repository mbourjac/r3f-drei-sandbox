import { useRef } from 'react';
import { meshBounds, OrbitControls } from '@react-three/drei';
import { type ThreeEvent, useFrame } from '@react-three/fiber';
import type { BoxGeometry, Mesh, MeshStandardMaterial } from 'three';

export const Experience = () => {
  const cubeRef = useRef<Mesh<BoxGeometry, MeshStandardMaterial> | null>(null);

  useFrame((_state, delta) => {
    const cube = cubeRef.current;

    if (!cube) return;

    cube.rotation.y += delta * 0.2;
  });

  const handleClick = (event: ThreeEvent<MouseEvent>) => {
    const cube = cubeRef.current;

    if (!cube) return;

    cube.material.color.set(`hsl(${String(Math.random() * 360)}, 100%, 75%)`);

    console.log('distance', event.distance); // Distance between camera and hit point
    console.log('point', event.point); // Hit point coordinates (in 3D)
    console.log('uv', event.uv); // UV coordinates on the geometry (in 2D)
    console.log('object', event.object); // The object that triggered the event
    console.log('eventObject', event.eventObject); // The object that was listening to the event (useful where there is objects in objects)

    console.log('x', event.x); // 2D screen coordinates of the pointer
    console.log('y', event.y); // 2D screen coordinates of the pointer

    console.log('shiftKey', event.shiftKey); // If the SHIFT key was pressed
    console.log('ctrlKey', event.ctrlKey); // If the CTRL key was pressed
    console.log('metaKey', event.metaKey); // If the COMMAND key was pressed
  };

  return (
    <>
      <OrbitControls makeDefault />

      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />

      <color args={['ivory']} attach="background" />

      <mesh
        position-x={-2}
        onClick={(event) => event.stopPropagation()}
        onPointerEnter={(event) => event.stopPropagation()}
      >
        <sphereGeometry />
        <meshStandardMaterial color="orange" />
      </mesh>

      <mesh
        ref={cubeRef}
        raycast={meshBounds}
        position-x={2}
        scale={1.5}
        onClick={handleClick}
        onPointerEnter={() => {
          document.body.style.cursor = 'pointer';
        }}
        onPointerLeave={() => {
          document.body.style.cursor = 'default';
        }}
      >
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
