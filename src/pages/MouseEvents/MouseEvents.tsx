import { Bvh } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Experience } from './Experience';

export const MouseEvents = () => {
  return (
    <Canvas
      shadows
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Bvh>
        <Experience />
      </Bvh>
      <color args={['ivory']} attach="background" />
    </Canvas>
  );
};
