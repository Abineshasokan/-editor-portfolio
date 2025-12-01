import React, { useEffect } from 'react';
import '../styles/Modal.css';

const Modal = ({ isOpen, onClose, video }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen || !video) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content glass-card" onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>

                <div className="modal-video-container">
                    {/* Placeholder for actual video player */}
                    <div className="video-placeholder-player">
                        <div className="play-icon-large">▶</div>
                        <p>Playing: {video.title}</p>
                    </div>
                </div>

                <div className="modal-info glass-panel">
                    <h3>{video.title}</h3>
                    <p>{video.category}</p>
                </div>
            </div>
        </div>
    );
};

export default Modal;
