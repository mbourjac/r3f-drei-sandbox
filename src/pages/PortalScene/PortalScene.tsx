import { Canvas } from '@react-three/fiber';
import { PortalSceneExperience } from './PortalSceneExperience';

export const PortalScene = () => {
  return (
    <Canvas
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [1, 2, 6],
      }}
    >
      <PortalSceneExperience />
    </Canvas>
  );
};
