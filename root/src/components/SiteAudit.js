import React, { useState } from 'react';
import '../styles/SiteAudit.css'; // Corrected the path

const SiteAudit = () => {
    const [url, setUrl] = useState('');
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleAudit = async () => {
        if (!url) {
            setError('URL cannot be empty');
            return;
        }
        
        setLoading(true);
        setError(null);
        setData(null);

        try {
            const response = await fetch('/api/site-audit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ url }),
            });

            if (!response.ok) {
                throw new Error('Failed to fetch audit data');
            }

            const result = await response.json();
            setData(result);
        } catch (err) {
            setError('An error occurred: ' + err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="site-audit">
            <input 
                type="text" 
                value={url} 
                onChange={(e) => setUrl(e.target.value)} 
                placeholder="Enter URL" 
                className="url-input"
            />
            <button onClick={handleAudit} disabled={loading} className="audit-button">
                {loading ? 'Auditing...' : 'Audit'}
            </button>
            {error && <p className="error-message">{error}</p>}
            {data && (
                <div className="audit-results">
                    <h3>Site Audit Results</h3>
                    <h4>Issues:</h4>
                    <ul>
                        {data.issues && data.issues.length > 0 ? (
                            data.issues.map((issue, index) => (
                                <li key={index}>
                                    <strong>{issue.type}</strong>: {issue.description}
                                </li>
                            ))
                        ) : (
                            <li>No issues found.</li>
                        )}
                    </ul>
                    <h4>Recommendations:</h4>
                    <ul>
                        {data.recommendations && data.recommendations.length > 0 ? (
                            data.recommendations.map((rec, index) => (
                                <li key={index}>
                                    <strong>{rec.type}</strong>: {rec.recommendation}
                                </li>
                            ))
                        ) : (
                            <li>No recommendations available.</li>
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SiteAudit;


