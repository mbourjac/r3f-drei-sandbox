import { Html } from '@react-three/drei';
import type { Mesh } from 'three';

type ExperienceHtmlProps = {
  sphereRef: React.MutableRefObject<Mesh>;
  cubeRef: React.MutableRefObject<Mesh>;
};

export const ExperienceHtml = ({ sphereRef, cubeRef }: ExperienceHtmlProps) => {
  return (
    <Html
      position={[1, 1, 0]}
      center
      distanceFactor={8}
      occlude={[sphereRef, cubeRef]}
    >
      <p className="absolute select-none rounded-full bg-black/80 px-4 py-2 text-white">
        Sphere
      </p>
    </Html>
  );
};
