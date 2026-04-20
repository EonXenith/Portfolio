"use client";
import { Canvas } from "@react-three/fiber";
import { DistortedSphere } from "./DistortedSphere";
import { ParticleField } from "./ParticleField";

export default function HeroCanvas() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 4], fov: 45 }}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
    >
      <color attach="background" args={["#0A0A0B"]} />
      <ambientLight intensity={0.4} />
      <directionalLight position={[3, 3, 5]} intensity={1.2} />
      <DistortedSphere />
      <ParticleField count={800} />
    </Canvas>
  );
}
