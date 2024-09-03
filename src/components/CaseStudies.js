import React, { useState, useEffect } from 'react';
import '../styles/CaseStudies.css';

const CaseStudies = () => {
  const [caseStudies, setCaseStudies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCaseStudies = async () => {
      try {
        const response = await fetch('/api/case-studies');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // Ensure the data is an array
        if (Array.isArray(data)) {
          setCaseStudies(data);
        } else {
          throw new Error('Unexpected response format');
        }
      } catch (err) {
        setError(err.message || 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };
    
    fetchCaseStudies();
  }, []);

  if (loading) return <p className="loading-message">Loading...</p>;
  if (error) return <p className="error-message">Error: {error}</p>;

  return (
    <section className="case-studies">
      <h2>Our Case Studies</h2>
      {caseStudies.length === 0 ? (
        <p>No case studies available.</p>
      ) : (
        caseStudies.map(cs => (
          <div key={cs.id} className="case-study">
            <h3>{cs.title}</h3>
            <p>{cs.description}</p>
            <a href={cs.url} target="_blank" rel="noopener noreferrer">Read More</a>
          </div>
        ))
      )}
    </section>
  );
};

export default CaseStudies;
