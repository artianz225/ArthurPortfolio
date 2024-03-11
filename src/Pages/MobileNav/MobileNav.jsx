import React from 'react';
import './MobileNav.css';

const MobileNav = ({ isOPen, toggleMenu }) => {
  return (
    <>
    <div className={`mobile-menu ${isOPen ? 'active' : ''}`}
    onClick={toggleMenu}>
      
      <div className="mobile-menu-container">
          <ul>
          <li><a href='#home' className="activeLink">Home</a></li>
          <li><a href='#about' className="activeLink">About</a></li>
          <li><a href="#skills" className="activeLink">Skills</a></li>
          <li><a href='#portfolio' className="activeLink">Portfolio</a></li>
          <li><a href="#services" className="activeLink">Services</a></li>
          <li><a href='#contact' className="activeLink">Contact</a></li>
          </ul>          
        </div>

    </div>
    </>
  )
}

export default MobileNav
