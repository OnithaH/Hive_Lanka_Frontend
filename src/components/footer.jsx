import React, { useState } from 'react';
import './footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleNewsletterSubmit = () => {
    console.log('Subscribe button clicked!', email);
    
    if (email.trim()) {
      if (validateEmail(email)) {
        // Add subscription logic here
        console.log(`Newsletter subscription: ${email}`);
        
        // Show success message
        setIsSubscribed(true);
        setEmail('');
        
        // Reset button after 3 seconds
        setTimeout(() => {
          setIsSubscribed(false);
        }, 3000);
      } else {
        // Show error for invalid email - you can add state for this
        console.log('Invalid email');
      }
    } else {
      // Show error for empty email - you can add state for this
      console.log('Empty email');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleNewsletterSubmit();
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <div className="footer-brand-section">
              <h3 className="footer-brand">
                Hive Lanka <span className="footer-tagline">by Vision Stack</span>
              </h3>
            </div>
            
            <div className="footer-social">
              <h4>Follow Us On :</h4>
              <div className="social-content">
                <div className="footer-logo">
                  <div className="footer-logo-img"></div>
                </div>
                <div className="social-links">
                  <a href="#" className="social-link">
                    <div className="social-icon linkedin-icon"></div>
                    lk.hive_lanka.com
                  </a>
                  <a href="#" className="social-link">
                    <div className="social-icon instagram-icon"></div>
                    @hive_lanka
                  </a>
                  <a href="#" className="social-link">
                    <div className="social-icon twitter-icon"></div>
                    #hive_lanka
                  </a>
                  <a href="#" className="social-link">
                    <div className="social-icon facebook-icon"></div>
                    hive_lanka
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <p>• No: 313/17/3 Gonamaditthta road, Piliyandala, Sri Lanka.</p>
              <p>• Phone: +94 112 595 5982</p>
              <p>• hive_lanka@gmail.com</p>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Stay up to date</h4>
            <p className="newsletter-desc">
              Subscribe to our newsletter to stay up-to-date with the latest news, tips, and trends in the industry
            </p>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="newsletter-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <button 
                className="newsletter-button"
                onClick={handleNewsletterSubmit}
                style={{
                  background: isSubscribed ? '#4CAF50' : '#2E2E2E'
                }}
              >
                {isSubscribed ? 'Subscribed!' : 'Subscribe'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;