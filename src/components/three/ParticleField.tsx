"use client";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function generatePositions(count: number) {
  const arr = new Float32Array(count * 3);
  // Use a seeded approach for deterministic output
  let seed = 42;
  function random() {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  }
  for (let i = 0; i < count; i++) {
    arr[i * 3] = (random() - 0.5) * 6;
    arr[i * 3 + 1] = (random() - 0.5) * 6;
    arr[i * 3 + 2] = (random() - 0.5) * 6;
  }
  return arr;
}

export function ParticleField({ count = 800 }: { count?: number }) {
  const groupRef = useRef<THREE.Group>(null!);
  const [positions] = useState(() => generatePositions(count));

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0004;
    }
  });

  return (
    <group ref={groupRef}>
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.015}
          color="#0EA5E9"
          transparent
          opacity={0.6}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
    </group>
  );
}
