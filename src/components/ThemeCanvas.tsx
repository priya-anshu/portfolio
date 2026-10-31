import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useTheme } from "../contexts/ThemeContext";
import type { ThemeToken } from "../hooks/useTimeTheme";
import { HalloweenScene } from "./theme-scenes/HalloweenScene";
import { ChristmasScene } from "./theme-scenes/ChristmasScene";
import { NewYearsScene } from "./theme-scenes/NewYearsScene";
import { EarthDayScene } from "./theme-scenes/EarthDayScene";
import { ValentinesScene } from "./theme-scenes/ValentinesScene";
import { DayScene, NightScene } from "./theme-scenes/DayNightScene";

type MotionStatus = "enabled" | "denied" | "unsupported" | "unavailable" | "waiting";
type OrientationEventConstructor = typeof DeviceOrientationEvent & {
  requestPermission?: () => Promise<"granted" | "denied">;
};

const MOTION_REQUEST_EVENT = "theme:request-device-motion";
const MOTION_STATUS_EVENT = "theme:device-motion-status";

function usePrefersReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(preference.matches);

    updatePreference();
    preference.addEventListener("change", updatePreference);
    return () => preference.removeEventListener("change", updatePreference);
  }, []);

  return reducedMotion;
}

function ThemeScene({
  theme,
  reducedMotion,
}: {
  theme: ThemeToken;
  reducedMotion: boolean;
}) {
  switch (theme) {
    case "halloween":
      return <HalloweenScene reducedMotion={reducedMotion} />;
    case "christmas":
      return <ChristmasScene reducedMotion={reducedMotion} />;
    case "new-years":
      return <NewYearsScene reducedMotion={reducedMotion} />;
    case "earth-day":
      return <EarthDayScene reducedMotion={reducedMotion} />;
    case "valentines":
      return <ValentinesScene reducedMotion={reducedMotion} />;
    case "night-mode":
      return <NightScene reducedMotion={reducedMotion} />;
    default:
      return <DayScene reducedMotion={reducedMotion} />;
  }
}

function InteractiveScene({
  theme,
  reducedMotion,
}: {
  theme: ThemeToken;
  reducedMotion: boolean;
}) {
  const sceneRef = useRef<THREE.Group>(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const orientationEnabled = useRef(false);

  useEffect(() => {
    let motionTimeout: number | undefined;
    const handlePointerMove = (event: PointerEvent) => {
      if (orientationEnabled.current) return;
      targetRef.current.x = (event.clientX / window.innerWidth - 0.5) * 2;
      targetRef.current.y = (event.clientY / window.innerHeight - 0.5) * 2;
    };
    const resetPointer = () => {
      if (orientationEnabled.current) return;
      targetRef.current.x = 0;
      targetRef.current.y = 0;
    };
    const setMotionStatus = (status: MotionStatus) => {
      window.dispatchEvent(
        new CustomEvent<MotionStatus>(MOTION_STATUS_EVENT, { detail: status }),
      );
    };
    const handleOrientation = (event: DeviceOrientationEvent) => {
      if (event.beta === null || event.gamma === null) return;
      orientationEnabled.current = true;
      window.clearTimeout(motionTimeout);
      targetRef.current.x = THREE.MathUtils.clamp(event.beta / 45, -1, 1);
      targetRef.current.y = THREE.MathUtils.clamp(event.gamma / 45, -1, 1);
      setMotionStatus("enabled");
    };
    const enableDeviceMotion = async () => {
      if (typeof DeviceOrientationEvent === "undefined") {
        setMotionStatus("unsupported");
        return;
      }

      const orientationConstructor =
        DeviceOrientationEvent as OrientationEventConstructor;
      if (orientationConstructor.requestPermission) {
        try {
          const permission = await orientationConstructor.requestPermission();
          if (permission !== "granted") {
            setMotionStatus("denied");
            return;
          }
        } catch {
          setMotionStatus("denied");
          return;
        }
      }

      window.addEventListener("deviceorientation", handleOrientation);
      setMotionStatus("waiting");
      motionTimeout = window.setTimeout(() => {
        if (!orientationEnabled.current) setMotionStatus("unavailable");
      }, 2500);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerleave", resetPointer);
    window.addEventListener(MOTION_REQUEST_EVENT, enableDeviceMotion);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", resetPointer);
      window.removeEventListener(MOTION_REQUEST_EVENT, enableDeviceMotion);
      window.removeEventListener("deviceorientation", handleOrientation);
      window.clearTimeout(motionTimeout);
    };
  }, []);

  useFrame((_, delta) => {
    const scene = sceneRef.current;
    if (!scene || reducedMotion) return;

    scene.rotation.x = THREE.MathUtils.damp(
      scene.rotation.x,
      targetRef.current.y * 0.16,
      3,
      delta,
    );
    scene.rotation.y = THREE.MathUtils.damp(
      scene.rotation.y,
      targetRef.current.x * 0.2,
      3,
      delta,
    );
    scene.position.x = THREE.MathUtils.damp(
      scene.position.x,
      targetRef.current.y * -0.22,
      3,
      delta,
    );
    scene.position.y = THREE.MathUtils.damp(
      scene.position.y,
      targetRef.current.x * 0.16,
      3,
      delta,
    );
  });

  return (
    <group ref={sceneRef}>
      <ThemeScene key={theme} theme={theme} reducedMotion={reducedMotion} />
    </group>
  );
}

export default function ThemeCanvas() {
  const { themeToken } = useTheme();
  const reducedMotion = usePrefersReducedMotion();

  return (
    <div className="theme-canvas" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 9], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: false, powerPreference: "low-power" }}
        fallback={null}
      >
        <ambientLight intensity={0.8} />
        <InteractiveScene theme={themeToken} reducedMotion={reducedMotion} />
      </Canvas>
    </div>
  );
}
