import React, { useEffect } from 'react'
import './Home.css'
import { CiSaveDown2 } from "react-icons/ci";
import myPicture from '../Assets/myPicture2.png';
import { FaFacebookF, FaGithub, FaLinkedinIn, FaSkype } from "react-icons/fa6";
import { TbFidgetSpinner } from "react-icons/tb";
import { ImSpinner4 } from "react-icons/im";

import Aos from 'aos';
import 'aos/dist/aos.css';

function Home() {

  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

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
