import React, { useRef, useEffect, useImperativeHandle } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export const Avatar = React.forwardRef((props, ref) => {
  const group = useRef();
  const { scene, animations } = useGLTF("/models/avatar-transformed.glb");

  const mixer = useRef();
  const action = useRef();
  const animationKey = "IdleV4.2(maya_head)";
  const clock = new THREE.Clock();

  // Find animation clip
  const animationClip = animations.find((clip) => clip.name === animationKey);

  useEffect(() => {
    if (scene && animationClip) {
      mixer.current = new THREE.AnimationMixer(scene);
      action.current = mixer.current.clipAction(animationClip);
      action.current.clampWhenFinished = true;
      action.current.loop = THREE.LoopRepeat;
    }

    return () => {
      if (mixer.current) {
        mixer.current.stopAllAction();
        mixer.current.uncacheRoot(scene);
      }
    };
  }, [scene, animationClip]);

  // Animate on each frame with clock
  useEffect(() => {
    let frameId;

    const update = () => {
      const delta = clock.getDelta();
      if (mixer.current) mixer.current.update(delta);
      frameId = requestAnimationFrame(update);
    };
    update();

    return () => cancelAnimationFrame(frameId);
  });

  useImperativeHandle(ref, () => ({
    playAnimation: () => {
      if (action.current) {
        action.current.reset().play();
      }
    },
    stopAnimation: () => {
      if (action.current) {
        action.current.stop();
      }
    },
    disposeAnimation: () => {
      if (action.current) {
        action.current.stop();
        mixer.current.uncacheAction(action.current);
      }
    },
  }));

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={scene} />
    </group>
  );
});

useGLTF.preload("/models/avatar-transformed.glb");
