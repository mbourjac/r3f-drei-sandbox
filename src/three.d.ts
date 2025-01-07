import type { ReactThreeFiber } from '@react-three/fiber';

declare module '@react-three/fiber' {
  interface ThreeElements {
    orbitControls: ReactThreeFiber.Object3DNode<
      OrbitControls,
      typeof OrbitControls
    >;
  }
}
