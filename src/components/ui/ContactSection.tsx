'use client';

import { motion } from 'framer-motion';
import { Instagram, Linkedin, Youtube, MessageCircle, Calendar, Mail } from 'lucide-react';

export default function ContactSection() {
    const socialLinks = [
        { icon: Instagram, href: "https://www.instagram.com/abin_esh_26?igsh=amVpc2xvZjBidTg1", label: "Instagram" },
        { icon: Linkedin, href: "https://www.linkedin.com/in/abinesh-asokan-7457b2290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", label: "LinkedIn" },
        { icon: Youtube, href: "https://youtube.com/@nesh_aura_fx?si=yH4gTerXDXYfIe4f", label: "YouTube" },
        { icon: MessageCircle, href: "https://wa.me/919342601198?text=Hello%20NeshAuraFx,%20I'd%20like%20to%20discuss%20a%20project.", label: "WhatsApp" },
        { icon: Mail, href: "mailto:abineshabinesh46406@gmail.com", label: "Email" },
    ];

    return (
        <section id="contact" className="py-20 px-6 relative z-10 bg-black/80 backdrop-blur-md border-t border-white/5">
            <div className="container mx-auto max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                        LET'S <span className="text-accent">CONNECT</span>
                    </h2>

                    {/* Real-Time Status Indicator */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </span>
                        <span className="text-sm font-mono text-green-400">AVAILABLE NOW</span>
                    </div>

                    <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
                        Ready to elevate your digital presence? Reach out through any of the channels below or schedule a meeting directly.
                    </p>
                </motion.div>

                {/* Social Icons */}
                <div className="flex justify-center gap-8 mb-16 flex-wrap">
                    {socialLinks.map((social, index) => (
                        <motion.a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, color: "#00FFFF" }}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="p-4 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:border-accent/50 hover:shadow-[0_0_20px_rgba(0,255,255,0.2)] transition-all duration-300"
                        >
                            <social.icon className="w-8 h-8" />
                        </motion.a>
                    ))}
                </div>

                {/* Scheduling CTA */}
                <div className="space-y-8">
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="relative inline-block"
                    >
                        <div className="absolute -inset-1 bg-accent rounded-lg blur opacity-25 animate-pulse"></div>
                        <a
                            href="https://us05web.zoom.us/launch/chat?src=direct_chat_link&email=abinesh.ks2006%40gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative flex items-center gap-3 px-8 py-4 bg-accent text-black font-bold rounded-lg hover:bg-cyan-400 transition-colors"
                        >
                            <Calendar className="w-5 h-5" />
                            BOOK A VIRTUAL MEETING
                        </a>
                    </motion.div>

                    <p className="text-xl text-white font-medium">
                        Don't let your content get lost in the feed. <span className="text-accent">Let's make it stand out.</span>
                    </p>
                </div>
            </div>
        </section>
    );
}
