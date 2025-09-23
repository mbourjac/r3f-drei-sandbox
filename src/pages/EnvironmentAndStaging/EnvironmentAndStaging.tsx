import { Canvas, type RootState } from '@react-three/fiber';
import { Experience } from './Experience';

export const EnvironmentAndStaging = () => {
  const created = ({ gl }: RootState) => {
    gl.setClearColor('#ff0000', 1);
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
