import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { ParticleField } from "./ParticleField";

export function makeLeafShape() {
  const shape = new THREE.Shape();
  shape.moveTo(0, -0.72);
  shape.bezierCurveTo(-0.08, -0.24, -0.55, 0.26, 0, 0.72);
  shape.bezierCurveTo(0.55, 0.26, 0.08, -0.24, 0, -0.72);
  return shape;
}
export function EarthDayScene({ reducedMotion }: { reducedMotion: boolean }) {
  const leavesRef = useRef<THREE.Group>(null);
  const leafShape = useMemo(() => makeLeafShape(), []);
  const leaves = Array.from({ length: 18 }, (_, index) => {
    const angle = (index / 18) * Math.PI * 2;
    const radius = 1.6 + (index % 3) * 0.11;
    return {
      angle,
      position: [Math.cos(angle) * radius, Math.sin(angle) * radius, 0] as [number, number, number],
      rotation: [0, 0, angle - Math.PI / 2] as [number, number, number],
    };
  });

  useFrame((_, delta) => {
    if (leavesRef.current && !reducedMotion) {
      leavesRef.current.rotation.z += delta * 0.025;
    }
  });

  return (
    <>
      <ParticleField count={70} color="#a3e635" size={0.24} opacity={0.44} reducedMotion={reducedMotion} />
      <group ref={leavesRef} position={[3.8, -0.45, -0.5]} scale={0.62}>
        <mesh>
          <torusGeometry args={[1.6, 0.018, 6, 96]} />
          <meshBasicMaterial color="#4ade80" transparent opacity={0.3} />
        </mesh>
        {leaves.map((leaf, index) => (
          <group key={index} position={leaf.position} rotation={leaf.rotation}>
            <mesh>
              <shapeGeometry args={[leafShape]} />
              <meshStandardMaterial
                color={index % 2 ? "#72b947" : "#a3c95f"}
                roughness={0.75}
                side={THREE.DoubleSide}
                transparent
                opacity={0.84}
              />
            </mesh>
            <mesh position={[0, 0, 0.012]}>
              <boxGeometry args={[0.012, 1.12, 0.008]} />
              <meshBasicMaterial color="#d1e6a3" transparent opacity={0.62} />
            </mesh>
          </group>
        ))}
      </group>
    </>
  );
}
