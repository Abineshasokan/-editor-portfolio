"use client";

import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { motion } from "framer-motion";

const skills = [
    { name: "DaVinci Resolve", level: 90, color: "#00FFFF" },
    { name: "Premiere Pro", level: 85, color: "#00CCFF" },
    { name: "After Effects", level: 80, color: "#0099FF" },
    { name: "Motion Design", level: 75, color: "#0066FF" },
];

const SystemStatus = () => {
    const graphRef = useRef<SVGSVGElement>(null);
    const [activeSkill, setActiveSkill] = useState<number | null>(null);

    useEffect(() => {
        if (!graphRef.current) return;

        const svg = d3.select(graphRef.current);
        const width = 400;
        const height = 200;
        const margin = { top: 20, right: 20, bottom: 30, left: 40 };

        svg.selectAll("*").remove();

        // Simulated real-time data
        const n = 40;
        const data = d3.range(n).map(() => Math.random() * 50 + 20);

        const x = d3.scaleLinear().domain([0, n - 1]).range([margin.left, width - margin.right]);
        const y = d3.scaleLinear().domain([0, 100]).range([height - margin.bottom, margin.top]);

        const line = d3.line<number>()
            .x((d, i) => x(i))
            .y((d) => y(d))
            .curve(d3.curveMonotoneX);

        const path = svg.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "#00FFFF")
            .attr("stroke-width", 2)
            .attr("d", line);

        // Grid lines
        svg.append("g")
            .attr("class", "grid")
            .attr("transform", `translate(0,${height - margin.bottom})`)
            .call(d3.axisBottom(x).ticks(5).tickSize(-height + margin.top + margin.bottom).tickFormat(() => ""))
            .attr("stroke", "rgba(0, 255, 255, 0.1)");

        svg.append("g")
            .attr("class", "grid")
            .attr("transform", `translate(${margin.left},0)`)
            .call(d3.axisLeft(y).ticks(5).tickSize(-width + margin.left + margin.right).tickFormat(() => ""))
            .attr("stroke", "rgba(0, 255, 255, 0.1)");

        // Animation loop
        const tick = () => {
            // Push new random value
            data.push(Math.random() * 30 + 40 + (Math.random() * 20 - 10));
            data.shift();

            path.datum(data)
                .attr("d", line);

            requestAnimationFrame(tick);
        };

        const animation = requestAnimationFrame(tick);

        return () => cancelAnimationFrame(animation);
    }, []);

    return (
        <section className="py-20 px-6 relative z-10 bg-black/80 border-y border-white/5">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col md:flex-row gap-12 items-start">

                    {/* Left: Dashboard Header */}
                    <div className="w-full md:w-1/3 space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            SYSTEM <span className="text-[#00FFFF]">STATUS</span>
                        </h2>
                        <p className="text-gray-400 font-mono text-sm">
                            &gt; INITIALIZING CORE MODULES...<br />
                            &gt; LOADING CREATIVE ASSETS...<br />
                            &gt; OPTIMIZING RENDER ENGINE...<br />
                            <span className="text-[#00FFFF] animate-pulse">&gt; SYSTEM ONLINE</span>
                        </p>

                        <div className="p-4 border border-[#00FFFF]/20 rounded bg-[#00FFFF]/5 backdrop-blur-sm">
                            <h3 className="text-[#00FFFF] font-mono text-sm mb-2">CPU LOAD</h3>
                            <svg ref={graphRef} viewBox="0 0 400 200" className="w-full h-auto overflow-visible"></svg>
                        </div>
                    </div>

                    {/* Right: Skill Gauges */}
                    <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="relative p-6 border border-white/10 rounded-lg bg-white/5 hover:border-[#00FFFF]/50 transition-colors group"
                                onMouseEnter={() => setActiveSkill(index)}
                                onMouseLeave={() => setActiveSkill(null)}
                            >
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-xl font-bold text-white group-hover:text-[#00FFFF] transition-colors">
                                        {skill.name}
                                    </h3>
                                    <span className="font-mono text-[#00FFFF]">{skill.level}%</span>
                                </div>

                                {/* Progress Bar */}
                                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        transition={{ duration: 1, ease: "easeOut" }}
                                        className="h-full bg-[#00FFFF] shadow-[0_0_10px_#00FFFF]"
                                    />
                                </div>

                                {/* Decorative Tech Elements */}
                                <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity">
                                    <div className="w-2 h-2 bg-[#00FFFF] rounded-full animate-ping" />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SystemStatus;
