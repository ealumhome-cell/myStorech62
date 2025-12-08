
import React from 'react';
import './Contact.css'; // Import specific CSS for this page

const Contact = () => {
  return (
    <div className="page-container">
      <h1>Contact Us</h1>
      <p>Feel free to reach out to us using the details below or the form.</p>
      <div className="contact-info">
        <p>Email: contact@example.com</p>
        <p>Phone: (555) 555-5555</p>
      </div>
      {/* A basic contact form can be added here with styling */}
    </div>
  );
};

export default Contact;