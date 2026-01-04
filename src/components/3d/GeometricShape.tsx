"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import * as THREE from "three";

const Octahedron = () => {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (!meshRef.current) return;

        // Continuous rotation
        meshRef.current.rotation.y += 0.005;
        meshRef.current.rotation.x += 0.002;

        // Mouse follow tilt
        const { x, y } = state.pointer;
        meshRef.current.rotation.x += y * 0.01;
        meshRef.current.rotation.y += x * 0.01;
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <mesh ref={meshRef} scale={2}>
                <octahedronGeometry args={[1, 0]} />
                <meshStandardMaterial
                    color="#00FFFF"
                    wireframe
                    transparent
                    opacity={0.3}
                    emissive="#00FFFF"
                    emissiveIntensity={0.5}
                />
            </mesh>
        </Float>
    );
};

const GeometricShape = () => {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
            <Canvas camera={{ position: [0, 0, 5] }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <Octahedron />
                <Environment preset="city" />
            </Canvas>
        </div>
    );
};

export default GeometricShape;
