"use client";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Icosahedron } from "@react-three/drei";
import * as THREE from "three";

export function DistortedSphere() {
  const groupRef = useRef<THREE.Group>(null!);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const matRef = useRef<any>(null!);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += 0.0015;
    groupRef.current.rotation.x =
      Math.sin(clock.elapsedTime * 0.2) * 0.1;
    if (matRef.current) {
      matRef.current.distort =
        Math.sin(clock.elapsedTime * 0.4) * 0.08 + 0.42;
    }
  });

  return (
    <group ref={groupRef}>
      <Icosahedron args={[1.4, 64]}>
        <MeshDistortMaterial
          ref={matRef}
          color="#7C5CFF"
          roughness={0.15}
          metalness={0.6}
          distort={0.42}
          speed={1.3}
        />
      </Icosahedron>
      <Icosahedron args={[1.55, 4]}>
        <meshBasicMaterial
          color="#22D3EE"
          wireframe
          opacity={0.15}
          transparent
        />
      </Icosahedron>
    </group>
  );
}
