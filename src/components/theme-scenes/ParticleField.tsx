import { useEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function useGlowTexture() {
  const texture = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;
    const context = canvas.getContext("2d");
    if (!context) throw new Error("Unable to create the theme particle texture.");

    const gradient = context.createRadialGradient(32, 32, 1, 32, 32, 32);
    gradient.addColorStop(0, "rgba(255,255,255,1)");
    gradient.addColorStop(0.26, "rgba(255,255,255,0.82)");
    gradient.addColorStop(0.62, "rgba(255,255,255,0.24)");
    gradient.addColorStop(1, "rgba(255,255,255,0)");
    context.fillStyle = gradient;
    context.fillRect(0, 0, 64, 64);

    const glow = new THREE.CanvasTexture(canvas);
    glow.colorSpace = THREE.SRGBColorSpace;
    return glow;
  }, []);

  useEffect(() => () => texture.dispose(), [texture]);
  return texture;
}

type ParticleProps = {
  count: number;
  color: string;
  size: number;
  opacity: number;
  snow?: boolean;
  reducedMotion: boolean;
};

export function ParticleField({
  count,
  color,
  size,
  opacity,
  snow = false,
  reducedMotion,
}: ParticleProps) {
  const pointsRef = useRef<THREE.Points>(null);
  const glowTexture = useGlowTexture();
  const { geometry, drift } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const horizontalDrift = new Float32Array(count);

    for (let index = 0; index < count; index += 1) {
      positions[index * 3] = (Math.random() - 0.5) * 15;
      positions[index * 3 + 1] = (Math.random() - 0.5) * 9;
      positions[index * 3 + 2] = (Math.random() - 0.5) * 9;
      horizontalDrift[index] = (Math.random() - 0.5) * 0.08;
    }

    const bufferGeometry = new THREE.BufferGeometry();
    bufferGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3),
    );
    return { geometry: bufferGeometry, drift: horizontalDrift };
  }, [count]);

  useFrame((_, delta) => {
    const points = pointsRef.current;
    if (!points || reducedMotion) return;

    if (snow) {
      const positions = points.geometry.attributes.position;
      for (let index = 0; index < positions.count; index += 1) {
        const y = positions.getY(index) - delta * (0.12 + (index % 5) * 0.035);
        positions.setY(index, y < -4.5 ? 4.5 : y);
        positions.setX(
          index,
          positions.getX(index) +
            (drift[index] + Math.sin(index + performance.now() / 1800) * 0.025) *
              delta,
        );
      }
      positions.needsUpdate = true;
    } else {
      points.rotation.y += delta * 0.012;
      points.rotation.x += delta * 0.003;
    }
  });

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        map={glowTexture}
        color={color}
        size={size}
        transparent
        opacity={opacity}
        depthWrite={false}
        sizeAttenuation
        alphaTest={0.015}
      />
    </points>
  );
}
