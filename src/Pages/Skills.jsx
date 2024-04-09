import React, { useEffect } from 'react';
import './Skills.css';
import { FaHtml5, FaCss3Alt, FaReact, FaPhp, FaBootstrap, FaMicrosoft} from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMongodb, SiAdobephotoshop } from "react-icons/si";

import Aos from 'aos';
import 'aos/dist/aos.css';

function Skills() {

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
              <div data-aos="fade-up" className="skill-icon html"><FaHtml5 /><p className='icon-name'>HTML</p><div className="range-wrapper"><div className='range-container'><div className='range-html'></div></div><span>85%</span></div></div>
              <div data-aos="fade-up" className="skill-icon css"><FaCss3Alt /><p className='icon-name'>CSS</p><div className="range-wrapper"><div className='range-container'><div className='range-css'></div></div><span>90%</span></div></div>
              <div data-aos="fade-up" className="skill-icon javaScript"><IoLogoJavascript /><p className='icon-name'>JavaScript</p><div className="range-wrapper"><div className='range-container'><div className='range-javascript'></div></div><span>76%</span></div></div>
              <div data-aos="fade-up" className="skill-icon react"><div className='rotate-left-to-right'><FaReact /></div><p className='icon-name'>React</p><div className="range-wrapper"><div className='range-container'><div className='range-react'></div></div><span>80%</span></div></div>
              <div data-aos="fade-up" className="skill-icon mongoDb"><SiMongodb /><p className='icon-name'>mongoDB</p><div className="range-wrapper"><div className='range-container'><div className='range-mongodb'></div></div><span>60%</span></div></div>
              <div data-aos="fade-up" className="skill-icon php"><FaPhp /><p className='icon-name'>PHP</p><div className="range-wrapper"><div className='range-container'><div className='range-php'></div></div><span>40%</span></div></div>
              <div data-aos="fade-up" className="skill-icon bootstrap"><FaBootstrap /><p className='icon-name'>Bootstrp</p><div className="range-wrapper"><div className='range-container'><div className='range-bootstrap'></div></div><span>65%</span></div></div>
              <div data-aos="fade-up" className="skill-icon photoShop"><SiAdobephotoshop /><p className='icon-name'>Photoshop</p><div className="range-wrapper"><div className='range-container'><div className='range-photoshop'></div></div><span>75%</span></div></div>
              <div data-aos="fade-up" className="skill-icon microSoft"><FaMicrosoft  /><p className='icon-name'>Microsoft</p><div className="range-wrapper"><div className='range-container'><div className='range-microsoft'></div></div><span>85%</span></div></div>
            </div>
            </div>
              <div className="work-flow-container">
              <h3 data-aos="fade-down" >Work Flow</h3>
              <div className="workflow-bullets">
                <ul className='workflow-list'>
                  <li data-aos="fade-up">Project Setup</li>
                  <li data-aos="fade-up">Component Design</li>
                  <li data-aos="fade-up">State Management</li>
                  <li data-aos="fade-up">UI Development</li>
                  <li data-aos="fade-up">Component Interactivity</li>
                  <li data-aos="fade-up">Data Fetching</li>
                  <li data-aos="fade-up">Testing</li>
                  <li data-aos="fade-up">Optimization and Performance</li>
                  <li data-aos="fade-up">Integration and Deployment</li>
                  <li data-aos="fade-up">Monitoring and Maintenance</li>
                </ul>
                </div>
              </div>
            </div>
        </div>
      </div>
  )
}

export default Skills
