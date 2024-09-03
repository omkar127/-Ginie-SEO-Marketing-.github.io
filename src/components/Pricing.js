import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Pricing.css'; // Ensure this path is correct

const Pricing = () => {
    const navigate = useNavigate();

    const handleSelectPlan = (planId) => {
        navigate('/payment', { state: { planId } }); // Redirect to payment page with the selected planId
    };

    return (
        <section className="pricing">
            <div className="pricing-table">
                <div className="pricing-plan">
                    <h2>Basic</h2>
                    <p className="price">$47.99/month</p>
                    <ul>
                        <li>Basic SEO Tools</li>
                        <li>5 Projects</li>
                        <li>Email Support</li>
                    </ul>
                    <button 
                        className="btn-primary" 
                        aria-label="Choose Basic Plan" 
                        onClick={() => handleSelectPlan('basic-plan')}
                    >
                        Choose Plan
                    </button>
                </div>
                <div className="pricing-plan popular">
                    <h2>Standard</h2>
                    <p className="price">$155.30/month</p>
                    <p className="popular-badge">Most Popular</p>
                    <ul>
                        <li>All Basic Features</li>
                        <li>15 Projects</li>
                        <li>Priority Support</li>
                    </ul>
                    <button 
                        className="btn-primary" 
                        aria-label="Choose Standard Plan" 
                        onClick={() => handleSelectPlan('standard-plan')}
                    >
                        Choose Plan
                    </button>
                </div>
                <div className="pricing-plan">
                    <h2>Premium</h2>
                    <p className="price">$355.50/month</p>
                    <ul>
                        <li>All SEO Tools</li>
                        <li>Unlimited Projects</li>
                        <li>24/7 Support</li>
                    </ul>
                    <button 
                        className="btn-primary" 
                        aria-label="Choose Premium Plan" 
                        onClick={() => handleSelectPlan('premium-plan')}
                    >
                        Choose Plan
                    </button>
                </div>
            </div>
            <div className="testimonials">
                <h3>What Our Customers Are Saying</h3>
                <p>"Ginie has transformed our SEO strategy. Highly recommend the Premium plan!" - Alex</p>
                <p>"Great tools and even better support. The Standard plan offers everything we need." - Jamie</p>
            </div>
        </section>
    );
};

export default Pricing;

