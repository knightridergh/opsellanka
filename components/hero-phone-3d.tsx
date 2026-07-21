'use client';

import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Environment, MeshTransmissionMaterial, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

function PhoneModel() {
  const groupRef = useRef<THREE.Group>(null);
  const screenRef = useRef<THREE.MeshStandardMaterial>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.3;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
    }
    if (screenRef.current) {
      const t = state.clock.elapsedTime;
      // Animated wallpaper colors
      const hue = (t * 10) % 360;
      screenRef.current.color.setHSL(hue / 360, 0.7, 0.5);
      screenRef.current.emissive.setHSL(hue / 360, 0.8, 0.3);
      screenRef.current.emissiveIntensity = 0.5 + Math.sin(t * 2) * 0.2;
    }
  });

  return (
    <group ref={groupRef} rotation={[0, 0, 0]}>
      {/* Phone body */}
      <mesh castShadow>
        <boxGeometry args={[1.6, 3.4, 0.18]} />
        <MeshTransmissionMaterial
          transmission={0.9}
          thickness={0.5}
          roughness={0.1}
          ior={1.5}
          chromaticAberration={0.05}
          backside
          color="#1a1a2e"
          attenuationColor="#0a0a1a"
          attenuationDistance={0.5}
        />
      </mesh>

      {/* Screen */}
      <mesh position={[0, 0, 0.095]}>
        <planeGeometry args={[1.45, 3.25]} />
        <meshStandardMaterial
          ref={screenRef}
          color="#0066ff"
          emissive="#0066ff"
          emissiveIntensity={0.5}
          roughness={0.1}
          metalness={0.5}
        />
      </mesh>

      {/* Camera module */}
      <group position={[-0.45, 1.1, 0.1]}>
        <mesh>
          <boxGeometry args={[0.7, 0.7, 0.05]} />
          <meshStandardMaterial color="#0a0a0a" roughness={0.3} metalness={0.8} />
        </mesh>
        {/* Lenses */}
        {[[-0.15, 0.15], [0.15, 0.15], [-0.15, -0.15], [0.15, -0.15]].map(([x, y], i) => (
          <mesh key={i} position={[x, y, 0.04]}>
            <cylinderGeometry args={[0.1, 0.1, 0.04, 32]} />
            <meshStandardMaterial color="#000" roughness={0.1} metalness={1} />
          </mesh>
        ))}
        {/* Lens glass */}
        {[[-0.15, 0.15], [0.15, 0.15], [-0.15, -0.15], [0.15, -0.15]].map(([x, y], i) => (
          <mesh key={`g${i}`} position={[x, y, 0.06]}>
            <cylinderGeometry args={[0.07, 0.07, 0.01, 32]} />
            <meshStandardMaterial color="#001133" emissive="#003366" emissiveIntensity={0.5} roughness={0} metalness={1} />
          </mesh>
        ))}
      </group>

      {/* Side buttons */}
      <mesh position={[0.85, 0.5, 0]}>
        <boxGeometry args={[0.03, 0.3, 0.06]} />
        <meshStandardMaterial color="#333" metalness={0.9} roughness={0.2} />
      </mesh>
      <mesh position={[0.85, 0.1, 0]}>
        <boxGeometry args={[0.03, 0.15, 0.06]} />
        <meshStandardMaterial color="#333" metalness={0.9} roughness={0.2} />
      </mesh>
      <mesh position={[-0.85, 0.3, 0]}>
        <boxGeometry args={[0.03, 0.4, 0.06]} />
        <meshStandardMaterial color="#333" metalness={0.9} roughness={0.2} />
      </mesh>

      {/* Bottom speaker grilles */}
      {Array.from({ length: 6 }).map((_, i) => (
        <mesh key={`s${i}`} position={[-0.5 + i * 0.08, -1.65, 0.095]}>
          <cylinderGeometry args={[0.015, 0.015, 0.01, 16]} />
          <meshStandardMaterial color="#222" />
        </mesh>
      ))}
    </group>
  );
}

function OrbitingParticles() {
  const ref = useRef<THREE.Points>(null);
  const count = 200;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 3 + Math.random() * 2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.1;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.2;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#00ccff" transparent opacity={0.8} sizeAttenuation />
    </points>
  );
}

function FloatingChip({ position, color, scale = 1 }: { position: [number, number, number]; color: string; scale?: number }) {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
      <mesh position={position} scale={scale}>
        <boxGeometry args={[0.4, 0.4, 0.05]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.3} roughness={0.2} metalness={0.8} />
      </mesh>
    </Float>
  );
}

function Scene() {
  const { camera } = useThree();
  useFrame((state) => {
    camera.position.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.5;
    camera.position.y = 0.5 + Math.sin(state.clock.elapsedTime * 0.1) * 0.2;
    camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <ambientLight intensity={0.3} />
      <spotLight position={[5, 8, 5]} angle={0.3} penumbra={1} intensity={2} color="#00ccff" />
      <spotLight position={[-5, 3, 3]} angle={0.4} penumbra={1} intensity={1.5} color="#9933ff" />
      <pointLight position={[0, -3, 3]} intensity={1} color="#ff00aa" />

      <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.8}>
        <PhoneModel />
      </Float>

      <OrbitingParticles />

      {/* Floating chips */}
      <FloatingChip position={[2.5, 1.5, -1]} color="#00ccff" scale={0.6} />
      <FloatingChip position={[-2.8, -1, -0.5]} color="#9933ff" scale={0.5} />
      <FloatingChip position={[2, -1.8, 0.5]} color="#ff00aa" scale={0.4} />
      <FloatingChip position={[-2.2, 1.8, 0]} color="#00ff99" scale={0.45} />

      <ContactShadows position={[0, -2.5, 0]} opacity={0.3} scale={10} blur={2} far={5} color="#00ccff" />
      <Environment preset="night" />
    </>
  );
}

export function HeroPhone3D() {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 0.5, 6], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
       <Suspense fallback={null}>
     <Scene />
   </Suspense>
      </Canvas>
    </div>
  );
}
