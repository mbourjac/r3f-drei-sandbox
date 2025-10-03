import { useLoader } from '@react-three/fiber';
import { GLTFLoader, DRACOLoader } from 'three/examples/jsm/Addons.js';

export const Model = () => {
  const model = useLoader(
    GLTFLoader,
    './models/FlightHelmet/glTF/FlightHelmet.gltf',
    (loader) => {
      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderPath('./models/draco/');
      loader.setDRACOLoader(dracoLoader);
    },
  );

  return <primitive object={model.scene} scale={5} position-y={-1} />;
};
