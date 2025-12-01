'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    image?: string;
    demoLink?: string;
    repoLink?: string;
    index: number;
}

export default function ProjectCard({ title, description, tags, image, demoLink, repoLink, index }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-accent/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,255,0.1)]"
        >
            {/* Image Placeholder */}
            <div className="h-48 bg-gradient-to-br from-gray-800 to-black relative overflow-hidden">
                <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* If we had real images, we'd use Next.js Image here */}
                <div className="flex items-center justify-center h-full text-gray-600 font-mono text-sm">
                    {image ? <Image src={image} alt={title} fill className="object-cover" /> : "[PROJECT PREVIEW]"}
                </div>
            </div>

            <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">{title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">{description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {tags.map((tag) => (
                        <span key={tag} className="text-xs font-mono px-2 py-1 rounded-full bg-white/5 text-gray-300 border border-white/5">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    {demoLink && (
                        <a href={demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-white hover:text-accent transition-colors">
                            <ExternalLink className="w-4 h-4" /> Visit Platform
                        </a>
                    )}
                    {repoLink && (
                        <a href={repoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                            <Github className="w-4 h-4" /> Code
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
