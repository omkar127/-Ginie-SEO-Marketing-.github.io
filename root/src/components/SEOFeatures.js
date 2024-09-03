import React from 'react';
import '../styles/SEOFeatures.css'; // Ensure this path is correct

const SEOFeatures = () => {
    return (
        <section className="seo-features">
            <div className="feature-grid">
                {features.map((feature, index) => (
                    <div key={index} className="feature">
                        <img src={feature.imgSrc} alt={feature.imgAlt} />
                        <h2>{feature.title}</h2>
                        <p>{feature.description}</p>
                    </div>
                ))}
            </div>
            <div className="cta-section">
                <a href="/signup" className="btn-primary" aria-label="Try Ginie for Free">Try Ginie for Free</a>
            </div>
        </section>
    );
};

// Define features data to keep component clean
const features = [
    {
        imgSrc: "/icons/keyword-research.svg",
        imgAlt: "Keyword Research Icon",
        title: "Keyword Research",
        description: "Find the best keywords to target based on competition and search volume."
    },
    {
        imgSrc: "/icons/backlink-analysis.svg",
        imgAlt: "Backlink Analysis Icon",
        title: "Backlink Analysis",
        description: "Analyze your competitors' backlinks and find opportunities for your site."
    },
    {
        imgSrc: "/icons/site-audit.svg",
        imgAlt: "Site Audit Icon",
        title: "Site Audit",
        description: "Run comprehensive audits to identify issues that might affect your SEO performance."
    },
    {
        imgSrc: "/icons/rank-tracking.svg",
        imgAlt: "Rank Tracking Icon",
        title: "Rank Tracking",
        description: "Monitor your keyword rankings and track your progress over time."
    },
    {
        imgSrc: "/icons/content-optimization.svg",
        imgAlt: "Content Optimization Icon",
        title: "Content Optimization",
        description: "Optimize your content for SEO with actionable insights and recommendations."
    },
    {
        imgSrc: "/icons/competitor-analysis.svg",
        imgAlt: "Competitor Analysis Icon",
        title: "Competitor Analysis",
        description: "Compare your SEO performance with your competitors and gain an edge in your niche."
    },
    {
        imgSrc: "/icons/reporting.svg",
        imgAlt: "Reporting Icon",
        title: "Reporting",
        description: "Create detailed SEO reports to monitor your progress and share with your team or clients."
    }
];

export default SEOFeatures;



