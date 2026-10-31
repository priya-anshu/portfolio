import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { ParticleField, useGlowTexture } from "./ParticleField";

export function NewYearsScene({ reducedMotion }: { reducedMotion: boolean }) {
  const pointsRef = useRef<THREE.Points>(null);
  const texture = useGlowTexture();
  const particleCount = 360;
  const burstCount = 6;
  const particlesPerBurst = particleCount / burstCount;
  const particles = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    const ages = new Float32Array(burstCount);
    const origins = new Float32Array(burstCount * 3);

    for (let burst = 0; burst < burstCount; burst += 1) {
      origins.set([(Math.random() - 0.5) * 10, (Math.random() - 0.5) * 4, -1], burst * 3);
      ages[burst] = burst * 0.38;
      for (let offset = 0; offset < particlesPerBurst; offset += 1) {
        const index = burst * particlesPerBurst + offset;
        const angle = Math.random() * Math.PI * 2;
        const vertical = Math.random() * 2 - 1;
        const horizontal = Math.sqrt(1 - vertical * vertical);
        const speed = 0.7 + Math.random() * 1.7;
        velocities[index * 3] = Math.cos(angle) * horizontal * speed;
        velocities[index * 3 + 1] = vertical * speed;
        velocities[index * 3 + 2] = Math.sin(angle) * horizontal * speed;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return { geometry, velocities, ages, origins };
  }, [burstCount, particleCount, particlesPerBurst]);

  useFrame((_, delta) => {
    const points = pointsRef.current;
    if (!points || reducedMotion) return;
    const positions = points.geometry.attributes.position;

    for (let burst = 0; burst < burstCount; burst += 1) {
      particles.ages[burst] += delta;
      if (particles.ages[burst] > 2.5) {
        particles.ages[burst] = 0;
        particles.origins[burst * 3] = (Math.random() - 0.5) * 10;
        particles.origins[burst * 3 + 1] = (Math.random() - 0.5) * 4;
        for (let offset = 0; offset < particlesPerBurst; offset += 1) {
          const index = burst * particlesPerBurst + offset;
          const angle = Math.random() * Math.PI * 2;
          const vertical = Math.random() * 2 - 1;
          const horizontal = Math.sqrt(1 - vertical * vertical);
          const speed = 0.7 + Math.random() * 1.7;
          particles.velocities[index * 3] = Math.cos(angle) * horizontal * speed;
          particles.velocities[index * 3 + 1] = vertical * speed;
          particles.velocities[index * 3 + 2] = Math.sin(angle) * horizontal * speed;
        }
      }
      const age = particles.ages[burst];
      for (let offset = 0; offset < particlesPerBurst; offset += 1) {
        const index = burst * particlesPerBurst + offset;
        positions.setXYZ(
          index,
          particles.origins[burst * 3] + particles.velocities[index * 3] * age,
          particles.origins[burst * 3 + 1] +
            particles.velocities[index * 3 + 1] * age -
            age * age * 0.32,
          particles.origins[burst * 3 + 2] +
            particles.velocities[index * 3 + 2] * age,
        );
      }
    }
    positions.needsUpdate = true;
  });

  return (
    <>
      <points ref={pointsRef} geometry={particles.geometry}>
        <pointsMaterial
          map={texture}
          color="#ffd36d"
          size={0.24}
          transparent
          opacity={0.92}
          depthWrite={false}
          sizeAttenuation
          alphaTest={0.015}
        />
      </points>
      <ParticleField count={32} color="#fb7185" size={0.24} opacity={0.55} reducedMotion={reducedMotion} />
    </>
  );
}
