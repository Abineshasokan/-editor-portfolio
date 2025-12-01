'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Octahedron, Environment } from '@react-three/drei';
import * as THREE from 'three';

function RotatingShape() {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state, delta) => {
        if (meshRef.current) {
            // Ambient rotation
            meshRef.current.rotation.x += delta * 0.2;
            meshRef.current.rotation.y += delta * 0.3;

            // Mouse follow tilt (subtle)
            const { x, y } = state.mouse;
            meshRef.current.rotation.x += y * 0.1;
            meshRef.current.rotation.y += x * 0.1;
        }
    });

    return (
        <Octahedron args={[1, 0]} ref={meshRef} scale={2.5}>
            <meshStandardMaterial wireframe color="#00FFFF" transparent opacity={0.3} />
        </Octahedron>
    );
}

export default function Scene() {
    return (
        <div className="w-full h-full absolute inset-0">
            <Canvas camera={{ position: [0, 0, 5] }} dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
                <RotatingShape />
                <Environment preset="city" />
            </Canvas>
        </div>
    );
}
