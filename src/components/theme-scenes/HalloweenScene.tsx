import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { ParticleField } from "./ParticleField";

export function Pumpkin({ reducedMotion }: { reducedMotion: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const orange = useMemo(
    () => new THREE.MeshStandardMaterial({
      color: "#f47721",
      roughness: 0.72,
      emissive: "#b83a08",
      emissiveIntensity: 0.34,
    }),
    [],
  );
  const carvedGlow = useMemo(
    () => new THREE.MeshBasicMaterial({
      color: "#ffd166",
      transparent: true,
      opacity: 0.96,
      side: THREE.DoubleSide,
    }),
    [],
  );
  const face = useMemo(
    () => new THREE.MeshBasicMaterial({
      color: "#35150e",
      side: THREE.DoubleSide,
    }),
    [],
  );

  useFrame((state, delta) => {
    if (!groupRef.current || reducedMotion) return;
    groupRef.current.position.y = -0.52 + Math.sin(state.clock.elapsedTime * 0.8) * 0.08;
    groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.55) * 0.035;
    groupRef.current.rotation.y += delta * 0.035;
  });

  return (
    <group ref={groupRef} position={[5.45, -0.35, -0.35]} scale={0.72}>
      {Array.from({ length: 9 }, (_, index) => {
        const angle = (index / 9) * Math.PI * 2;
        return (
          <mesh
            key={index}
            position={[Math.cos(angle) * 0.2, Math.sin(angle) * 0.055, 0]}
            scale={[0.38, 0.54, 0.34]}
            material={orange}
          >
            <sphereGeometry args={[1, 24, 20]} />
          </mesh>
        );
      })}
      <mesh position={[0, 0.51, 0]} rotation={[0, 0, -0.12]}>
        <cylinderGeometry args={[0.1, 0.15, 0.3, 8]} />
        <meshStandardMaterial color="#526b2d" roughness={0.9} />
      </mesh>
      <mesh position={[-0.22, 0.15, 0.31]} rotation={[0, 0, -0.1]} material={carvedGlow}>
        <shapeGeometry args={[triangleShape(0.2)]} />
      </mesh>
      <mesh position={[0.22, 0.15, 0.31]} rotation={[0, 0, 0.1]} material={carvedGlow}>
        <shapeGeometry args={[triangleShape(0.2)]} />
      </mesh>
      <mesh position={[0, -0.02, 0.34]} material={carvedGlow}>
        <shapeGeometry args={[triangleShape(0.11)]} />
      </mesh>
      <mesh position={[0, -0.25, 0.32]} material={face}>
        <shapeGeometry args={[pumpkinSmileShape()]} />
      </mesh>
      <pointLight position={[0, 0, 0.72]} color="#ff8b38" intensity={1.2} distance={2.2} />
    </group>
  );
}
export function triangleShape(size: number) {
  const shape = new THREE.Shape();
  shape.moveTo(-size, size * 0.65);
  shape.lineTo(size, size * 0.65);
  shape.lineTo(0, -size);
  shape.closePath();
  return shape;
}
export function pumpkinSmileShape() {
  const shape = new THREE.Shape();
  shape.moveTo(-0.32, 0.08);
  shape.lineTo(-0.22, 0.02);
  shape.lineTo(-0.14, 0.1);
  shape.lineTo(-0.05, 0.02);
  shape.lineTo(0.04, 0.1);
  shape.lineTo(0.13, 0.02);
  shape.lineTo(0.22, 0.1);
  shape.lineTo(0.32, 0.03);
  shape.lineTo(0.27, -0.12);
  shape.lineTo(0.18, -0.2);
  shape.lineTo(0.08, -0.13);
  shape.lineTo(0, -0.22);
  shape.lineTo(-0.09, -0.13);
  shape.lineTo(-0.19, -0.2);
  shape.lineTo(-0.27, -0.12);
  shape.closePath();
  return shape;
}
export function Ghost({
  position,
  scale = 1,
  reducedMotion,
}: {
  position: [number, number, number];
  scale?: number;
  reducedMotion: boolean;
}) {
  const ghostRef = useRef<THREE.Group>(null);
  const shape = useMemo(() => {
    const ghost = new THREE.Shape();
    ghost.moveTo(-0.45, -0.4);
    ghost.lineTo(-0.45, 0.05);
    ghost.bezierCurveTo(-0.45, 0.75, 0.45, 0.75, 0.45, 0.05);
    ghost.lineTo(0.45, -0.4);
    ghost.lineTo(0.22, -0.28);
    ghost.lineTo(0, -0.42);
    ghost.lineTo(-0.22, -0.28);
    ghost.closePath();
    return ghost;
  }, []);

  useFrame((state) => {
    if (!ghostRef.current || reducedMotion) return;
    ghostRef.current.position.y =
      position[1] + Math.sin(state.clock.elapsedTime * 1.15 + position[0]) * 0.11;
    ghostRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.7) * 0.045;
  });

  return (
    <group ref={ghostRef} position={position} scale={scale}>
      <mesh position={[0, 0, 0]}>
        <shapeGeometry args={[shape]} />
        <meshStandardMaterial
          color="#fff4dc"
          emissive="#c4d6ff"
          emissiveIntensity={0.18}
          transparent
          opacity={0.84}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh position={[-0.15, 0.13, 0.035]}>
        <circleGeometry args={[0.045, 12]} />
        <meshBasicMaterial color="#352033" />
      </mesh>
      <mesh position={[0.15, 0.13, 0.035]}>
        <circleGeometry args={[0.045, 12]} />
        <meshBasicMaterial color="#352033" />
      </mesh>
      <mesh position={[0, -0.04, 0.04]}>
        <circleGeometry args={[0.055, 12]} />
        <meshBasicMaterial color="#352033" />
      </mesh>
    </group>
  );
}
export function Bat({ position, reducedMotion }: {
  position: [number, number, number];
  reducedMotion: boolean;
}) {
  const batRef = useRef<THREE.Group>(null);
  const shape = useMemo(() => {
    const bat = new THREE.Shape();
    bat.moveTo(-0.62, 0.08);
    bat.quadraticCurveTo(-0.37, 0.42, -0.17, 0.12);
    bat.lineTo(-0.12, 0.3);
    bat.lineTo(0, 0.14);
    bat.lineTo(0.12, 0.3);
    bat.lineTo(0.17, 0.12);
    bat.quadraticCurveTo(0.37, 0.42, 0.62, 0.08);
    bat.lineTo(0.46, -0.23);
    bat.lineTo(0.15, -0.1);
    bat.lineTo(0, -0.26);
    bat.lineTo(-0.15, -0.1);
    bat.lineTo(-0.46, -0.23);
    bat.closePath();
    return bat;
  }, []);

  useFrame((state) => {
    if (!batRef.current || reducedMotion) return;
    batRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2 + position[0]) * 0.14;
    batRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 5 + position[0]) * 0.1;
  });

  return (
    <group ref={batRef} position={position} scale={0.48}>
      <mesh>
        <shapeGeometry args={[shape]} />
        <meshStandardMaterial color="#211929" roughness={0.9} side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[-0.05, 0.02, 0.02]}>
        <sphereGeometry args={[0.025, 8, 8]} />
        <meshBasicMaterial color="#ffbb66" />
      </mesh>
      <mesh position={[0.05, 0.02, 0.02]}>
        <sphereGeometry args={[0.025, 8, 8]} />
        <meshBasicMaterial color="#ffbb66" />
      </mesh>
    </group>
  );
}
export function HalloweenScene({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <>
      <ParticleField count={55} color="#ff9a42" size={0.3} opacity={0.48} reducedMotion={reducedMotion} />
      <ParticleField count={35} color="#b779ff" size={0.42} opacity={0.16} reducedMotion={reducedMotion} />
      <Pumpkin reducedMotion={reducedMotion} />
      <Ghost position={[-5.7, -0.35, 0.3]} scale={0.5} reducedMotion={reducedMotion} />
      <Ghost position={[5.5, 1.85, -1.2]} scale={0.34} reducedMotion={reducedMotion} />
      <Bat position={[-1.9, 1.9, 0.2]} reducedMotion={reducedMotion} />
      <Bat position={[3.3, 1.7, -0.8]} reducedMotion={reducedMotion} />
      <Bat position={[-3.8, -1.35, -0.4]} reducedMotion={reducedMotion} />
    </>
  );
}
