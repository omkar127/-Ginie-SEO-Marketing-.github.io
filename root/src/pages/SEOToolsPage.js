import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOFeatures from '../components/SEOFeatures';
import '../styles/SEOToolsPage.css';

const SEOToolsPage = () => {
    return (
        <div className="seo-tools-page">
            <Header />
            <div className="container">
                <h1>SEO Tools</h1>
                <SEOFeatures />
            </div>
            <Footer />
        </div>
    );
};

export default SEOToolsPage;
