// Home.js
import React, { useEffect, useState } from 'react';
import './Home.css';  // Import the CSS file for styling

const Home = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch images from JSONPlaceholder API
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=9')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch images');
        }
        return response.json();
      })
      .then((data) => {
        setImages(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading images...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="home">
      <h1>Image Gallery</h1>
      <div className="image-grid">
        {images.map((image) => (
          <div key={image.id} className="image-item">
            <img src={image.thumbnailUrl} alt={image.title} className="image" />
            <p className="image-title">{image.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
