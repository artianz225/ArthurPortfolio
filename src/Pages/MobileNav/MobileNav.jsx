import React from 'react';
import './MobileNav.css';
import { FcHome, FcManager, FcMindMap, FcGallery, FcPhone } from "react-icons/fc";

const MobileNav = ({ isOPen, toggleMenu }) => {

  return (
    <>
    <nav className={`mobile-menu ${isOPen ? 'active' : ''}`}
    onClick={toggleMenu}>
      
      <div className="mobile-menu-container">
          <ul>
          <li><FcHome /> <a href='#home' className="activeLink">Home</a></li>
          <li><FcManager /> <a href='#about' className="activeLink">About</a></li>
          <li><FcMindMap /> <a href="#skills" className="activeLink">Skills</a></li>
          <li><FcGallery  /> <a href='#portfolio' className="activeLink">Portfolio</a></li>
          {/* <li><a href="#services" className="activeLink">Services</a></li> */}
          <li><FcPhone /> <a href='#contact' className="activeLink">Contact</a></li>
          </ul>          
        </div>

    </nav>
    </>
  )
}

export default MobileNav
