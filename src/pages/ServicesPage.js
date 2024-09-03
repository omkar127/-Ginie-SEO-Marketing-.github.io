import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServicesOverview from '../components/ServicesOverview';
import CTASection from '../components/CTASection';
import '../styles/ServicesPage.css';

const ServicesPage = () => {
    return (
        <div className="services-page">
            <Header />
            <section className="services-hero">
                <div className="container">
                    <h1>Our Services</h1>
                    <p>Explore the full range of SEO tools and services Ginie offers to boost your online presence.</p>
                </div>
            </section>
            <section className="services-overview-section">
                <div className="container">
                    <ServicesOverview />
                </div>
            </section>
            <CTASection 
                title="Ready to Take Your SEO to the Next Level?"
                description="Get started with Ginie today and see the difference our tools can make."
                buttonText="Choose Your Plan"
                buttonLink="/pricing"
            />
            <Footer />
        </div>
    );
};

export default ServicesPage;
