import React, { useState } from 'react';
import './header.css';

const Header = () => {
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('Eng');

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  const handleLanguageChange = (lang, text) => {
    setCurrentLanguage(text);
    setIsLanguageDropdownOpen(false);
    console.log(`Language changed to: ${lang}`);
  };

  const handleNavClick = (buttonText) => {
    // You can implement navigation logic here
    console.log(`Navigation clicked: ${buttonText}`);
    
    // Example navigation logic (you can replace with your routing)
    const routes = {
      'Home': '/home',
      'Shop': '/shop', 
      'Donate': '/fundraising',
      'Community Forum': '/forum',
      'Tutorials': '/tutorials',
      'Events': '/events',
      'About Us': '/about',
      'Contact': '/contact',
      'FAQ': '/faq'
    };
    
    if (routes[buttonText]) {
      // Replace with your navigation method (e.g., React Router)
      window.location.href = routes[buttonText];
    }
  };

  return (
    <header className="header">
      {/* Top row with logo, search, and user controls */}
      <div className="header-top">
        <div className="left-section">
          <img src="" alt="HIVE G&H Logo" className="logo" />
          
          <div className="language-selector" onClick={toggleLanguageDropdown}>
            <div className="globe-icon"></div>
            <span className="language-text">{currentLanguage}</span>
            <div className="dropdown-arrow"></div>
            
            {isLanguageDropdownOpen && (
              <div className="language-dropdown show">
                <div 
                  className="language-option" 
                  onClick={() => handleLanguageChange('en', 'Eng')}
                >
                  <span className="lang-flag">🇺🇸</span>
                  <span>English</span>
                </div>
                <div 
                  className="language-option" 
                  onClick={() => handleLanguageChange('si', 'සිං')}
                >
                  <span className="lang-flag">🇱🇰</span>
                  <span>සිංහල</span>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="center-section">
          <div className="search-container">
            <div className="mic-icon"></div>
            <span className="divider"></span> 
            <div className="image-recognition"></div> 
            <input type="text" className="search-input" placeholder="Search..." />              
            <div className="search-icon"></div>
          </div>
        </div>

        <div className="right-section">
          <button className="icon-button cart-button">
            <div className="cart-icon"></div>
          </button>
          
          <div className="user-section">
            <div className="user-icon"></div>
            <span className="signin-text">Sign In</span>
          </div>
        </div>
      </div>

      {/* Navigation buttons row */}
      <div className="navigation-section">
        <div className="nav-buttons">
          {['Home', 'Shop', 'Donate', 'Community Forum', 'Tutorials', 'Events', 'About Us', 'Contact', 'FAQ'].map((item) => (
            <button 
              key={item}
              className="nav-button"
              onClick={() => handleNavClick(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;