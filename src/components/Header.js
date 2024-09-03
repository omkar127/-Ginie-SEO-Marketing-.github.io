import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <Link to="/" className="logo">
                    <img src="/images/logo.png" alt="Ginie Logo" />
                </Link>
                <nav className="nav">
                    <ul className="nav-list">
                        <li><Link to="/" className="nav-link">Home</Link></li>
                        <li><Link to="/services" className="nav-link">Services</Link></li>
                        <li><Link to="/seo-tools" className="nav-link">SEO Tools</Link></li>
                        <li><Link to="/pricing" className="nav-link">Pricing</Link></li>
                        <li><Link to="/about" className="nav-link">About Us</Link></li>
                        <li><Link to="/contact" className="nav-link">Contact</Link></li>
                    </ul>
                </nav>
                <div className="cta">
                    <Link to="/signup" className="btn-primary">Sign Up</Link>
                    <button className="search-toggle" aria-label="Toggle Search">
                        <img src="/images/search-icon.png" alt="Search" />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;




