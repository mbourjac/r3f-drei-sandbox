import { OrbitControls, useGLTF } from '@react-three/drei';
import type { BufferGeometry } from 'three';
import type { GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';

type PortalGLTF = GLTF & {
  nodes: {
    baked: { geometry: BufferGeometry };
  };
};

export const PortalSceneExperience = () => {
  const { nodes } = useGLTF(
    './models/portal/portal.glb',
  ) as unknown as PortalGLTF;

  return (
    <>
      <color args={['#030202']} attach="background" />
      <OrbitControls makeDefault />
      <mesh geometry={nodes.baked.geometry} />
    </>
  );
};
