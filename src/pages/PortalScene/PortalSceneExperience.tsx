import { OrbitControls } from '@react-three/drei';

export const PortalSceneExperience = () => {
  return (
    <>
      <OrbitControls makeDefault />
      <mesh scale={1.5}>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
    </>
  );
};
