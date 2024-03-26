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
        <div className="hero-container">
        <img className='home-about-me-picture' src={myPicture} alt="" />
        <span><TbFidgetSpinner className='myrotation'/></span>
        <p>Will update my picture soon</p>
        </div>
        <div className="hero-description-container">
          <p>Hello! I'm</p>
          <h2>Arthur J<span className='john-rotation'><ImSpinner4 /></span>hn Philipps Epiz</h2>
          <p>I'm a</p>
          <div className="dynamic-txts">
            <p>Frontend Developer</p>
            <p>UI / UX Desinger . . . .</p>
            <p>Freelancer . . . . . . . . . .</p>
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
