import React from 'react';
import '../styles/main.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <video className="hero-video" autoPlay muted loop>
        <source src="/images/Timeline 1.mp4" type="video/mp4" />
      </video>
      <div className="hero-content">
        <h1>Welcome to Shimade Travel</h1>
        <p>Discover amazing destinations around the world with us.</p>

        <form className="hero-search-form">
          <input type="text" placeholder="Search destinations..." />
          <button type="submit">Search</button>
        </form>
      </div>
    </section>
  );
}

export default Hero;