'use client';

import { motion } from 'framer-motion';
import { Zap, Film, Wand2 } from 'lucide-react';

const services = [
    {
        icon: Zap,
        title: "Short-Form Content",
        description: "High-retention edits for Reels, Shorts, and TikToks designed to stop the scroll and maximize engagement."
    },
    {
        icon: Film,
        title: "Long-Form Editing",
        description: "Narrative-driven editing for YouTube videos and podcasts that keeps viewers watching until the very end."
    },
    {
        icon: Wand2,
        title: "Visual Enhancements",
        description: "Professional color correction, motion graphics, and dynamic subtitles to polish your raw footage."
    }
];

export default function ServicesSection() {
    return (
        <section className="py-20 px-6 relative z-10 bg-background">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">WHAT I <span className="text-accent">DO</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Specialized editing services tailored for content creators and brands.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/50 transition-all duration-300 hover:bg-white/10"
                        >
                            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6 text-accent">
                                <service.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
                            <p className="text-gray-400 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
