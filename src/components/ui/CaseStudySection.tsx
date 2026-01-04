'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Users, CheckCircle2 } from 'lucide-react';

export default function CaseStudySection() {
    return (
        <section className="py-20 px-6 relative z-10 bg-black/30">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">CASE <span className="text-accent">STUDY</span></h2>
                    <p className="text-gray-400">Real results from strategic editing.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Case Study 1 */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/5 rounded-2xl p-8 border border-white/10"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                                <TrendingUp className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-bold">Engagement Growth</h3>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h4 className="text-sm font-mono text-gray-500 mb-2">THE PROBLEM</h4>
                                <p className="text-gray-300">
                                    A content creator was struggling with low retention rates on Instagram Reels, with most viewers dropping off after 3 seconds.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-sm font-mono text-gray-500 mb-2">MY APPROACH</h4>
                                <p className="text-gray-300">
                                    Implemented dynamic hooks, faster pacing, and engaging captions to maintain visual interest throughout the video.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-sm font-mono text-accent mb-2">THE OUTCOME</h4>
                                <p className="text-white font-medium">
                                    Increased average watch time by 40% and doubled the engagement rate within 30 days.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Case Study 2 */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/5 rounded-2xl p-8 border border-white/10"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                                <Users className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-bold">Brand Consistency</h3>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h4 className="text-sm font-mono text-gray-500 mb-2">THE PROBLEM</h4>
                                <p className="text-gray-300">
                                    A personal brand lacked a cohesive visual style, making their feed look unprofessional and scattered.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-sm font-mono text-gray-500 mb-2">MY APPROACH</h4>
                                <p className="text-gray-300">
                                    Developed a unified color grading style and font system, applying it consistently across all short-form content.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-sm font-mono text-accent mb-2">THE OUTCOME</h4>
                                <p className="text-white font-medium">
                                    Established a recognizable brand identity, leading to a more professional appearance and higher trust from potential clients.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
