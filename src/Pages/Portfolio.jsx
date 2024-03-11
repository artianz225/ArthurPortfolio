import React, { useEffect } from 'react'
import './Portfolio.css'
import calculatorImg from '../Assets/mycalculator.png'
import laShopeeImg from '../Assets/myecommerce.png'
import ducatiImg from '../Assets/myducati.jpg'
import inventoryImg from '../Assets/myinventory.jpg'
import weatherAppImg from '../Assets/myweatherapp.png'
import countryFlagsImg from '../Assets/myflags.png'
import { HiOutlineArrowLongRight } from "react-icons/hi2";

import Aos from 'aos';
import 'aos/dist/aos.css';

function Portfolio() {

  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])
  
  return (
    <div className="portfolio-container" id='portfolio'>
      
      <div className="portfolio-wrapper">

        <div data-aos="fade-down" className="portfolio-page-tittle">
          <h3>PORTFOLIO</h3>
        </div>

          <div data-aos="fade-up" className="portfolio-grid-container">

            <div data-aos="fade-up" className="portfolio-cards-container">
            <div className="portfolio-image">
              <img src={calculatorImg} alt="" />
            </div>
              <div className="portfolio-description">
                <h3>Calculator</h3>
              </div>
                <div className="portfolio-languages-tools">
                  <p>HTML</p>
                  <p>CSS</p>
                  <p>JavaScript</p>
                </div>
                <div className="portfolio-footer">
                  <button>View Project</button>
                  <p>More Details&nbsp;<HiOutlineArrowLongRight /></p>
                </div>
            </div>

            <div data-aos="fade-up" className="portfolio-cards-container">
            <div className="portfolio-image">
              <img src={laShopeeImg} alt="" />
            </div>
              <div className="portfolio-description">
                <h3>Lashopee</h3>
              </div>
                <div className="portfolio-languages-tools">
                  <p>HTML</p>
                  <p>CSS</p>
                  <p>JavaScript</p>
                </div>
                <div className="portfolio-footer">
                  <button>View Project</button>
                  <p>More Details&nbsp;<HiOutlineArrowLongRight /></p>
                </div>
            </div>

            <div data-aos="fade-up" className="portfolio-cards-container">
            <div className="portfolio-image">
              <img src={ducatiImg} alt="" />
            </div>
              <div className="portfolio-description">
                <h3>Ducati</h3>
              </div>
                <div className="portfolio-languages-tools">
                  <p>HTML</p>
                  <p>CSS</p>
                  <p>JavaScript</p>
                </div>
                <div className="portfolio-footer">
                  <button>View Project</button>
                  <p>More Details&nbsp;<HiOutlineArrowLongRight /></p>
                </div>
            </div>

            <div data-aos="fade-up" className="portfolio-cards-container">
            <div className="portfolio-image">
              <img src={inventoryImg} alt="" />
            </div>
              <div className="portfolio-description">
                <h3>AA Inventory System</h3>
              </div>
                <div className="portfolio-languages-tools">
                  <p>HTML</p>
                  <p>CSS</p>
                  <p>JavaScript</p>
                </div>
                <div className="portfolio-footer">
                  <button>View Project</button>
                  <p>More Details&nbsp;<HiOutlineArrowLongRight /></p>
                </div>
            </div>

            <div data-aos="fade-up" className="portfolio-cards-container">
            <div className="portfolio-image">
              <img src={weatherAppImg} alt="" />
            </div>
              <div className="portfolio-description">
                <h3>Weather App</h3>
              </div>
                <div className="portfolio-languages-tools">
                  <p>HTML</p>
                  <p>CSS</p>
                  <p>JavaScript</p>
                </div>
                <div className="portfolio-footer">
                  <button>View Project</button>
                  <p>More Details&nbsp;<HiOutlineArrowLongRight /></p>
                </div>
              </div>

              <div data-aos="fade-up" className="portfolio-cards-container">
              <div className="portfolio-image">
                <img src={countryFlagsImg} alt="" />
              </div>
                <div className="portfolio-description">
                  <h3>Country Flags</h3>
                </div>
                  <div className="portfolio-languages-tools">
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>JavaScript</p>
                  </div>
                  <div className="portfolio-footer">
                    <button>View Project</button>
                    <p>More Details&nbsp;<HiOutlineArrowLongRight /></p>
                  </div>
              </div>
          </div>

      </div>
      </div>
  )
}

export default Portfolio
