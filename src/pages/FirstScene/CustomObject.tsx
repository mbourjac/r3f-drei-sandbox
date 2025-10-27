import { useEffect, useMemo, useRef } from 'react';
import { type BufferGeometry, DoubleSide } from 'three';

export const CustomObject = () => {
  const geometryRef = useRef<BufferGeometry | null>(null);

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

  useEffect(() => {
    const geometry = geometryRef.current;

    if (!geometry) {
      throw new Error('geometryRef is not assigned');
    }

    geometry.computeVertexNormals();
  }, [positions]);

  return (
    <mesh>
      <bufferGeometry ref={geometryRef}>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <meshStandardMaterial color="red" side={DoubleSide} />
    </mesh>
  );
};
