import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion, useScroll, useTransform } from 'framer-motion';
import ThreeDElement from './ThreeDElement';
import '../styles/Hero.css'; // Reusing Hero styles but will add parallax specific ones

const ParallaxHero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    // Parallax layers
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const foregroundY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);

    return (
        <section ref={ref} className="hero-section parallax-hero">
            {/* Layer 1: Deep Background (Aura) */}
            <motion.div
                className="parallax-layer layer-bg"
                style={{ y: backgroundY }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-video-container">
                    <div className="hero-video-placeholder"></div>
                </div>
            </motion.div>

            {/* Layer 2: 3D Elements */}
            <div className="parallax-layer layer-3d">
                <Canvas camera={{ position: [0, 0, 5] }} dpr={[1, 2]}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />
                    <ThreeDElement />
                </Canvas>
            </div>

            {/* Layer 3: Main Text */}
            <motion.div
                className="container hero-content parallax-layer layer-text"
                style={{ y: textY }}
            >
                <h1 className="hero-title">
                    <span className="text-gradient">Visual Storytelling</span>
                    <br />
                    <span className="hero-subtitle-text">Redefined</span>
                </h1>
                <p className="hero-description">
                    I craft high-impact social media content that stops the scroll.
                    Video Editor & Motion Designer.
                </p>
                <div className="hero-cta">
                    <a href="#portfolio" className="btn btn-primary glass-btn">View Work</a>
                    <a href="#contact" className="btn btn-secondary glass-btn">Let's Talk</a>
                </div>
            </motion.div>

            {/* Layer 4: Foreground Accents (Optional) */}
            <motion.div
                className="parallax-layer layer-fg"
                style={{ y: foregroundY }}
            >
                {/* Add decorative elements here if needed */}
            </motion.div>
        </section>
    );
};

export default ParallaxHero;
