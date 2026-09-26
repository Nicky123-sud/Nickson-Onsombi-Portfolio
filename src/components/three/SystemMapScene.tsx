import { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

type NodeId = "frontend" | "api" | "backend" | "database" | "ai" | "data";

type SystemNode = {
  id: NodeId;
  label: string;
  position: [number, number, number];
  tone: "accent" | "accent-2";
};

const NODES: SystemNode[] = [
  { id: "frontend", label: "Frontend", position: [-1.9, 1.15, 0.4], tone: "accent" },
  { id: "api", label: "API", position: [-0.5, 1.65, -0.35], tone: "accent" },
  { id: "backend", label: "Backend", position: [1.0, 1.0, 0.25], tone: "accent" },
  { id: "database", label: "Database", position: [1.85, -0.25, -0.4], tone: "accent-2" },
  { id: "ai", label: "AI", position: [0.3, -1.35, 0.35], tone: "accent-2" },
  { id: "data", label: "Data", position: [-1.25, -0.95, -0.25], tone: "accent-2" },
];

const LINKS: [NodeId, NodeId][] = [
  ["frontend", "api"],
  ["api", "backend"],
  ["api", "ai"],
  ["backend", "database"],
  ["backend", "ai"],
  ["ai", "data"],
  ["data", "database"],
];

const TONE_COLOR: Record<SystemNode["tone"], string> = {
  accent: "#29d3ff",
  "accent-2": "#19c37d",
};

function nodePosition(id: NodeId) {
  const node = NODES.find((n) => n.id === id)!;
  return new THREE.Vector3(...node.position);
}

function Edge({ from, to }: { from: THREE.Vector3; to: THREE.Vector3 }) {
  const positions = useMemo(
    () => new Float32Array([from.x, from.y, from.z, to.x, to.y, to.z]),
    [from, to],
  );

  return (
    <line>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <lineBasicMaterial color="#29d3ff" transparent opacity={0.28} />
    </line>
  );
}

function Node({ node }: { node: SystemNode }) {
  const color = TONE_COLOR[node.tone];
  return (
    <group position={node.position}>
      <mesh>
        <icosahedronGeometry args={[0.1, 0]} />
        <meshBasicMaterial color={color} />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.28, 12, 12]} />
        <meshBasicMaterial color={color} transparent opacity={0.12} depthWrite={false} />
      </mesh>
    </group>
  );
}

function DataPulses() {
  const groupRef = useRef<THREE.Group>(null);
  const pulses = useMemo(
    () =>
      LINKS.slice(0, 4).map(([a, b], i) => ({
        from: nodePosition(a),
        to: nodePosition(b),
        offset: i / 4,
        speed: 0.18 + i * 0.03,
      })),
    [],
  );

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    groupRef.current?.children.forEach((mesh, i) => {
      const p = pulses[i];
      const progress = (((t * p.speed + p.offset) % 1) + 1) % 1;
      mesh.position.lerpVectors(p.from, p.to, progress);
    });
  });

  return (
    <group ref={groupRef}>
      {pulses.map((_, i) => (
        <mesh key={i}>
          <sphereGeometry args={[0.035, 8, 8]} />
          <meshBasicMaterial color="#8be7ff" />
        </mesh>
      ))}
    </group>
  );
}

/** Projects each node's 3D position to screen space and writes it into the label refs each frame (no re-renders). */
function LabelProjector({ labelRefs }: { labelRefs: React.RefObject<(HTMLSpanElement | null)[]> }) {
  const { camera, size } = useThree();
  const vector = useMemo(() => new THREE.Vector3(), []);

  useFrame(() => {
    NODES.forEach((node, i) => {
      const el = labelRefs.current[i];
      if (!el) return;
      vector.set(...node.position).project(camera);
      const x = (vector.x * 0.5 + 0.5) * size.width;
      const y = (-vector.y * 0.5 + 0.5) * size.height;
      el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, calc(-50% + 26px))`;
      el.style.opacity = vector.z < 1 ? "1" : "0";
    });
  });

  return null;
}

function Rig({ spin, labelRefs }: { spin: boolean; labelRefs: React.RefObject<(HTMLSpanElement | null)[]> }) {
  const groupRef = useRef<THREE.Group>(null);
  const lines = useMemo(
    () => LINKS.map(([a, b]) => ({ key: `${a}-${b}`, from: nodePosition(a), to: nodePosition(b) })),
    [],
  );

  useFrame((state, delta) => {
    const group = groupRef.current;
    if (!group) return;
    if (spin) {
      group.rotation.y += delta * 0.12;
    }
    const targetX = state.pointer.y * 0.18;
    group.rotation.x += (targetX - group.rotation.x) * 0.04;
    if (!spin) {
      const targetY = group.rotation.y + state.pointer.x * 0.25;
      group.rotation.y += (targetY - group.rotation.y) * 0.02;
    }
  });

  return (
    <>
      <group ref={groupRef}>
        {lines.map((line) => (
          <Edge key={line.key} from={line.from} to={line.to} />
        ))}
        <DataPulses />
        {NODES.map((node) => (
          <Node key={node.id} node={node} />
        ))}
      </group>
      <LabelProjector labelRefs={labelRefs} />
    </>
  );
}

type SystemMapSceneProps = {
  reducedMotion?: boolean;
  dpr?: number;
  labelRefs: React.RefObject<(HTMLSpanElement | null)[]>;
};

export default function SystemMapScene({ reducedMotion = false, dpr = 1.5, labelRefs }: SystemMapSceneProps) {
  return (
    <Canvas
      dpr={dpr}
      frameloop={reducedMotion ? "demand" : "always"}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      camera={{ position: [0, 0, 6], fov: 42 }}
    >
      <Rig spin={!reducedMotion} labelRefs={labelRefs} />
    </Canvas>
  );
}
