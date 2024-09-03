import React, { useState, useEffect } from 'react';
import '../styles/BlogList.css';

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/blog-posts');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // Ensure the data is an array
        if (Array.isArray(data)) {
          setPosts(data);
        } else {
          throw new Error('Unexpected response format');
        }
      } catch (err) {
        setError(err.message || 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };
    
    fetchPosts();
  }, []);

  if (loading) return <p className="loading-message">Loading...</p>;
  if (error) return <p className="error-message">Error: {error}</p>;

  return (
    <section className="blog-list">
      <h2>Latest Blog Posts</h2>
      {posts.length === 0 ? (
        <p>No blog posts available.</p>
      ) : (
        posts.map(post => (
          <div key={post.id} className="blog-post">
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <a href={post.url} target="_blank" rel="noopener noreferrer">Read More</a>
          </div>
        ))
      )}
    </section>
  );
};

export default BlogList;
