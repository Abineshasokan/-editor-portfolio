'use client';

import { motion } from 'framer-motion';
import { Clock, CheckCircle, MessageSquare, Layers } from 'lucide-react';

export default function TrustSection() {
    return (
        <section className="py-20 px-6 relative z-10 bg-background border-y border-white/5">
            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center p-6"
                    >
                        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 text-accent">
                            <Clock className="w-8 h-8" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">1+ Year Experience</h3>
                        <p className="text-sm text-gray-400">Dedicated to mastering the art of video editing and social media growth.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-center p-6"
                    >
                        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 text-accent">
                            <Layers className="w-8 h-8" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">Pro Tools</h3>
                        <p className="text-sm text-gray-400">DaVinci Resolve, Premiere Pro, After Effects, Affinity.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-center p-6"
                    >
                        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 text-accent">
                            <CheckCircle className="w-8 h-8" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">On-Time Delivery</h3>
                        <p className="text-sm text-gray-400">Respecting your schedule with reliable turnarounds.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-center p-6"
                    >
                        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 text-accent">
                            <MessageSquare className="w-8 h-8" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">Clear Communication</h3>
                        <p className="text-sm text-gray-400">Keeping you updated every step of the way.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
