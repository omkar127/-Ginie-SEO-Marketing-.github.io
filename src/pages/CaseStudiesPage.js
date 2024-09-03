import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CaseStudies from '../components/CaseStudies';
import CTASection from '../components/CTASection';
import '../styles/CaseStudiesPage.css';

const CaseStudiesPage = () => {
    return (
        <div className="case-studies-page">
            <Header />
            <section className="case-studies-hero">
                <div className="container">
                    <h1>Success Stories</h1>
                    <p>Discover how Ginie has helped businesses like yours achieve their SEO goals.</p>
                </div>
            </section>
            <section className="case-studies-list">
                <div className="container">
                    <h2>Case Studies</h2>
                    <CaseStudies />
                </div>
            </section>
            <CTASection 
                title="Want to See Your Business Here?"
                description="Get started with Ginie and take your SEO to the next level."
                buttonText="Start Your Journey"
                buttonLink="/signup"
            />
            <Footer />
        </div>
    );
};

export default CaseStudiesPage;


