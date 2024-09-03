import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogList from '../components/BlogList';
import CTASection from '../components/CTASection';
import '../styles/BlogPage.css';

const BlogPage = () => {
    return (
        <div className="blog-page">
            <Header />
            <section className="blog-hero">
                <div className="container">
                    <h1>Ginie Blog</h1>
                    <p>Insights, tips, and guides to help you master SEO.</p>
                </div>
            </section>
            <section className="blog-list-section">
                <div className="container">
                    <BlogList />
                </div>
            </section>
            <CTASection 
                title="Ready to Optimize Your SEO?"
                description="Join thousands of businesses who trust Ginie to boost their online presence."
                buttonText="Get Started Today"
                buttonLink="/signup"
            />
            <Footer />
        </div>
    );
};

export default BlogPage;


