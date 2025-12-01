'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Scene from '../3d/Scene';
import FloatingElement from './FloatingElement';

export default function ParallaxHero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={ref} className="relative h-screen overflow-hidden bg-background flex items-center justify-center">
            {/* Background Layer (Slowest) - 3D Scene - Hidden on mobile for performance */}
            <motion.div style={{ y: y1 }} className="absolute inset-0 z-0 opacity-60 hidden md:block">
                <Scene />
            </motion.div>

            {/* Middle Layer (Medium Speed) - Decorative Elements */}
            <motion.div style={{ y: y2 }} className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center">
                <FloatingElement depth={2} className="absolute -left-20 top-1/4">
                    <div className="w-[600px] h-[600px] border border-accent/10 rounded-full opacity-20 blur-xl" />
                </FloatingElement>
                <FloatingElement depth={1} className="absolute -right-20 bottom-1/4">
                    <div className="w-[800px] h-[800px] border border-accent/5 rounded-full opacity-10 blur-2xl" />
                </FloatingElement>
            </motion.div>

            {/* Foreground Layer (Fastest) - Content */}
            <motion.div style={{ y: y3, opacity }} className="relative z-20 text-center px-4">
                <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">
                    WELCOME <span className="text-accent drop-shadow-[0_0_15px_rgba(0,255,255,0.5)]">YOU</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-mono tracking-wide">
                    ADVANCED INTERACTIVE PORTFOLIO
                </p>
            </motion.div>

            {/* Overlay Gradient for smooth transition */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-30" />
        </section>
    );
}
