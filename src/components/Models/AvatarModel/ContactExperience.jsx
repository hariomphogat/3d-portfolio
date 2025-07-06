import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import { Avatar } from "./Avatar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactExperience = () => {
  const avatarRef = useRef();
  const containerRef = useRef();

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 100%", // start when top of container is 150% from top of viewport
      end: "bottom 20%", // End when bottom of container is 20% from top
      onEnter: () => {
        avatarRef.current?.playAnimation();
      },
      onLeave: () => {
        avatarRef.current?.stopAnimation();
      },
      onEnterBack: () => {
        avatarRef.current?.playAnimation();
      },
      onLeaveBack: () => {
        avatarRef.current?.stopAnimation();
      },
      onToggle: (self) => {
        if (!self.isActive) {
          avatarRef.current?.disposeAnimation();
        }
      },
    });

    // Force a refresh to ensure correct calculations
    ScrollTrigger.refresh(true);

    // Check after a slight delay to allow layout to stabilize
    setTimeout(() => {
      if (trigger.isActive) {
        avatarRef.current?.playAnimation();
      }
    }, 150);

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full"
      style={{ willChange: "transform, opacity" }}
    >
      <Canvas
        camera={{ position: [-1, 0.5, 3], fov: 35 }}
        shadows
        gl={{ antialias: true }}
      >
        <ambientLight intensity={1} />
        <directionalLight position={[2, 5, 5]} intensity={1} />

        <spotLight
          position={[2, 4, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <spotLight
          position={[6, 6, 6]}
          intensity={200}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          color={"#efc070"}
        />
        <spotLight
          position={[-6, 6, 6]}
          intensity={200}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          color={"#efc070"}
        />
        <spotLight
          position={[1, 1, -6]}
          intensity={0}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          color={"#efc070"}
        />

        {/* Fill spot light from above */}
        <spotLight
          position={[-2, 5, 3]}
          angle={0.3}
          penumbra={0.5}
          intensity={0.8}
          castShadow
        />
        <spotLight
          position={[1, 10, 5]}
          angle={0.3}
          penumbra={0.5}
          intensity={10}
          castShadow
        />

        <OrbitControls
          enableZoom={false}
          enablePan={true}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 2}
        />

        <group scale={3.5} position={[0, -5.6, 0]} castShadow>
          <Avatar ref={avatarRef} />
        </group>
      </Canvas>
    </div>
  );
};

export default ContactExperience;
