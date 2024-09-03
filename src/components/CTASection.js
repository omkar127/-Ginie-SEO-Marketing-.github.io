import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/CTASection.css';

const CTASection = ({ 
    title = "Ready to take your SEO to the next level?", 
    description = "", 
    buttonText = "Contact Us", 
    buttonLink = "/contact" 
}) => {
    return (
        <section className="cta-section">
            <div className="container">
                <h2 aria-label={title}>{title}</h2>
                {description && <p>{description}</p>}
                <Link 
                    to={buttonLink} 
                    className="cta-button" 
                    aria-label={`Contact us for ${buttonText}`}
                >
                    {buttonText}
                </Link>
            </div>
        </section>
    );
};

// PropTypes for type checking
CTASection.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    buttonText: PropTypes.string,
    buttonLink: PropTypes.string,
};

export default CTASection;
