import { OrbitControls } from '@react-three/drei';
import {
  Bloom,
  EffectComposer,
  Glitch,
  Noise,
  ToneMapping,
  Vignette,
} from '@react-three/postprocessing';
import { useControls } from 'leva';
import { BlendFunction, GlitchMode, ToneMappingMode } from 'postprocessing';
import { Perf } from 'r3f-perf';
import * as THREE from 'three';

export const Experience = () => {
  const vignetteControls = useControls('vignette', {
    enabled: { value: false },
    blendFunction: { options: BlendFunction },
  });

  const glitchControls = useControls('glitch', {
    enabled: { value: false },
    glitchMode: { options: GlitchMode },
    delayMin: { value: 0.5, min: 0, max: 5, step: 0.1 },
    delayMax: { value: 1, min: 0, max: 5, step: 0.1 },
    durationMin: { value: 0.1, min: 0, max: 5, step: 0.1 },
    durationMax: { value: 0.3, min: 0, max: 5, step: 0.1 },
    strengthMin: { value: 0.2, min: 0, max: 1, step: 0.01 },
    strengthMax: { value: 0.4, min: 0, max: 1, step: 0.01 },
  });

  const noiseControls = useControls('noise', {
    enabled: { value: false },
    premultiply: { value: false },
    blendFunction: { options: BlendFunction },
  });

  return (
    <>
      <Perf position="top-left" />

      <EffectComposer>
        {vignetteControls.enabled ?
          <Vignette
            offset={0.3}
            darkness={0.9}
            blendFunction={vignetteControls.blendFunction}
          />
        : <></>}
        {glitchControls.enabled ?
          <Glitch
            delay={
              new THREE.Vector2(
                glitchControls.delayMin,
                glitchControls.delayMax,
              )
            }
            duration={
              new THREE.Vector2(
                glitchControls.durationMin,
                glitchControls.durationMax,
              )
            }
            strength={
              new THREE.Vector2(
                glitchControls.strengthMin,
                glitchControls.strengthMax,
              )
            }
            mode={glitchControls.glitchMode as GlitchMode}
          />
        : <></>}
        {noiseControls.enabled ?
          <Noise
            premultiply={noiseControls.premultiply}
            blendFunction={noiseControls.blendFunction}
          />
        : <></>}
        <Bloom luminanceThreshold={1.1} mipmapBlur />
        <ToneMapping mode={ToneMappingMode.ACES_FILMIC} />
      </EffectComposer>

      <OrbitControls makeDefault />

      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />

      <color args={['black']} attach="background" />

      <mesh position-x={-2}>
        <sphereGeometry />
        <meshStandardMaterial color="orange" />
      </mesh>

      <mesh position-x={2} scale={1.5}>
        <boxGeometry />
        <meshStandardMaterial color={[4, 1, 2]} />
      </mesh>

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
    </>
  );
};
