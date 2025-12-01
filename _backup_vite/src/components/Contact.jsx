import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="section container contact-section">
            <div className="contact-content reveal">
                <h2 className="section-title">Let's Create Together</h2>
                <p className="contact-text">
                    Ready to take your content to the next level? Whether you need a high-energy edit,
                    motion graphics, or a full social media strategy, I'm here to help.
                </p>
                <a href="mailto:abineshabinesh46406@gmail.com" className="email-link">
                    abineshabinesh46406@gmail.com
                </a>
                <div className="social-links">
                    <a href="https://www.instagram.com/abin_esh_26?igsh=amVpc2xvZjBidTg1" target="_blank" rel="noopener noreferrer" className="social-link">Instagram</a>
                    <a href="https://youtube.com/@nesh_aura_fx?si=yH4gTerXDXYfIe4f" target="_blank" rel="noopener noreferrer" className="social-link">YouTube</a>
                    <a href="https://www.linkedin.com/in/abinesh-asokan-7457b2290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
                </div>
            </div>

            <form className="contact-form reveal reveal-delay-2" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder="Your Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="your@email.com" />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Project Details</label>
                    <textarea id="message" rows="5" placeholder="Tell me about your project..."></textarea>
                </div>
                <button type="submit" className="btn btn-primary submit-btn">Send Message</button>
            </form>
        </section>
    );
};

export default Contact;
