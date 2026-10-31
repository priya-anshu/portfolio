import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { ParticleField } from "./ParticleField";

export function Sun({ reducedMotion }: { reducedMotion: boolean }) {
  const sunRef = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (sunRef.current && !reducedMotion) {
      sunRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.15) * 0.08;
    }
  });

  return (
    <group ref={sunRef} position={[3.1, 1.35, -1.5]}>
      <mesh>
        <circleGeometry args={[0.58, 48]} />
        <meshBasicMaterial color="#ffd479" />
      </mesh>
      <mesh>
        <ringGeometry args={[0.72, 0.76, 48]} />
        <meshBasicMaterial color="#ffcd70" transparent opacity={0.45} />
      </mesh>
      <pointLight color="#ffd479" intensity={0.65} distance={4} />
    </group>
  );
}
export function DayScene({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <>
      <ParticleField count={38} color="#ffe5a0" size={0.2} opacity={0.28} reducedMotion={reducedMotion} />
      <Sun reducedMotion={reducedMotion} />
    </>
  );
}
export function Moon({ reducedMotion }: { reducedMotion: boolean }) {
  const moonRef = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (moonRef.current && !reducedMotion) {
      moonRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.2) * 0.06;
    }
  });

  const crescent = useMemo(() => {
    const shape = new THREE.Shape();
    shape.absarc(0, 0, 0.55, Math.PI * 0.38, Math.PI * 1.62, false);
    shape.absarc(0.25, 0.08, 0.49, Math.PI * 1.58, Math.PI * 0.42, true);
    shape.closePath();
    return shape;
  }, []);

  return (
    <group ref={moonRef} position={[3.05, 1.25, -1.2]}>
      <mesh>
        <shapeGeometry args={[crescent]} />
        <meshStandardMaterial
          color="#fff1ba"
          emissive="#d4b96c"
          emissiveIntensity={0.28}
          side={THREE.DoubleSide}
        />
      </mesh>
      <pointLight color="#d6ddff" intensity={0.32} distance={3.5} />
    </group>
  );
}
export function NightScene({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <>
      <ParticleField count={105} color="#c4b5fd" size={0.17} opacity={0.58} reducedMotion={reducedMotion} />
      <Moon reducedMotion={reducedMotion} />
    </>
  );
}
