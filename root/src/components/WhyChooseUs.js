import React from 'react';
import '../styles/WhyChooseUs.css';

const WhyChooseUs = () => {
  const features = [
    {
      title: "Expert Team",
      description: "Our team consists of SEO experts with years of experience.",
      icon: "path-to-icon1.png" // Optional icon
    },
    {
      title: "Data-Driven Insights",
      description: "We use data to drive our SEO strategies and deliver results.",
      icon: "path-to-icon2.png"
    },
    {
      title: "24/7 Support",
      description: "Our support team is available around the clock to assist you.",
      icon: "path-to-icon3.png"
    },
    // Add more features as needed
  ];

  return (
    <section className="why-choose-us">
      <div className="text">
        <h2>Why Choose Us</h2>
        <p>Highlight unique selling points here.</p>
      </div>
      <div className="features">
        {features.length > 0 ? (
          features.map((feature, index) => (
            <div className="feature" key={index}>
              {feature.icon && (
                <img
                  src={feature.icon}
                  alt={`Icon for ${feature.title}`}
                  className="feature-icon"
                />
              )}
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))
        ) : (
          <p>No features available at the moment.</p>
        )}
      </div>
    </section>
  );
};

export default WhyChooseUs;
