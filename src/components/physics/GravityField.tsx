"use client";

import React, { useEffect, useRef } from "react";
import Matter from "matter-js";

const GravityField = () => {
    const sceneRef = useRef<HTMLDivElement>(null);
    const engineRef = useRef<Matter.Engine | null>(null);
    const renderRef = useRef<Matter.Render | null>(null);
    const runnerRef = useRef<Matter.Runner | null>(null);

    useEffect(() => {
        if (!sceneRef.current) return;

        // Module aliases
        const Engine = Matter.Engine,
            Render = Matter.Render,
            Runner = Matter.Runner,
            Bodies = Matter.Bodies,
            Composite = Matter.Composite,
            Mouse = Matter.Mouse,
            MouseConstraint = Matter.MouseConstraint,
            Events = Matter.Events,
            Body = Matter.Body,
            Vector = Matter.Vector;

        // Create engine
        const engine = Engine.create();
        engine.gravity.y = 0; // Zero gravity
        engine.gravity.x = 0;
        engineRef.current = engine;

        // Create renderer
        const render = Render.create({
            element: sceneRef.current,
            engine: engine,
            options: {
                width: window.innerWidth,
                height: window.innerHeight,
                background: "transparent",
                wireframes: false,
                pixelRatio: window.devicePixelRatio,
            },
        });
        renderRef.current = render;

        // Create bodies
        const bodies: Matter.Body[] = [];
        const colors = ["#00FFFF", "#333333", "#666666"];

        for (let i = 0; i < 20; i++) {
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;
            const size = Math.random() * 30 + 10;
            const color = colors[Math.floor(Math.random() * colors.length)];

            const body = Bodies.polygon(x, y, Math.floor(Math.random() * 3) + 3, size, {
                frictionAir: 0.02,
                restitution: 0.8,
                render: {
                    fillStyle: "transparent",
                    strokeStyle: color,
                    lineWidth: 1,
                },
            });

            // Give random initial velocity
            Body.setVelocity(body, {
                x: (Math.random() - 0.5) * 2,
                y: (Math.random() - 0.5) * 2
            });

            bodies.push(body);
        }

        Composite.add(engine.world, bodies);

        // Add mouse control
        const mouse = Mouse.create(render.canvas);
        const mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false,
                },
            },
        });

        Composite.add(engine.world, mouseConstraint);

        // Keep the mouse in sync with rendering
        render.mouse = mouse;

        // Repulsion force
        Events.on(engine, "beforeUpdate", () => {
            const mousePosition = mouse.position;

            bodies.forEach(body => {
                const dx = body.position.x - mousePosition.x;
                const dy = body.position.y - mousePosition.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 200) {
                    const forceMagnitude = (200 - distance) * 0.00005;
                    Body.applyForce(body, body.position, {
                        x: (dx / distance) * forceMagnitude,
                        y: (dy / distance) * forceMagnitude
                    });
                }

                // Screen wrapping
                if (body.position.x < -50) Body.setPosition(body, { x: window.innerWidth + 50, y: body.position.y });
                if (body.position.x > window.innerWidth + 50) Body.setPosition(body, { x: -50, y: body.position.y });
                if (body.position.y < -50) Body.setPosition(body, { x: body.position.x, y: window.innerHeight + 50 });
                if (body.position.y > window.innerHeight + 50) Body.setPosition(body, { x: body.position.x, y: -50 });
            });
        });

        // Run the engine
        Render.run(render);

        // Create runner
        const runner = Runner.create();
        runnerRef.current = runner;
        Runner.run(runner, engine);

        // Handle resize
        const handleResize = () => {
            render.canvas.width = window.innerWidth;
            render.canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            Render.stop(render);
            Runner.stop(runner);
            if (render.canvas) render.canvas.remove();
        };
    }, []);

    return (
        <div
            ref={sceneRef}
            className="fixed inset-0 pointer-events-none z-0"
            style={{ opacity: 0.3 }}
        />
    );
};

export default GravityField;
