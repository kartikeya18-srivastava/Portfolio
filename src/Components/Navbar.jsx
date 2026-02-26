import React, { useState } from 'react';
import './Navbar.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleScroll = (id) => {
    setMenuOpen(false);

    const scrollToSection = () => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    };

    if (location.pathname === '/') {
      scrollToSection();
    } else {
      navigate('/');
      // Delay scrolling until after navigation
      setTimeout(() => {
        scrollToSection();
      }, 200); // Adjust this delay if needed
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/" onClick={() => handleScroll('home')}>
          <img src="/assets/logo.png" alt="Logo" />
          Portfolio
        </Link>
      </div>

      <div className={`navbar__links ${menuOpen ? 'active' : ''}`}>
        <Link to="/" onClick={() => handleScroll('home')}>Home</Link>
        <Link to="/" onClick={() => handleScroll('skills')}>Skills</Link>
        <Link to="/" onClick={() => handleScroll('projects')}>Projects</Link>
        <Link to="/" onClick={() => handleScroll('about')}>About</Link>
        <Link to="/" onClick={() => handleScroll('contact')}>Contact</Link>
      </div>

      <div className="navbar__toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <img src="/menu-icon.svg" alt="Menu Toggle" />
      </div>
    </nav>
  );
};

export default Navbar;
