import { useEffect } from 'react';
import {
  Center,
  OrbitControls,
  Text3D,
  useMatcapTexture,
} from '@react-three/drei';
import { Perf } from 'r3f-perf';
import * as THREE from 'three';

const torusGeometry = new THREE.TorusGeometry(1, 0.6, 16, 32);
const material = new THREE.MeshMatcapMaterial();

export const Experience = () => {
  const [matcapTexture] = useMatcapTexture('7B5254_E9DCC7_B19986_C8AC91', 256);

  useEffect(() => {
    matcapTexture.colorSpace = THREE.SRGBColorSpace;
    matcapTexture.needsUpdate = true;

    material.matcap = matcapTexture;
    material.needsUpdate = true;
  }, [matcapTexture]);

  return (
    <>
      <Perf position="top-left" />

      <OrbitControls makeDefault />

      <color args={['ivory']} attach="background" />

      {Array.from({ length: 100 }).map((_, index) => (
        <mesh
          key={index}
          geometry={torusGeometry}
          material={material}
          position={[
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
          ]}
          scale={0.2 + Math.random() * 0.4}
          rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}
        ></mesh>
      ))}

      <Center>
        <Text3D
          material={material}
          font="./fonts/helvetiker_regular.typeface.json"
          size={0.75}
          height={0.2}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
        >
          LOREM IPSUM
        </Text3D>
      </Center>
    </>
  );
};
