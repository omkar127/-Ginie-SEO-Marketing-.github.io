import React from 'react';
import '../styles/HeroSection.css';

const HeroSection = () => {
    return (
        <section className="hero">
            <div className="container">
                <h1>Boost Your SEO with Ginie</h1>
                <p>Your all-in-one SEO tool to dominate search engines.</p>
                <div className="hero-buttons">
                    <a href="/signup" className="btn-primary" aria-label="Get Started">Get Started</a>
                    <a href="/learn-more" className="btn-secondary" aria-label="Learn More">Learn More</a>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;


