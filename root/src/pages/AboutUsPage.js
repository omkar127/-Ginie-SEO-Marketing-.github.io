import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';
import '../styles/AboutUsPage.css';

const AboutUsPage = () => {
    return (
        <div className="about-us-page">
            <Header />
            <section className="about-us-hero">
                <div className="container">
                    <h1>About Ginie</h1>
                    <p>We’re a team of SEO experts dedicated to helping businesses grow online.</p>
                </div>
            </section>
            <section className="our-mission">
                <div className="container">
                    <h2>Our Mission</h2>
                    <p>To empower businesses with the tools they need to succeed in a digital world.</p>
                </div>
            </section>
            <section className="team">
                <div className="container">
                    <h2>Meet the Team</h2>
                    <div className="team-members">
                        <div className="team-member">
                            <img src="/images/team-member1.jpg" alt="Jane Doe, CEO" />
                            <h3>Jane Doe</h3>
                            <p>CEO</p>
                        </div>
                        <div className="team-member">
                            <img src="/images/team-member2.jpg" alt="John Smith, CTO" />
                            <h3>John Smith</h3>
                            <p>CTO</p>
                        </div>
                        {/* Add more team members as needed */}
                    </div>
                </div>
            </section>
            <CTASection 
                title="Ready to Grow Your Business?"
                description="Join thousands of businesses that trust Ginie for their SEO needs."
                buttonText="Get Started"
                buttonLink="/signup"
            />
            <Footer />
        </div>
    );
};

export default AboutUsPage;


