import React, { useEffect, useState } from 'react'
import './Nav.css'
import MobileNav from './MobileNav/MobileNav';
import { GiHamburgerMenu } from "react-icons/gi";
import { CiMenuBurger } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";
import myLogo from '../Assets/ArtLogoWebDeveloper.png'
import myLogo_2 from '../Assets/ArtLogoWebDeveloper_2.png'

const Nav = () => {

  const [openMenu, setOpenMenu] = useState(false);
  const [navScrollBackground, setNavScrollBackground] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollVisibility);
    return () => {
      window.removeEventListener('scroll', scrollVisibility);
    };
  }, []);

  const scrollVisibility = () => {
    if (window.pageYOffset > 100) {
      setNavScrollBackground(true);
    } else {
      setNavScrollBackground(false);
    }
  };

  return (
    <>

    <MobileNav isOPen={openMenu} toggleMenu={toggleMenu} />

      <nav className={navScrollBackground ? "nav-container-on" : "nav-container-off"}> 
        <div className="nav-contents">
         <img className='header-logo' src={myLogo_2} alt="" />
          <ul>
          <li><a href='#home' className="activeLink">Home</a></li>
          <li><a href='#about' className="activeLink">About</a></li>
          <li><a href="#skills" className="activeLink">Skills</a></li>
          <li><a href='#portfolio' className="activeLink">Portfolio</a></li>
          {/* <li><a href="#services" className="activeLink">Services</a></li> */}
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
