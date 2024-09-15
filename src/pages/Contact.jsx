// Contact.js
import React, { useEffect, useState } from 'react';
import './Contact.css';  // Import the CSS file for styling

const Contact = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulating fetching contact data
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch contacts');
        }
        return response.json();
      })
      .then((data) => {
        setContacts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading contacts...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="contact">
      <h1>Contact List</h1>
      <div className="contact-list">
        {contacts.map((contact) => (
          <div key={contact.id} className="contact-card">
            <h2>{contact.name}</h2>
            <p>Email: {contact.email}</p>
            <p>Phone: {contact.phone}</p>
            <p>Company: {contact.company.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
