import { Clone, useGLTF } from '@react-three/drei';

export const Model = () => {
  const model = useGLTF('./models/hamburger.glb');

  return (
    <>
      <Clone object={model.scene} scale={0.35} position-x={-4} />
      <Clone object={model.scene} scale={0.35} position-x={0} />
      <Clone object={model.scene} scale={0.35} position-x={4} />
    </>
  );
};

useGLTF.preload('./models/hamburger-draco.glb');
