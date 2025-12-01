import React, { useState } from 'react';
import '../styles/Portfolio.css';

const VideoCard = ({ title, category, size }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    // Generate a random color for the placeholder to make it look dynamic
    // In a real app, you'd pass a real image URL
    const placeholderUrl = `https://placehold.co/600x400/1a1a1a/FFF?text=${encodeURIComponent(title)}`;

    return (
        <div className={`video-card ${size} glass-card`}>
            <div className={`video-thumbnail ${!isLoaded ? 'loading' : ''}`}>
                <img
                    src={placeholderUrl}
                    alt={title}
                    className="video-thumb-img"
                    loading="lazy"
                    onLoad={() => setIsLoaded(true)}
                />

                {!isLoaded && <div className="skeleton-loader"></div>}

                <div className="play-button glass-btn">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 5V19L19 12L8 5Z" fill="white" />
                    </svg>
                </div>
            </div>
            <div className="video-info glass-panel">
                <span className="video-category">{category}</span>
                <h3 className="video-title">{title}</h3>
            </div>
        </div>
    );
};

export default VideoCard;
