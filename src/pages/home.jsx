import React, { useState, useEffect, useRef } from 'react';
import './home.css';

const Home = () => {
  // Banner slider state
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentEventSlide, setCurrentEventSlide] = useState(0);
  const slideIntervalRef = useRef(null);
  const eventSlideIntervalRef = useRef(null);

  const bannerImages = [
    "../../../asset/images/banner/ad1.jpg",
    "../../../asset/images/banner/ad2.png",
    "../../../asset/images/banner/ad3.png"
  ];

  const eventImages = [
    "../../../asset/images/event/event1.jpg",
    "../../../asset/images/event/event2.jpg",
    "../../../asset/images/event/event3.jpg"
  ];

  const products = [
    {
      image: "../../../asset/images/products/jewelry1.jpg",
      title: "Jewelry Product 01",
      price: "LKR 2500.00",
      shop: "Shop Name"
    },
    {
      image: "../../../asset/images/products/ceramic1.jpg",
      title: "Ceramic Product 01",
      price: "LKR 3200.00",
      shop: "Shop Name"
    },
    {
      image: "../../../asset/images/products/living1.jpg",
      title: "Living Room Product 01",
      price: "LKR 15000.00",
      shop: "Shop Name"
    },
    {
      image: "../../../asset/images/products/kitchen1.jpg",
      title: "Kitchen Product 01",
      price: "LKR 8500.00",
      shop: "Shop Name"
    },
    {
      image: "../../../asset/images/products/jewelry2.jpg",
      title: "Jewelry Product 02",
      price: "LKR 2250.00",
      shop: "Shop Name"
    },
    {
      image: "../../../asset/images/products/ceramic2.jpg",
      title: "Ceramic Product 02",
      price: "LKR 1250.00",
      shop: "Shop Name"
    },
    {
      image: "../../../asset/images/products/living2.jpg",
      title: "Living Room Product 02",
      price: "LKR 8000.00",
      shop: "Shop Name"
    },
    {
      image: "../../../asset/images/products/kitchen2.jpg",
      title: "Kitchen Product 02",
      price: "LKR 9500.00",
      shop: "Shop Name"
    }
  ];

  const categories = [
    {
      image: "../../../asset/images/categories/jewelry.jpg",
      name: "Jewelry"
    },
    {
      image: "../../../asset/images/categories/ceramic.jpg",
      name: "Ceramic"
    },
    {
      image: "../../../asset/images/categories/living.jpg",
      name: "Living Room"
    },
    {
      image: "../../../asset/images/categories/kitchen.jpg",
      name: "Kitchen"
    }
  ];

  const testimonials = [
    {
      rating: 9.1,
      text: "The website is good experience for beginners",
      author: "Limuthu Jundathissa",
      role: "Customer",
      avatar: "../../../asset/images/testimonials/person1.jpg"
    },
    {
      rating: 10,
      text: "The website is good experience for beginners. I liked how we can buy products easily",
      author: "Random man",
      role: "Seller / Business Owner",
      avatar: "../../../asset/images/testimonials/person2.png"
    },
    {
      rating: 9.7,
      text: "The website is good experience for beginners. It helped me raise funds Easily",
      author: "Binduli Rathnayaka",
      role: "Organization Owner",
      avatar: "../../../asset/images/testimonials/person3.jpg"
    }
  ];

  // Banner slider functions
  const startAutoSlide = () => {
    slideIntervalRef.current = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % bannerImages.length);
    }, 10000);
  };

  const stopAutoSlide = () => {
    if (slideIntervalRef.current) {
      clearInterval(slideIntervalRef.current);
    }
  };

  const changeSlide = (direction) => {
    stopAutoSlide();
    if (direction === 1) {
      setCurrentSlide(prev => (prev + 1) % bannerImages.length);
    } else {
      setCurrentSlide(prev => (prev - 1 + bannerImages.length) % bannerImages.length);
    }
    setTimeout(startAutoSlide, 3000);
  };

  // Event slider functions
  const startEventAutoSlide = () => {
    eventSlideIntervalRef.current = setInterval(() => {
      setCurrentEventSlide(prev => (prev + 1) % eventImages.length);
    }, 10000);
  };

  const stopEventAutoSlide = () => {
    if (eventSlideIntervalRef.current) {
      clearInterval(eventSlideIntervalRef.current);
    }
  };

  const changeEventSlide = (direction) => {
    stopEventAutoSlide();
    if (direction === 1) {
      setCurrentEventSlide(prev => (prev + 1) % eventImages.length);
    } else {
      setCurrentEventSlide(prev => (prev - 1 + eventImages.length) % eventImages.length);
    }
    setTimeout(startEventAutoSlide, 3000);
  };

  // Handle product click
  const handleProductClick = (product) => {
    console.log(`Product clicked: ${product.title} - ${product.price}`);
    // Add navigation logic here
  };

  // Handle category click
  const handleCategoryClick = (category, index) => {
    console.log(`Category ${index + 1} clicked: ${category.name}`);
    // Add category filter logic here
  };

  // Initialize sliders
  useEffect(() => {
    startAutoSlide();
    startEventAutoSlide();

    return () => {
      stopAutoSlide();
      stopEventAutoSlide();
    };
  }, []);

  return (
    <main className="main-content">
      {/* Action Bar */}
      <section className="action-bar">
        {/* Action buttons can be uncommented if needed */}
      </section>

      {/* Advertisement Banner Section */}
      <section className="banner-section">
        <div className="banner-container"
             onMouseEnter={stopAutoSlide}
             onMouseLeave={startAutoSlide}>
          <div className="banner-slider">
            {bannerImages.map((image, index) => (
              <div
                key={index}
                className={`banner-slide ${index === currentSlide ? 'active' : ''}`}
              >
                <img src={image} alt={`Advertisement ${index + 1}`} className="banner-image" />
              </div>
            ))}
          </div>
          
          {/* Banner Navigation Dots */}
          <div className="banner-dots">
            {bannerImages.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => {
                  stopAutoSlide();
                  setCurrentSlide(index);
                  setTimeout(startAutoSlide, 3000);
                }}
              />
            ))}
          </div>
          
          {/* Banner Navigation Arrows */}
          <button className="banner-nav prev" onClick={() => changeSlide(-1)}>
            &#10094;
          </button>
          <button className="banner-nav next" onClick={() => changeSlide(1)}>
            &#10095;
          </button>
        </div>
      </section>

      {/* Products Showcase Section */}
      <section className="products-showcase">
        <div className="container">
          {/* Category Icons Row */}
          <div className="category-icons-row">
            <button className="category-nav prev-categories">❮</button>
            <div className="category-icons-container">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="category-icon-item"
                  onClick={() => handleCategoryClick(category, index)}
                >
                  <div className="category-circle">
                    <img src={category.image} alt={category.name} className="category-image" />
                  </div>
                </div>
              ))}
            </div>
            <button className="category-nav next-categories">❯</button>
          </div>

          {/* Products Grid */}
          <div className="products-showcase-grid">
            {products.map((product, index) => (
              <div
                key={index}
                className="product-showcase-card"
                onClick={() => handleProductClick(product)}
              >
                <div className="product-showcase-image">
                  <img src={product.image} alt={product.title} className="product-image" />
                </div>
                <div className="product-showcase-info">
                  <h3 className="product-showcase-title">{product.title}</h3>
                  <p className="product-showcase-price">{product.price}</p>
                  <div className="product-showcase-seller">
                    <span className="shop-name">{product.shop}</span>
                    <span className="verified-badge">✓ Verified Seller</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Banner Section */}
      <section className="event-banner-section">
        <div className="container">
          <div className="event-banner-container">
            <div className="event-banner-slider">
              {eventImages.map((image, index) => (
                <div
                  key={index}
                  className={`event-banner-slide ${index === currentEventSlide ? 'active' : ''}`}
                >
                  <img src={image} alt={`Event ${index + 1}`} className="event-banner-image" />
                </div>
              ))}
            </div>
            
            {/* Event Navigation Dots */}
            <div className="event-banner-dots">
              {eventImages.map((_, index) => (
                <span
                  key={index}
                  className={`event-dot ${index === currentEventSlide ? 'active' : ''}`}
                  onClick={() => {
                    stopEventAutoSlide();
                    setCurrentEventSlide(index);
                    setTimeout(startEventAutoSlide, 3000);
                  }}
                />
              ))}
            </div>
            
            {/* Event Navigation Arrows */}
            <button className="event-banner-nav prev" onClick={() => changeEventSlide(-1)}>
              &#10094;
            </button>
            <button className="event-banner-nav next" onClick={() => changeEventSlide(1)}>
              &#10095;
            </button>
          </div>
        </div>
      </section>

      {/* About Hive Lanka Section */}
      <section className="about-hive-section">
        <div className="container">
          <h2 className="about-hive-title">What is Hive Lanka?</h2>
          <div className="about-hive-content">
            <div className="about-card mission-card">
              <div className="card-icon">🌱</div>
              <div className="card-content">
                <h3>Our Mission</h3>
                <p>Our mission is to create opportunities for entrepreneurs across the country, especially those from underrepresented groups like orphanages and elderly homes to showcase and sell their products to a wider audience. More than just a marketplace, we offer buyers the chance to give back by donating directly to these homes and small businesses in need.</p>
              </div>
              <div className="card-decoration"></div>
            </div>
            
            <div className="about-card vision-card">
              <div className="card-icon">🤝</div>
              <div className="card-content">
                <h3>Our Vision</h3>
                <p>At Hive Lanka we believe in empowering communities by uniting small businesses, local vendors, and charitable organizations on one inclusive platform. Together, we're building a supportive ecosystem where commerce meets compassion, and every purchase has the power to make a difference.</p>
              </div>
              <div className="card-decoration"></div>
            </div>
          </div>
          
          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Local Vendors</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">1000+</div>
              <div className="stat-label">Products</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Communities Helped</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">₹2M+</div>
              <div className="stat-label">Donations Raised</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="testimonials-title">What Does Our Guests Say ?</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-header">
                  <div className="stars-rating">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="star">⭐</span>
                    ))}
                  </div>
                  <div className="rating-score">{testimonial.rating}</div>
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    <img src={testimonial.avatar} alt={testimonial.author} className="avatar-image" />
                  </div>
                  <div className="author-info">
                    <div className="author-name">{testimonial.author}</div>
                    <div className="author-role">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;