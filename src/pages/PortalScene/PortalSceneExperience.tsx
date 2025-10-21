import { useRef } from 'react';
import {
  shaderMaterial,
  Center,
  OrbitControls,
  Sparkles,
  useGLTF,
  useTexture,
} from '@react-three/drei';
import { extend, useFrame } from '@react-three/fiber';
import type { Mesh } from 'three';
import * as THREE from 'three';
import type { GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';
import portalFragmentShader from './shaders/portal/fragment.glsl';
import portalVertexShader from './shaders/portal/vertex.glsl';

type PortalGLTF = GLTF & {
  nodes: {
    baked: Mesh;
    portalLight: Mesh;
    poleLightA: Mesh;
    poleLightB: Mesh;
  };
};

export const PortalMaterial = shaderMaterial(
  {
    uTime: 0,
    uColorStart: new THREE.Color('#ffffff'),
    uColorEnd: new THREE.Color('#000000'),
  },
  portalVertexShader,
  portalFragmentShader,
);

extend({ PortalMaterial });

interface PortalMaterial extends THREE.ShaderMaterial {
  uTime: number;
  uColorStart: THREE.Color;
  uColorEnd: THREE.Color;
}

export const PortalSceneExperience = () => {
  const portalMaterialRef = useRef<PortalMaterial>(null);

  const {
    nodes: { baked, portalLight, poleLightA, poleLightB },
  } = useGLTF('./models/portal/portal.glb') as unknown as PortalGLTF;
  const bakedTexture = useTexture('./models/portal/baked.jpg');

  bakedTexture.flipY = false;

  useFrame((_state, delta) => {
    if (portalMaterialRef.current) {
      portalMaterialRef.current.uTime += delta;

      console.log(portalMaterialRef.current);
    }
  });

  return (
    <>
      <color args={['#030202']} attach="background" />
      <OrbitControls makeDefault />
      <Center>
        <mesh geometry={baked.geometry}>
          <meshBasicMaterial map={bakedTexture} />
        </mesh>
        <mesh
          geometry={portalLight.geometry}
          position={portalLight.position}
          rotation={portalLight.rotation}
        >
          <portalMaterial ref={portalMaterialRef} />
        </mesh>
        <mesh geometry={poleLightA.geometry} position={poleLightA.position}>
          <meshBasicMaterial color="#ffffe5" />
        </mesh>
        <mesh geometry={poleLightB.geometry} position={poleLightB.position}>
          <meshBasicMaterial color="#ffffe5" />
        </mesh>
        <Sparkles
          size={6}
          scale={[4, 2, 4]}
          position-y={1}
          speed={0.2}
          count={40}
        />
      </Center>
    </>
  );
};
