// src/components/Navbar.js
import React from 'react';
import '../styles/main.css';

function Navbar() {
  return (
    <nav>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li className="dropdown">
          <a href="#">Destinations</a>
          <ul className="dropdown-menu">
            <li><a href="#">Europe</a></li>
            <li><a href="#">Asia</a></li>
            <li><a href="#">America</a></li>
          </ul>
        </li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <div className="user-actions">
        {/* User profile */}
        <div className="user-profile">
          <a href="#">
            <img className="profile-avatar" src="/path/to/avatar.jpg" alt="User" />
            <span className="profile-name">Nam Do</span>
          </a>
        </div>

        {/* Language switcher */}
        <div className="language-switcher">
          <button className="current-lang">
            <img id="current-lang-icon" src="" alt="" />
            <span id="current-lang-text"></span>
          </button>
          <ul className="language-dropdown">
            <li><button className="lang-btn" data-lang="en">English</button></li>
            <li><button className="lang-btn" data-lang="vn">Tiếng Việt</button></li>
            <li><button className="lang-btn" data-lang="jp">日本語</button></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
