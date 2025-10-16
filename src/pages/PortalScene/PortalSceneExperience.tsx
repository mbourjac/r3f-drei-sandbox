import { Center, OrbitControls, useGLTF, useTexture } from '@react-three/drei';
import type { Mesh } from 'three';
import type { GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';

type PortalGLTF = GLTF & {
  nodes: {
    baked: Mesh;
    poleLightA: Mesh;
    poleLightB: Mesh;
  };
};

export const PortalSceneExperience = () => {
  const { nodes } = useGLTF(
    './models/portal/portal.glb',
  ) as unknown as PortalGLTF;
  const bakedTexture = useTexture('./models/portal/baked.jpg');

  bakedTexture.flipY = false;

  return (
    <>
      <color args={['#030202']} attach="background" />
      <OrbitControls makeDefault />
      <Center>
        <mesh geometry={nodes.baked.geometry}>
          <meshBasicMaterial map={bakedTexture} />
        </mesh>
        <mesh
          geometry={nodes.poleLightA.geometry}
          position={nodes.poleLightA.position}
        >
          <meshBasicMaterial color="#ffffe5" />
        </mesh>
        <mesh
          geometry={nodes.poleLightB.geometry}
          position={nodes.poleLightB.position}
        >
          <meshBasicMaterial color="#ffffe5" />
        </mesh>
      </Center>
    </>
  );
};
