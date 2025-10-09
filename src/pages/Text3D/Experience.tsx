import { OrbitControls, Text3D } from '@react-three/drei';
import { Perf } from 'r3f-perf';

export const Experience = () => {
  return (
    <>
      <Perf position="top-left" />

      <OrbitControls makeDefault />

      <color args={['ivory']} attach="background" />

      <Text3D font="./fonts/helvetiker_regular.typeface.json">
        LOREM IPSUM
        <meshNormalMaterial />
      </Text3D>
    </>
  );
};
