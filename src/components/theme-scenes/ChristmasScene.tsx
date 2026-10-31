import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { ParticleField } from "./ParticleField";

export function Tree({ position, scale = 1 }: {
  position: [number, number, number];
  scale?: number;
}) {
  return (
    <group position={position} scale={scale}>
      <mesh position={[0, -0.75, 0]}>
        <cylinderGeometry args={[0.13, 0.17, 0.52, 9]} />
        <meshStandardMaterial color="#79513a" roughness={0.95} />
      </mesh>
      {[0, 1, 2].map((level) => (
        <mesh key={level} position={[0, -0.48 + level * 0.48, 0]}>
          <coneGeometry args={[0.78 - level * 0.13, 1.18, 9]} />
          <meshStandardMaterial
            color={level === 1 ? "#16744d" : "#10563f"}
            roughness={0.86}
          />
        </mesh>
      ))}
      {[
        [-0.28, -0.54, 0.47],
        [0.28, -0.28, 0.56],
        [-0.15, 0.05, 0.48],
        [0.16, 0.34, 0.37],
      ].map(([x, y, z], index) => (
        <mesh key={index} position={[x, y, z]}>
          <sphereGeometry args={[0.09, 12, 12]} />
          <meshStandardMaterial
            color={index % 2 ? "#f5c46a" : "#e56d69"}
            metalness={0.18}
            roughness={0.25}
            emissive={index % 2 ? "#8d5415" : "#7c252d"}
            emissiveIntensity={0.25}
          />
        </mesh>
      ))}
      <mesh position={[0, 0.86, 0]} rotation={[0, 0, Math.PI / 10]}>
        <shapeGeometry args={[starShape(0.2, 0.09)]} />
        <meshStandardMaterial
          color="#ffe7a0"
          emissive="#ffb62e"
          emissiveIntensity={0.8}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}
export function ChristmasScene({ reducedMotion }: { reducedMotion: boolean }) {
  const lightsRef = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!lightsRef.current || reducedMotion) return;
    lightsRef.current.children.forEach((light, index) => {
      const material = (light as THREE.Mesh).material as THREE.MeshStandardMaterial;
      material.emissiveIntensity = 0.18 + (Math.sin(state.clock.elapsedTime * 2.2 + index) + 1) * 0.24;
    });
  });

  return (
    <>
      <ParticleField count={170} color="#e7f6ff" size={0.16} opacity={0.66} snow reducedMotion={reducedMotion} />
      <ParticleField count={75} color="#ffffff" size={0.28} opacity={0.28} snow reducedMotion={reducedMotion} />
      <group position={[3.1, -0.55, -0.3]}>
        <Tree position={[0, 0, 0]} scale={1.05} />
        <group ref={lightsRef}>
          {Array.from({ length: 14 }, (_, index) => {
            const angle = index * 2.4;
            const y = -1 + (index % 5) * 0.39;
            const radius = 0.68 - (y + 1) * 0.22;
            return (
              <mesh
                key={index}
                position={[Math.cos(angle) * radius, y, Math.sin(angle) * radius + 0.12]}
              >
                <sphereGeometry args={[0.035, 8, 8]} />
                <meshStandardMaterial
                  color={index % 2 ? "#ffe49a" : "#ff9b8b"}
                  emissive={index % 2 ? "#ffc85c" : "#ff5656"}
                  emissiveIntensity={0.35}
                />
              </mesh>
            );
          })}
        </group>
      </group>
      <Tree position={[-3.35, -0.9, -1.5]} scale={0.68} />
    </>
  );
}
export function starShape(outer: number, inner: number) {
  const shape = new THREE.Shape();
  for (let point = 0; point < 10; point += 1) {
    const radius = point % 2 ? inner : outer;
    const angle = (point / 10) * Math.PI * 2 - Math.PI / 2;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    if (point === 0) shape.moveTo(x, y);
    else shape.lineTo(x, y);
  }
  shape.closePath();
  return shape;
}
