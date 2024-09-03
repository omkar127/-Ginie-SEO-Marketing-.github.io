import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import ServicesOverview from '../components/ServicesOverview';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';
import '../styles/HomePage.css';

const HomePage = () => {
    return (
        <div className="home-page">
            <Header />
            <main>
                <section className="hero-section">
                    <HeroSection />
                </section>
                <section className="services-overview">
                    <ServicesOverview />
                </section>
                <section className="why-choose-us">
                    <WhyChooseUs />
                </section>
                <section className="testimonials">
                    <Testimonials />
                </section>
                <section className="cta-section">
                    <CTASection 
                        title="Unlock Your Website’s Full Potential"
                        description="Sign up for Ginie today and start improving your SEO instantly."
                        buttonText="Start Free Trial"
                        buttonLink="/signup"
                    />
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;






