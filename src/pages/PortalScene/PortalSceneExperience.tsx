import { OrbitControls } from '@react-three/drei';

export const PortalSceneExperience = () => {
  return (
    <>
      <color args={['#030202']} attach="background" />
      <OrbitControls makeDefault />
      <mesh scale={1.5}>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
    </>
  );
};
