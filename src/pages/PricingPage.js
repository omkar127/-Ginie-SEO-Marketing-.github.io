import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Pricing from '../components/Pricing';
import { useNavigate } from 'react-router-dom';
import '../styles/PricingPage.css';

const PricingPage = () => {
    const navigate = useNavigate();

    const handleSelectPlan = (planId) => {
        navigate('/payment', { state: { planId } }); // Redirect to payment page with the selected planId
    };

    return (
        <div className="pricing-page">
            <Header />
            <main className="container">
                <h1>Choose Your Plan</h1>
                <Pricing onSelectPlan={handleSelectPlan} /> {/* Pass the handleSelectPlan function to Pricing component */}
            </main>
            <Footer />
        </div>
    );
};

export default PricingPage;




