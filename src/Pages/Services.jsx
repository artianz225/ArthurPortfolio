import React, { useEffect } from 'react';
import './Services.css';
import { FaRegHeart, FaMobileScreenButton } from "react-icons/fa6";
import { IoDiamondOutline } from "react-icons/io5";
import { BsLaptop } from "react-icons/bs";

import Aos from 'aos';
import 'aos/dist/aos.css'

function Services() {

  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])


  return (
          <div className="services-container" id='services'>

          <div data-aos="fade-down" className="services-page-tittle">
            <h3>SERVICES</h3>
          </div>
          
          <div className="services-contents-grid-container">
            
          <div className="services-cards-container">
            <div className="serives-icon">            
            <div className="horizontal-rotation"><IoDiamondOutline/></div>
            </div>
            <div data-aos="fade-up" className="services-tittle">
              <h3>Sturdy Themes</h3>
            </div>
              <div data-aos="fade-up" className="services-description">
                <p>Themes are updated regularly to keep them bug free!</p>
              </div>
          </div>

          <div className="services-cards-container">
            <div className="serives-icon">            
            <div data-aos="fade-up"><BsLaptop /></div>
            </div>
            <div data-aos="fade-up" className="services-tittle">
              <h3>Up to Date</h3>
            </div>
              <div data-aos="fade-up" className="services-description">
                <p>Dependencies are kept current to keep things fresh.</p>
              </div>
          </div>

          <div className="services-cards-container">
            <div data-aos="fade-up" className="serives-icon">            
            <div><FaMobileScreenButton /></div>
            </div>
            <div data-aos="fade-up" className="services-tittle">
              <h3>Redesigned</h3>
            </div>
              <div data-aos="fade-up" className="services-description">
                <p>You can use this design as is, or you can make changes!</p>
              </div>
          </div>

          <div className="services-cards-container">
            <div data-aos="fade-up" className="serives-icon heart-animation">            
            <div><FaRegHeart /></div>
            </div>
            <div data-aos="fade-up" className="services-tittle">
              <h3>Made with Love</h3>
            </div>
              <div data-aos="fade-up" className="services-description">
                <p>Is it really open source if it's not made with love?</p>
              </div>
          </div>
        </div>
        </div>
  )
}

export default Services
