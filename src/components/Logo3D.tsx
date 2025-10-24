"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Environment, Float, MeshReflectorMaterial } from "@react-three/drei";
import { Suspense, useRef, useEffect } from "react";
import * as THREE from "three";

interface LogoModelProps {
  modelPath: string;
}

function MouseLight() {
  const lightRef = useRef<THREE.PointLight>(null);
  const { pointer } = useThree();

  useFrame(() => {
    if (lightRef.current) {
      // Position de la lumière qui suit la souris
      const targetX = pointer.x * 4 - 1.5;
      const targetY = pointer.y * 4 - 1;
      const targetZ = -7; // Plus proche du logo pour un effet plus fort

      // Lerp pour un mouvement fluide
      lightRef.current.position.x = THREE.MathUtils.lerp(
        lightRef.current.position.x,
        targetX,
        0.15
      );
      lightRef.current.position.y = THREE.MathUtils.lerp(
        lightRef.current.position.y,
        targetY,
        0.15
      );
    }
  });

  return (
    <pointLight
      ref={lightRef}
      position={[0, 0, -2]}
      intensity={15}
      distance={2}
      decay={1}
      color="#00D9FF"
    />
  );
}

function LogoModel({ modelPath }: LogoModelProps) {
  const { scene } = useGLTF(modelPath);
  const meshRef = useRef<THREE.Group>(null);
  const { pointer } = useThree();

  // Appliquer matériau chrome aux meshes
  useEffect(() => {
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        const material = new THREE.MeshStandardMaterial({
          metalness: 0.9,        // Plus métallique pour refléter la lumière
          roughness: 0.2,        // Plus lisse pour les reflets
          envMapIntensity: 1.9,
          color: new THREE.Color(0xc7e3ea),
        });
        // Important: activer les lumières sur le matériau
        material.needsUpdate = true;
        child.material = material;
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);

  // Animation de rotation au hover
  useFrame(() => {
    if (meshRef.current) {
      // Rotation basée sur le hover de la souris
      const targetRotationY = -pointer.x * 0.3; // Suit la souris horizontalement (inversé)
      const targetRotationX = -pointer.y * 0.2; // Suit la souris verticalement

      // Lerp pour une rotation fluide
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        targetRotationY,
        0.05
      );
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        targetRotationX,
        0.05
      );
    }
  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={0}
      floatIntensity={0.3}
    >
      <primitive ref={meshRef} object={scene} scale={2} position={[-1.5, -1, -10]}/>
    </Float>
  );
}

function Loader() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-16 h-16 border-2 border-electric-blue border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export default function Logo3D({ modelPath = "/models/logo-v1.glb" }: { modelPath?: string }) {
  return (
    <div className="w-full h-full relative">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
      >
        <Suspense fallback={null}>
          {/* Lumière principale en face (frontale) */}
          <directionalLight position={[0, 0, 10]} intensity={1.1} color="#ffffffd2" />

          {/* Lumières latérales pour modeler */}
          <directionalLight position={[5, 2, 8]} intensity={1.0} color="#00D9FF" />
          <directionalLight position={[-5, 2, 8]} intensity={0.8} color="#ffffff" />

          {/* Lumière du haut (key light) */}
          <directionalLight position={[0, 5, 5]} intensity={0.7} color="#ffffff" />

          {/* Spotlight en face pour highlights */}
          <spotLight position={[0, 0, 12]} intensity={1.0} color="#00D9FF" angle={0.4} penumbra={1} />

          {/* Point lights pour highlights chrome */}
          <pointLight position={[0, 0, 8]} intensity={0.6} color="#00D9FF" />
          <pointLight position={[3, 3, 6]} intensity={0.4} color="#ffffff" />
          <pointLight position={[-3, -3, 6]} intensity={0.4} color="#ffffff" />

          {/* Lumière bleue qui suit la souris */}
          <MouseLight />

          <LogoModel modelPath={modelPath} />

          {/* Environment HDR pour reflets réalistes */}
          <Environment preset="city" background={false} />
        </Suspense>
      </Canvas>
    </div>
  );
}

// Preload the models
useGLTF.preload("/models/logo-v1.glb");
useGLTF.preload("/models/logo-v2.glb");
