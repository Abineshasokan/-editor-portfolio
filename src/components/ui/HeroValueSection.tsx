'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Instagram, Calendar } from 'lucide-react';

export default function HeroValueSection() {
    return (
        <section className="py-20 px-6 relative z-10 bg-background">
            <div className="container mx-auto max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                        I help creators and brands <span className="text-accent">grow engagement</span> using high-retention short-form video edits.
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Stop losing viewers. Start building a loyal audience with professional, data-driven editing that keeps eyes glued to the screen.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <a
                            href="https://www.instagram.com/abin_esh_26?igsh=amVpc2xvZjBidTg1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-accent text-accent font-bold rounded-lg hover:bg-accent/10 transition-colors flex items-center justify-center gap-2"
                        >
                            <Instagram className="w-5 h-5" />
                            Message me on Instagram
                        </a>
                        <a
                            href="https://us05web.zoom.us/launch/chat?src=direct_chat_link&email=abinesh.ks2006%40gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto px-8 py-4 bg-accent text-black font-bold rounded-lg hover:bg-cyan-400 transition-colors flex items-center justify-center gap-2"
                        >
                            <Calendar className="w-5 h-5" />
                            Book a free 15-minute call
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
