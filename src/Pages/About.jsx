import React, { useEffect } from 'react';
import './About.css';
import leeMinHo from '../Assets/arthur.png';
import { FaChevronRight } from "react-icons/fa6";

import Aos from 'aos';
import 'aos/dist/aos.css';

function About() {

  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])
  
  return (
    <div className="about-container" id='about'>

    <div className="about-wrapper">

      <div data-aos="fade-down" className="about-page-tittle">
        <h3>ABOUT</h3>
      </div>


      <div className="grid-container">
          <div data-aos="fade-up" className="picture">
           <img src={leeMinHo} alt="" />
          </div>
        <div data-aos="fade-left" className="position">
        <h3 className='about-h2-heading'>Frontend Developer, UI / UX Designer and Freelancer</h3>
        </div>
        <div data-aos="fade-left" className="details-one">
        <p>I am seeking a full-time or part-time position within your company where I can expand my knowledge and skills, deliver excellent customer service, and contribute to achieving your company's goals.</p>
        </div>
        <div data-aos="fade-left" className="details-two">
        <div className="my-details">
          <p className='email'><FaChevronRight /><span>Email :</span> artianz225@gmail.com</p>
          <p className='contact'><FaChevronRight /><span>Contact :</span> (+63)931 - 121 - 8228</p>
          <p className='age'><FaChevronRight /><span>Age :</span> 29</p>
          <p className='adress'><FaChevronRight /><span>Address :</span> Cainta Rizal</p>
          <p className='degree'><FaChevronRight /><span>Degree :</span> College Graduate</p>
        </div>
        </div>
        <div data-aos="fade-left" className="details-three">
          <p>I have significant experience as a frontend developer and possess some proficiency in backend / full-stack development; 
             however, my preference lies in frontend development. Embracing iterative approaches to corporate strategy encourages 
             collaborative thinking, thereby enhancing the overall value proposition.</p>
      </div>
      </div>
    </div>
  </div>
  )
}

export default About
