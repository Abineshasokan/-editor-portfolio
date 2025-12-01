'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface FloatingElementProps {
    children: React.ReactNode;
    className?: string;
    depth?: number; // 1 is standard, higher is further away (slower movement)
}

export default function FloatingElement({ children, className = "", depth = 1 }: FloatingElementProps) {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth spring physics for repulsion
    const springConfig = { damping: 15, stiffness: 150, mass: 0.5 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!ref.current) return;

            const rect = ref.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const distanceX = e.clientX - centerX;
            const distanceY = e.clientY - centerY;
            const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

            // Repulsion radius
            const radius = 300;

            if (distance < radius) {
                // Calculate repulsion force (inverse square-ish)
                const force = (radius - distance) / radius;
                const repulsionX = -(distanceX / distance) * force * 100 * depth;
                const repulsionY = -(distanceY / distance) * force * 100 * depth;

                x.set(repulsionX);
                y.set(repulsionY);
            } else {
                x.set(0);
                y.set(0);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [depth, x, y]);

    // Add subtle floating animation
    const floatY = useTransform(y, (val) => val); // Just pass through for now, could add sine wave

    return (
        <motion.div
            ref={ref}
            style={{ x: springX, y: springY }}
            className={`relative ${className}`}
            animate={{
                y: [0, -10, 0],
            }}
            transition={{
                duration: 4 * depth,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        >
            {children}
        </motion.div>
    );
}
