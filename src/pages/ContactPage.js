import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import CTASection from '../components/CTASection';
import '../styles/ContactPage.css';

const ContactPage = () => {
    return (
        <div className="contact-page">
            <Header />
            <section className="contact-hero">
                <div className="container">
                    <h1>Contact Us</h1>
                    <p>Have questions? We’re here to help. Reach out to our team anytime.</p>
                </div>
            </section>
            <section className="contact-form-section">
                <div className="container">
                    <h2>Get in Touch</h2>
                    <ContactForm />
                </div>
            </section>
            <CTASection 
                title="Join the Ginie Community"
                description="Sign up today and start optimizing your website for success."
                buttonText="Sign Up Now"
                buttonLink="/signup"
            />
            <Footer />
        </div>
    );
};

export default ContactPage;


