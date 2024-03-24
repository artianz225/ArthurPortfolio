import React, { useEffect, useState } from 'react';
import './Services.css';
import { FaRegHeart, FaMobileScreenButton } from "react-icons/fa6";
import { IoDiamondOutline } from "react-icons/io5";
import { BsLaptop } from "react-icons/bs";

import Aos from 'aos';
import 'aos/dist/aos.css'

function Services() {

  const [servicesDetails, setServicesDetails] = useState([
    { id: 1, icon: <IoDiamondOutline/>, tittle: 'Sturdy Themes', paragraph: 'Themes are updated regularly to keep them bug free!' },
    { id: 2, icon: <BsLaptop />, tittle: 'Up to Date', paragraph: 'Dependencies are kept current to keep things fresh.' },
    { id: 3, icon: <FaMobileScreenButton />, tittle: 'Redesigned', paragraph: 'You can use this design as is, or you can make changes!' },
    { id: 4, icon: <FaRegHeart />, tittle: 'Made with Love', paragraph: 'Is it really open source if it`s not made with love?'},
  ]);

  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])


  return (
          <div className="service-main-container">
          <div className="services-container" id='services'>
          <div data-aos="fade-down" className="services-page-tittle">
            <h3>SERVICES</h3>
          </div>
          <div className="services-contents-grid-container">
            {servicesDetails.map((details) => (
              <div className="services-cards-container">
                <div className="services-icon">
                  <div className="horizontal-rotation">{details.icon}</div>
                </div>
                <div data-aos="fade-up" className="services-tittle">
                  <h3>{details.tittle}</h3>
                </div>
                <div data-aos="fade-up" className="services-description">
                  <p>{details.paragraph}</p>
                </div>
              </div>
            ))} 
        </div>
        </div>
        </div>
  )
}

export default Services