// About.js
import React, { useEffect, useState } from 'react';
import './About.css';  // Import CSS file for styling

const About = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch user data from JSONPlaceholder API
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch user');
        }
        return response.json();
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading user data...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="about">
      <h1>About Page</h1>
      <div className="user-info">
        <img
          src={`https://i.pravatar.cc/150?img=${user.id}`} // Random user image
          alt={user.name}
          className="user-avatar"
        />
        <div className="user-details">
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Company: {user.company.name}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
