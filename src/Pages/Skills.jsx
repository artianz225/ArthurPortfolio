import React, { useEffect } from 'react';
import './Skills.css';
import { FaHtml5, FaCss3Alt, FaReact, FaPhp, FaBootstrap, FaMicrosoft} from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMongodb, SiAdobephotoshop } from "react-icons/si";

import Aos from 'aos';
import 'aos/dist/aos.css';

function Skills() {
  
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
  }, []);

  return (
        <div className="skills-container" id='skills'>

        <div className="skills-wrapper">

        <div data-aos="fade-down" className="skills-page-tittle">
          <h3>SKILLS</h3>
        </div>

          <div data-aos="zoom-in-up" className="laptop-skill-work-flow-wrapper">
            <div className='skills-icons-and-header-container'> 
            <h3 data-aos="fade-down" data-aos-duration="1000" >Programming Languages and Tools</h3>
            <div className="skills-cards-container">
              <div data-aos="fade-up" className="skill-icon html"><FaHtml5 /><p className='icon-name'>HTML</p></div>
              <div data-aos="fade-up" className="skill-icon css"><FaCss3Alt /><p className='icon-name'>CSS</p></div>
              <div data-aos="fade-up" className="skill-icon javaScript"><IoLogoJavascript /><p className='icon-name'>JavaScript</p></div>
              <div data-aos="fade-up" className="skill-icon react"><div className='rotate-left-to-right'><FaReact /></div><p className='icon-name'>React</p></div>
              <div data-aos="fade-up" className="skill-icon mongoDb"><SiMongodb /><p className='icon-name'>mongoDB</p></div>
              <div data-aos="fade-up" className="skill-icon php"><FaPhp /><p className='icon-name'>PHP</p></div>
              <div data-aos="fade-up" className="skill-icon bootstrap"><FaBootstrap /><p className='icon-name'>Bootstrp</p></div>
              <div data-aos="fade-up" className="skill-icon photoShop"><SiAdobephotoshop /><p className='icon-name'>Photoshop</p></div>
              <div data-aos="fade-up" className="skill-icon microSoft"><FaMicrosoft  /><p className='icon-name'>Microsoft</p></div>
            </div>
            </div>
              <div className="work-flow-container">
              <h3 data-aos="fade-down" >Work Flow</h3>
              <div className="workflow-bullets">
                <p data-aos="fade-up" >Mobile-First, Responsive Design</p>
                <p data-aos="fade-up" >Cross Browser Testing & Debugging</p>
                <p data-aos="fade-up" >Cross Functional Teams</p>
                <p data-aos="fade-up" >Agile Development & Scrum</p>
                </div>
              </div>
            </div>
        </div>
      </div>
  )
}

export default Skills
