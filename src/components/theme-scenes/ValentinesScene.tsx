import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { ParticleField } from "./ParticleField";

function makePetalShape() {
  const shape = new THREE.Shape();
  shape.moveTo(0, -0.5);
  shape.bezierCurveTo(-0.2, -0.2, -0.23, 0.3, 0, 0.55);
  shape.bezierCurveTo(0.23, 0.3, 0.2, -0.2, 0, -0.5);
  return shape;
}

export function ValentinesScene({ reducedMotion }: { reducedMotion: boolean }) {
  const petalsRef = useRef<THREE.Group>(null);
  const petalShape = useMemo(() => makePetalShape(), []);
  const petals = useMemo(
    () =>
      Array.from({ length: 18 }, (_, index) => {
        const angle = (index / 18) * Math.PI * 2;
        const radius = 1.8 + (index % 3) * 0.25;
        return {
          angle,
          position: [
            Math.cos(angle) * radius,
            Math.sin(angle) * radius,
            -0.4 - (index % 3) * 0.12,
          ] as [number, number, number],
          scale: 0.55 + (index % 4) * 0.12,
        };
      }),
    [],
  );

  useFrame((state, delta) => {
    if (!petalsRef.current || reducedMotion) return;
    petalsRef.current.rotation.z += delta * 0.018;
    petalsRef.current.children.slice(1).forEach((petal, index) => {
      petal.position.y =
        petals[index].position[1] + Math.sin(state.clock.elapsedTime * 0.7 + index) * 0.05;
      petal.rotation.z = petals[index].angle + Math.sin(state.clock.elapsedTime + index) * 0.08;
    });
  });

  return (
    <>
      <ParticleField count={42} color="#e8d8ba" size={0.28} opacity={0.4} reducedMotion={reducedMotion} />
      <group ref={petalsRef} position={[3.6, -0.35, -0.5]} scale={0.8}>
        <mesh>
          <torusGeometry args={[1.65, 0.018, 6, 96]} />
          <meshBasicMaterial color="#c6ad83" transparent opacity={0.3} />
        </mesh>
        {petals.map((petal, index) => (
          <mesh
            key={index}
            position={petal.position}
            rotation={[0, 0, petal.angle]}
            scale={petal.scale}
          >
            <shapeGeometry args={[petalShape]} />
            <meshStandardMaterial
              color={index % 3 === 0 ? "#f5ead8" : index % 3 === 1 ? "#ddc9aa" : "#c8b89e"}
              roughness={0.76}
              metalness={0.04}
              side={THREE.DoubleSide}
              transparent
              opacity={0.86}
            />
          </mesh>
        ))}
      </group>
    </>
  );
}
