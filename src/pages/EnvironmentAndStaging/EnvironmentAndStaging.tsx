import { Canvas, type RootState } from '@react-three/fiber';
import * as THREE from 'three';
import { Experience } from './Experience';

export const EnvironmentAndStaging = () => {
  const created = ({ scene }: RootState) => {
    scene.background = new THREE.Color('#ff0000');
  };

  return (
    <Canvas
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
      onCreated={created}
    >
      <Experience />
    </Canvas>
  );
};
