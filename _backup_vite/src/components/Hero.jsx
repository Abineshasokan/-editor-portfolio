import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-overlay"></div>
            <div className="hero-video-container">
                {/* Placeholder for video background - using a dark cinematic gradient for now */}
                <div className="hero-video-placeholder"></div>
                {/* Uncomment below when you have a video file */}
                {/* <video autoPlay muted loop playsInline className="hero-video">
          <source src="/path/to/your/video.mp4" type="video/mp4" />
        </video> */}
            </div>

            <div className="container hero-content">
                <h1 className="hero-title reveal">
                    <span className="text-gradient">Visual Storytelling</span>
                    <br />
                    <span className="hero-subtitle-text">Redefined</span>
                </h1>
                <p className="hero-description reveal reveal-delay-1">
                    I craft high-impact social media content that stops the scroll.
                    Video Editor & Motion Designer.
                </p>
                <div className="hero-cta reveal reveal-delay-2">
                    <a href="#portfolio" className="btn btn-primary">View Work</a>
                    <a href="#contact" className="btn btn-secondary">Let's Talk</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
