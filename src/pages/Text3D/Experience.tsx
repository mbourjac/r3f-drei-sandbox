import {
  Center,
  OrbitControls,
  Text3D,
  useMatcapTexture,
} from '@react-three/drei';
import { Perf } from 'r3f-perf';

export const Experience = () => {
  const [matcapTexture] = useMatcapTexture('7B5254_E9DCC7_B19986_C8AC91', 256);

  return (
    <>
      <Perf position="top-left" />

      <OrbitControls makeDefault />

      <color args={['ivory']} attach="background" />

      <Center>
        <Text3D
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
          <meshMatcapMaterial matcap={matcapTexture} />
        </Text3D>
      </Center>
    </>
  );
};
