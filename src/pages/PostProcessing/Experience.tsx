import { OrbitControls } from '@react-three/drei';
import {
  EffectComposer,
  Glitch,
  ToneMapping,
  Vignette,
} from '@react-three/postprocessing';
import { useControls } from 'leva';
import { BlendFunction, GlitchMode, ToneMappingMode } from 'postprocessing';
import { Perf } from 'r3f-perf';
import * as THREE from 'three';

export const Experience = () => {
  const { blendFunction, enabled: enabledVignette } = useControls('vignette', {
    enabled: { value: false },
    blendFunction: { options: BlendFunction },
  });

  const {
    enabled: enabledGlitch,
    glitchMode,
    delayMin,
    delayMax,
    durationMin,
    durationMax,
    strengthMin,
    strengthMax,
  } = useControls('glitch', {
    enabled: { value: false },
    glitchMode: { options: GlitchMode },
    delayMin: { value: 0.5, min: 0, max: 5, step: 0.1 },
    delayMax: { value: 1, min: 0, max: 5, step: 0.1 },
    durationMin: { value: 0.1, min: 0, max: 5, step: 0.1 },
    durationMax: { value: 0.3, min: 0, max: 5, step: 0.1 },
    strengthMin: { value: 0.2, min: 0, max: 1, step: 0.01 },
    strengthMax: { value: 0.4, min: 0, max: 1, step: 0.01 },
  });

  return (
    <>
      <Perf position="top-left" />

      <EffectComposer>
        {enabledVignette ?
          <Vignette offset={0.3} darkness={0.9} blendFunction={blendFunction} />
        : <></>}
        {enabledGlitch ?
          <Glitch
            delay={new THREE.Vector2(delayMin, delayMax)}
            duration={new THREE.Vector2(durationMin, durationMax)}
            strength={new THREE.Vector2(strengthMin, strengthMax)}
            mode={glitchMode as GlitchMode}
          />
        : <></>}
        <ToneMapping mode={ToneMappingMode.ACES_FILMIC} />
      </EffectComposer>

      <OrbitControls makeDefault />

      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />

      <color args={['ivory']} attach="background" />

      <mesh position-x={-2}>
        <sphereGeometry />
        <meshStandardMaterial color="orange" />
      </mesh>

      <mesh position-x={2} scale={1.5}>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
    </>
  );
};
