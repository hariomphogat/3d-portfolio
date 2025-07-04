import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import { MeshStandardMaterial } from "three";

const TechIcon = ({ model }) => {
  // -loads a '.glb' model(gltf format)
  const scene = useGLTF(model.modelPath);

  useEffect(() => {
    if (model.name === "Interactive Developer") {
      scene.scene.traverse((child) => {
        if (child.isMesh && child.name == "Object_5") {
          // -optionally tweak the material (like setting a white color on specific mesh)
          child.material = new MeshStandardMaterial({ color: "white" });
        }
      });
    }
  });

  return (
    <Canvas>
      {/* Adds basic lightning */}
      <ambientLight intensity={0.3} />
      {/* Applies eviornment reflections for realism */}
      <directionalLight position={[5, 5, 5]} intensity={1} />

      <Environment preset="city" />

      {/* Disables zoom using OrbitControls */}
      <OrbitControls enableZoom={false} />

      <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
        <group scale={model.scale} rotation={model.rotation}>
          <primitive object={scene.scene} />
        </group>
      </Float>
    </Canvas>
  );
};

export default TechIcon;
