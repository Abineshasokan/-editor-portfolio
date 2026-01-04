'use client';

import { motion } from 'framer-motion';

export default function DemoReelSection() {
    return (
        <section className="py-20 px-6 relative z-10 bg-black/30">
            <div className="container mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">My Best Work – <span className="text-accent">60s Demo Reel</span></h2>
                    <p className="text-gray-400">
                        Showcasing pacing, hooks, dynamic captions, and immersive sound design.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative aspect-video w-full bg-gray-900 rounded-2xl overflow-hidden border border-white/10 shadow-2xl group"
                >
                    {/* Instagram Video Embed */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black">
                        <iframe
                            src="https://www.instagram.com/reel/DKrKurBigOR/embed"
                            className="w-full h-full object-contain border-none"
                            scrolling="no"
                            allow="encrypted-media"
                        ></iframe>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
