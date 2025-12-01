import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';

const ThreeDElement = () => {
    const meshRef = useRef();
    const [hovered, setHovered] = useState(false);

    useFrame((state) => {
        if (!meshRef.current) return;

        // Continuous slow rotation
        meshRef.current.rotation.x += 0.002;
        meshRef.current.rotation.y += 0.003;

        // Mouse interaction (look-at effect)
        const { x, y } = state.mouse;
        meshRef.current.rotation.x += y * 0.01;
        meshRef.current.rotation.y += x * 0.01;
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <mesh
                ref={meshRef}
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
                scale={hovered ? 1.2 : 1}
            >
                <dodecahedronGeometry args={[1.8, 0]} />
                <meshStandardMaterial
                    color="#00FFFF"
                    wireframe
                    emissive="#00FFFF"
                    emissiveIntensity={0.5}
                    transparent
                    opacity={0.8}
                />
            </mesh>
        </Float>
    );
};

export default ThreeDElement;
