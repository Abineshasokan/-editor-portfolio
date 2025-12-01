import React from 'react';
import '../styles/About.css';

const skills = [
    { name: "DaVinci Resolve", level: 95 },
    { name: "After Effects", level: 90 },
    { name: "Adobe Premiere Pro", level: 85 },
    { name: "Sound Design", level: 80 },
    { name: "Color Grading", level: 85 },
    { name: "Storytelling", level: 100 },
];

const About = () => {
    return (
        <section id="about" className="section container about-section">
            <div className="about-content reveal">
                <h2 className="section-title">About Me</h2>
                <p className="about-text">
                    I'm Abinesh, a passionate video editor with 1+ Year of hands-on experience in social media editing. I'm proficient in using editing tools like DaVinci Resolve, Premiere Pro, and After Effects. I've honed my skills through dedicated courses in social media editing, ensuring that I can bring creativity and efficiency to your projects.
                </p>
                <p className="about-text">
                    🚀 Video Editor | Motion Designer<br />
                    🎥 Reels • Youtube shots • Cinematic Titles • Branding Content<br />
                    👨‍💻 Founder of NeshAuraFx<br />
                    💌 Let’s create stories that stick
                </p>
                <div className="stats-grid">
                    <div className="stat-item">
                        <span className="stat-number">50+</span>
                        <span className="stat-label">Projects Completed</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">1M+</span>
                        <span className="stat-label">Views Generated</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">1+</span>
                        <span className="stat-label">Years Experience</span>
                    </div>
                </div>
            </div>

            <div className="skills-container reveal reveal-delay-2">
                <h3 className="skills-title">Technical Arsenal</h3>
                <div className="skills-list">
                    {skills.map(skill => (
                        <div key={skill.name} className="skill-item">
                            <div className="skill-info">
                                <span>{skill.name}</span>
                                <span>{skill.level}%</span>
                            </div>
                            <div className="skill-bar-bg">
                                <div className="skill-bar-fill" style={{ width: `${skill.level}%` }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
