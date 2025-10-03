import { useGLTF } from '@react-three/drei';

export const Model = () => {
  const model = useGLTF('./models/hamburger.glb');

  return <primitive object={model.scene} scale={0.35} />;
};
