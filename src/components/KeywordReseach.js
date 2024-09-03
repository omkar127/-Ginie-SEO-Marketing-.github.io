import React, { useState } from 'react';
import './KeywordResearch.css'; // Make sure to create this CSS file for styling

const KeywordResearch = () => {
    const [keyword, setKeyword] = useState('');
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async () => {
        if (!keyword.trim()) {
            setError('Keyword cannot be empty');
            return;
        }
        setLoading(true);
        setError(null);
        setData(null);  // Clear previous data
        try {
            const response = await fetch('/api/keyword-research', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ keyword }),
            });
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const result = await response.json();
            setData(result);
        } catch (err) {
            setError(`Error: ${err.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="keyword-research">
            <input 
                type="text" 
                value={keyword} 
                onChange={(e) => setKeyword(e.target.value)} 
                placeholder="Enter keyword" 
                aria-label="Keyword Input"
                aria-describedby="keyword-error"
                disabled={loading}
                className="keyword-input"
            />
            <button 
                onClick={handleSearch} 
                disabled={loading}
                className="search-button"
            >
                {loading ? <span className="spinner"></span> : 'Search'}
            </button>
            {error && <p id="keyword-error" className="error-message">{error}</p>}
            {data && (
                <div className="results">
                    <p><strong>Volume:</strong> {data.volume}</p>
                    <p><strong>Competition:</strong> {data.competition}</p>
                    <p><strong>CPC:</strong> {data.cpc}</p>
                </div>
            )}
        </div>
    );
};

export default KeywordResearch;



