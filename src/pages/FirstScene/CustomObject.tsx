import { useMemo } from 'react';
import { DoubleSide } from 'three';

export const CustomObject = () => {
  const verticesCount = 10 * 3;

  const positions = useMemo(
    () =>
      new Float32Array(
        Array.from({ length: verticesCount * 3 }).map(
          () => (Math.random() - 0.5) * 3,
        ),
      ),
    [verticesCount],
  );

  return (
    <mesh>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={verticesCount}
          itemSize={3}
          array={positions}
        />
      </bufferGeometry>
      <meshBasicMaterial color="red" side={DoubleSide} />
    </mesh>
  );
};
