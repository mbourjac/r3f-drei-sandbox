import { useEffect } from 'react';
import { useAnimations, useGLTF } from '@react-three/drei';
import { useControls } from 'leva';

export const Fox = () => {
  const fox = useGLTF('./models/Fox/glTF/Fox.gltf');
  const animations = useAnimations(fox.animations, fox.scene);

  const { animationName } = useControls({
    animationName: { options: animations.names },
  });

  useEffect(() => {
    const action = animations.actions[animationName];

    if (!action) return;

    action.reset().fadeIn(0.5).play();

    return () => {
      action.fadeOut(0.5);
    };
  }, [animationName, animations.actions]);

  return (
    <primitive
      object={fox.scene}
      scale={0.02}
      position={[-2.5, 0, 2.5]}
      rotation-y={0.3}
    />
  );
};
