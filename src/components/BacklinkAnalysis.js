import React, { useState } from 'react';

const BacklinkAnalysis = () => {
    const [url, setUrl] = useState('');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleAnalyze = async () => {
        if (!url) {
            setError('URL cannot be empty');
            return;
        }

        setLoading(true);
        setError('');
        try {
            const response = await fetch('/api/backlink-analysis', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ url }),
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }

            const result = await response.json();

            if (Array.isArray(result)) {
                setData(result);
            } else {
                throw new Error('Unexpected response format');
            }
        } catch (err) {
            setError(err.message || 'An unknown error occurred');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="backlink-analysis">
            <input 
                type="text" 
                value={url} 
                onChange={(e) => setUrl(e.target.value)} 
                placeholder="Enter URL" 
                aria-label="Backlink Analysis URL"
                className="url-input"
            />
            <button onClick={handleAnalyze} disabled={loading} className="analyze-button">
                {loading ? 'Analyzing...' : 'Analyze'}
            </button>
            {error && <p className="error-message">{error}</p>}
            {data.length > 0 && (
                <div className="results">
                    <h3>Backlinks</h3>
                    <ul className="backlink-list">
                        {data.map((backlink, index) => (
                            <li key={index}>
                                {backlink.source} - {backlink.type}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default BacklinkAnalysis;




