import React, { useState } from 'react';
import VideoCard from './VideoCard';
import Modal from './Modal';
import '../styles/Portfolio.css';

const projects = [
    { id: 1, title: "Neon City", category: "Music Video", size: "large" },
    { id: 2, title: "Tech Review", category: "YouTube", size: "medium" },
    { id: 3, title: "Fashion Week", category: "Instagram Reel", size: "tall" },
    { id: 4, title: "Gaming Highlights", category: "Montage", size: "medium" },
    { id: 5, title: "Corporate Promo", category: "Commercial", size: "large" },
    { id: 6, title: "Travel Vlog", category: "Social Media", size: "tall" },
];

const Portfolio = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);

    return (
        <section id="portfolio" className="section container">
            <div className="portfolio-header reveal">
                <h2 className="section-title">Selected Works</h2>
                <div className="filter-buttons">
                    <button className="filter-btn active">All</button>
                    <button className="filter-btn">YouTube</button>
                    <button className="filter-btn">Instagram</button>
                    <button className="filter-btn">Commercial</button>
                </div>
            </div>

            <div className="portfolio-grid">
                {projects.map((project, index) => (
                    <div key={project.id} className={`reveal reveal-delay-${index % 3 + 1}`} onClick={() => setSelectedVideo(project)}>
                        <VideoCard {...project} />
                    </div>
                ))}
            </div>

            <Modal
                isOpen={!!selectedVideo}
                onClose={() => setSelectedVideo(null)}
                video={selectedVideo}
            />
        </section>
    );
};

export default Portfolio;
