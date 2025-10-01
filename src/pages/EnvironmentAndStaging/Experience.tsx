import { useEffect, useRef } from 'react';
import {
  ContactShadows,
  Environment,
  OrbitControls,
  useHelper,
} from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
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

  const { color, opacity, blur } = useControls('contact shadows', {
    color: '#1d8f75',
    opacity: { value: 0.4, min: 0, max: 1 },
    blur: { value: 2.8, min: 0, max: 10 },
  });

  const { envMapIntensity, envMapHeight, envMapRadius, envMapScale } =
    useControls('environment map', {
      envMapIntensity: { value: 7, min: 0, max: 12 },
      envMapHeight: { value: 7, min: 0, max: 100 },
      envMapRadius: { value: 28, min: 10, max: 1000 },
      envMapScale: { value: 100, min: 10, max: 1000 },
    });

  const scene = useThree((state) => state.scene);

  useEffect(() => {
    scene.environmentIntensity = envMapIntensity;
  }, [scene, envMapIntensity]);

  return (
    <>
      <Perf position="top-left" />

      <OrbitControls makeDefault />

      <Environment
        preset="sunset"
        ground={{
          height: envMapHeight,
          radius: envMapRadius,
          scale: envMapScale,
        }}
      ></Environment>

      <ContactShadows
        position={[0, 0, 0]}
        scale={10}
        resolution={512}
        far={5}
        color={color}
        opacity={opacity}
        blur={blur}
      />

      <color args={['#000000']} attach="background" />

      <mesh position-y={1} position-x={-2} castShadow>
        <sphereGeometry />
        <meshStandardMaterial color="orange" />
      </mesh>

      <mesh ref={cubeRef} position-x={2} position-y={1} scale={1.5} castShadow>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>
    </>
  );
};
