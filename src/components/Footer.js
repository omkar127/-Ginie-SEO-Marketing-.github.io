import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-logo">
                        <h1>Ginie</h1>
                    </div>
                    <div className="footer-links">
                        <div className="footer-column">
                            <h3>Company</h3>
                            <ul>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/services">Services</Link></li>
                                <li><Link to="/pricing">Pricing</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h3>Resources</h3>
                            <ul>
                                <li><Link to="/blog">Blog</Link></li>
                                <li><Link to="/case-studies">Case Studies</Link></li>
                                <li><Link to="/faq">FAQ</Link></li>
                                <li><Link to="/support">Support</Link></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h3>Legal</h3>
                            <ul>
                                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                                <li><Link to="/terms-of-service">Terms of Service</Link></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h3>Follow Us</h3>
                            <ul className="social-links">
                                <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                                <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Ginie. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
