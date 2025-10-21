import type { ReactThreeFiber } from '@react-three/fiber';
import type { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import type { PortalMaterial } from './pages/PortalScene/PortalSceneExperience';

declare module '@react-three/fiber' {
  interface ThreeElements {
    orbitControls: ReactThreeFiber.Object3DNode<
      OrbitControls,
      typeof OrbitControls
    >;
    portalMaterial: ReactThreeFiber.Object3DNode<
      PortalMaterial,
      typeof PortalMaterial
    >;
  }
}
