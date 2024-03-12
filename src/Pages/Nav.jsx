import React, { useEffect, useState } from 'react'
import './Nav.css'
import MobileNav from './MobileNav/MobileNav';
import { GiHamburgerMenu } from "react-icons/gi";
import { CiMenuBurger } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";
import myLogo from '../Assets/ArtLogoWebDeveloper.png'

const Nav = () => {
  
  useEffect(() => {
    // Check if the Screen Orientation API is supported
    if (window.screen.orientation && window.screen.orientation.lock) {
      // Lock the screen orientation to portrait mode
      window.screen.orientation.lock('portrait').catch(error => {
        console.error('Failed to lock screen orientation:', error);
      });
    }
    
    // Cleanup function to unlock orientation when the component unmounts
    return () => {
      if (window.screen.orientation && window.screen.orientation.unlock) {
        window.screen.orientation.unlock();
      }
    };
  }, []); // Empty dependency array to run only once when the component mounts

  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  }
  return (
    <>

    <MobileNav isOPen={openMenu} toggleMenu={toggleMenu} />

      <nav className="nav-container">
        <div className="nav-contents">
         <img className='header-logo' src={myLogo} alt="" />
          <ul>
          <li><a href='#home' className="activeLink">Home</a></li>
          <li><a href='#about' className="activeLink">About</a></li>
          <li><a href="#skills" className="activeLink">Skills</a></li>
          <li><a href='#portfolio' className="activeLink">Portfolio</a></li>
          <li><a href="#services" className="activeLink">Services</a></li>
          <li><a href='#contact' className="activeLink">Contact</a></li>
          </ul>
 
          <button className='menu-btn' onClick={toggleMenu}>
            {openMenu ? <TfiClose /> : <CiMenuBurger />}
          </button>
          
        </div>
      </nav>
      </>
  )
}

export default Nav
