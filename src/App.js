import React, { useEffect } from 'react'; // Removed useState import
import { Routes, Route } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import BlogPage from './pages/BlogPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import PricingPage from './pages/PricingPage';
import SEOToolsPage from './pages/SEOToolsPage';
import PaymentPage from './pages/PaymentPage'; // Import the PaymentPage component
import './App.css';

// Load your Stripe public key
const stripePromise = loadStripe('your-publishable-key-here'); // Replace with your actual Stripe publishable key

function App() {
    useEffect(() => {
        fetch('/backend/routes/seoRoutes') // Ensure this endpoint is correct for your backend
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Fetched data:', data); // Optional: Keep for debugging or remove if unnecessary
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="App">
            <Elements stripe={stripePromise}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutUsPage />} />
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/case-studies" element={<CaseStudiesPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/pricing" element={<PricingPage />} />
                    <Route path="/seo-tools" element={<SEOToolsPage />} /> {/* Updated path */}
                    <Route path="/payment" element={<PaymentPage />} /> {/* Added payment page route */}
                </Routes>
            </Elements>
        </div>
    );
}

export default App;




