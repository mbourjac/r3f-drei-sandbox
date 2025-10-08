import { OrbitControls } from '@react-three/drei';
import { Perf } from 'r3f-perf';

export const Experience = () => {
  return (
    <>
      <Perf position="top-left" />

      <OrbitControls makeDefault />

      <color args={['ivory']} attach="background" />

      <mesh scale={1.5}>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
    </>
  );
};
