import type { ThreeElements } from '@react-three/fiber';

type ModelPlaceholderProps = ThreeElements['mesh'];

export const ModelPlaceholder = (props: ModelPlaceholderProps) => {
  return (
    <mesh {...props}>
      <boxGeometry args={[1, 1, 1, 2, 2, 2]} />
      <meshBasicMaterial wireframe color="red" />
    </mesh>
  );
};
