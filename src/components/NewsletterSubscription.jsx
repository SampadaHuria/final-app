import React, { useState } from 'react';
import './NewsletterSubscription.css'; // You can create this CSS file for custom styles

const NewsletterSubscription = () => {
  const [email, setEmail] = useState('');

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubscribe = () => {
    // Add your subscribe logic here (e.g., send the email to a server)
    console.log(`Subscribed with email: ${email}`);
    // Clear the input field after subscription
    setEmail('');
  };

  return (

    <div className="newsletter-subscription">
      <h2>Subscribe to our Newsletter</h2>
      <p>Get e-mail updates about our latest shops and special offers</p>
      <br></br>
      <div className="input-container">
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={handleInputChange}
        />
        <button onClick={handleSubscribe}>Subscribe</button>
      </div>
    </div>
  );
};

export default NewsletterSubscription;
