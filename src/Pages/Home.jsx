import React, { useEffect, useRef, useState } from 'react'
import './Home.css'
import { CiSaveDown2 } from "react-icons/ci";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaFacebookMessenger  } from "react-icons/fa6";
import { ImSpinner4 } from "react-icons/im";

import Aos from 'aos';
import 'aos/dist/aos.css';

function Home() {

  return (
    <div className="home-container" id='home'>
        <div className="home-wrapper">
        <div className="hero-description-container">
          <p>Hello! I'm</p>
          <div className='name-wrapper-container'>
            <h2>Arthur J<span className='john-rotation'><ImSpinner4 /></span>hn Philipps Epiz</h2>
          </div>
          <p>I'm a</p>
          <div className="dynamic-txt-static-wrapper">
            <div className="dynamic-txts-wrapper">
              <p className='dynamic-p-one'>Frontend Developer</p>
              <p className='dynamic-p-two'>UI / UX Desinger</p>
              <p className='dynamic-p-three'>IT Professional</p>
            </div>
          </div>
        </div>

        <div className="home-footer-container">
        {/* https://drive.google.com/file/d/1X-EHHk-Iaj-BUoBm6TpaZ8Cy22U1vOt8/view?usp=sharing */}
          <a href="https://drive.google.com/file/d/1X-EHHk-Iaj-BUoBm6TpaZ8Cy22U1vOt8/view?usp=sharing"><button className="get-resume-btn">Get Resume <CiSaveDown2 /></button></a>
          <div className="social-links-btn-container">
            <div className="rgb-bg">
              <a href="https://www.facebook.com/arthur.epiz/"><button className='home-footer-container-icons-wrapper'><FaFacebookF /></button></a>
              </div>
            <div className="rgb-bg">
              <a href="https://github.com/artianz225"><button className='home-footer-container-icons-wrapper'><FaGithub /></button></a>
              </div>
            <div className="rgb-bg">
              <button className='home-footer-container-icons-wrapper'><FaLinkedinIn /></button>
              </div>
            <div className="rgb-bg">
              <a href="https://www.messenger.com/t/9984040275000684/"><button className='home-footer-container-icons-wrapper'><FaFacebookMessenger /></button></a>
              </div>
          </div>
        </div>
        </div>
      </div>
  )
}

export default Home
