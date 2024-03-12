import React, { useEffect } from 'react'
import './Home.css'
import { CiSaveDown2 } from "react-icons/ci";
import myPicture from '../Assets/myPicture.png';
import { FaFacebookF, FaGithub, FaLinkedinIn, FaSkype } from "react-icons/fa6";

import Aos from 'aos';
import 'aos/dist/aos.css';

function Home() {
  
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

  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return (
    <div className="home-container" id='home'>
        <div className="home-wrapper">
        <div className="hero-container">
        <img className='home-about-me-picture' src={myPicture} alt="" />
        </div>
        <div className="hero-description-container">
          <p>Hello! I'm</p>
          <h2>Arthur John Philipps Epiz</h2>
          <p>I'm a</p>
          <div className="dynamic-txts">
            <p>Frontend Developer</p>
          </div>
        </div>

        <div className="home-footer-container">
          <button className="get-resume-btn">Get Resume <CiSaveDown2 /></button>
          <div className="social-links-btn-container">
            <div className="rgb-bg">
              <button><FaFacebookF /></button>
              </div>
            <div className="rgb-bg">
              <button><FaGithub /></button>
              </div>
            <div className="rgb-bg">
              <button><FaLinkedinIn /></button>
              </div>
            <div className="rgb-bg">
              <button><FaSkype /></button>
              </div>
          </div>
        </div>
        </div>
      </div>
  )
}

export default Home
