import { OrbitControls } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { Perf } from 'r3f-perf';
import { DRACOLoader, GLTFLoader } from 'three/examples/jsm/Addons.js';

export const Experience = () => {
  const model = useLoader(
    GLTFLoader,
    './models/hamburger-draco.glb',
    (loader) => {
      const dracoLoader = new DRACOLoader();

      dracoLoader.setDecoderPath('./models/draco/');
      loader.setDRACOLoader(dracoLoader);
    },
  );

  return (
    <>
      <Perf position="top-left" />

      <OrbitControls makeDefault />

      <directionalLight castShadow position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />

      <color args={['ivory']} attach="background" />

      <mesh
        receiveShadow
        position-y={-1}
        rotation-x={-Math.PI * 0.5}
        scale={10}
      >
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>

      <primitive object={model.scene} scale={0.35} />
    </>
  );
};
