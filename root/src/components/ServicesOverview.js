import React from 'react';
import '../styles/ServicesOverview.css';

const ServicesOverview = () => {
  return (
    <section className="services-overview">
      <div className="service">
        <img src="/icons/seo-optimization.svg" alt="SEO Optimization" className="service-icon" />
        <h2>SEO Optimization</h2>
        <p>Enhance your website's visibility on search engines with our comprehensive SEO services.</p>
      </div>
      <div className="service">
        <img src="/icons/content-marketing.svg" alt="Content Marketing" className="service-icon" />
        <h2>Content Marketing</h2>
        <p>Attract and engage your audience with targeted content that drives results.</p>
      </div>
      <div className="service">
        <img src="/icons/social-media-management.svg" alt="Social Media Management" className="service-icon" />
        <h2>Social Media Management</h2>
        <p>Boost your brand presence on social media with our expert management services.</p>
      </div>
      <a href="/services" className="explore-services" aria-label="Explore our services">Explore Services</a>
    </section>
  );
};

export default ServicesOverview;


