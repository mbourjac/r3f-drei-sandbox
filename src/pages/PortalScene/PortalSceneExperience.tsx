import {
  Center,
  OrbitControls,
  Sparkles,
  useGLTF,
  useTexture,
} from '@react-three/drei';
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

export const PortalSceneExperience = () => {
  const {
    nodes: { baked, portalLight, poleLightA, poleLightB },
  } = useGLTF('./models/portal/portal.glb') as unknown as PortalGLTF;
  const bakedTexture = useTexture('./models/portal/baked.jpg');

  bakedTexture.flipY = false;

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
          <shaderMaterial
            vertexShader={portalVertexShader}
            fragmentShader={portalFragmentShader}
            uniforms={{
              uTime: { value: 0 },
              uColorStart: { value: new THREE.Color('#ffffff') },
              uColorEnd: { value: new THREE.Color('#000000') },
            }}
          />
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
