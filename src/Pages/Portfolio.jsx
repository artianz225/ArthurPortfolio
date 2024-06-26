import React, { useEffect, useState } from 'react'
import './Portfolio.css'
import rpsgameImg from '../Assets/myrpsgame.png'
import laShopeeImg from '../Assets/myecommerce2.png'
import ducatiImg from '../Assets/myducati.jpg'
import inventoryImg from '../Assets/myinventory.jpg'
import weatherAppImg from '../Assets/myweatherapp.png'
import artShopApp from '../Assets/artshopapp.jpg'
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { IoMdCloseCircle } from "react-icons/io";
import Aos from 'aos';
import 'aos/dist/aos.css';

function Portfolio() {

  const [portfolioContents, setPortfolioContent] = useState([
    {
      id: 1,
      tittle: "Inventory System",
      languages: ["React", "CSS", "JavaScript"],
      image: inventoryImg,
      projectLink: `https://inventory-system-data.onrender.com`,
      details: "More Details",
      aboutProject: "The AA inventory system is built using React JS, vanilla CSS, and ES6 syntax functions. This is a comprehensive inventory management application where users can register, upload photos, and login to the system. Additionally, users can add, edit, delete, and view individual data entries. The website utilizes two databases: the first is a MongoDB database responsible for storing textual information, and the second is a Firebase database responsible for uploading images.",
      isFlipped: false
    },
    {
      id: 2,
      tittle: "ArtShopApp",
      languages: ["React", "CSS", "JavaScript"],
      image: artShopApp,
      projectLink: `https://artianz225.github.io/ArtShopApp/`,
      details: "More Details",
      aboutProject: "On Going Project - I update this project every week till it finish",
      isFlipped: false
    },
    {
      id: 3,
      tittle: "Ducati",
      languages: ["HTML", "CSS"],
      image: ducatiImg,
      projectLink: `https://artianz225.github.io/WD82P/11-Responsive_Design/index.html`,
      details: "More Details",
      aboutProject: "For this project I replicate the Ducati Philippine website using only html and CSS, this is a responsive website that you can view weither your using phone, ipad or tablet and desktop honestlu this is not prettier that much but I can re-design this using react JS.",
      isFlipped: false
    },
    {
      id: 4,
      tittle: "Rock Paper Scissor",
      languages: ["React", "CSS", "JavaScript"],
      image: rpsgameImg,
      projectLink: `https://artianz225.github.io/RockPaperScissorReack.JS/`,
      details: "More Details",
      aboutProject: "Personally I created the game using React, CSS, and JavaScript, which allows players to play the classic rock, paper, and scissors game against the computer. Currently, the game does not have a score limit, so players can continue playing as long as they want. However, but I will update the game soon to allow players to set how many rounds they want to play. Additionally, I want to add more effects to the game, such as emoticons that will pop up when players win or lose rounds, enhancing the overall gaming experience and making it more engaging for users. These updates will likely improve the game's functionality and make it more enjoyable for players by adding customizable options and visual feedback.",
      isFlipped: false
    },
    {
      id: 5,
      tittle: "Lashopee",
      languages: ["Vite", "CSS", "JavaScript"],
      image: laShopeeImg,
      projectLink: `https://artianz225.github.io/MP2-E-Commerce/`,
      details: "More Details",
      aboutProject: "The Ecommerce Lashopee website is constructed solely using Vite, CSS, and JavaScript. I utilized a dummy JSON API for displaying various product details such as images, brands, models, ratings, descriptions, and more. Additionally, users can search for specific products by typing the brand name into the search box. Furthermore, users have the ability to add or remove products from the cart. Once an item is in the cart, users can also adjust the quantity within the cart section.",
      isFlipped: false
    },
    {
      id: 6,
      tittle: "Weather App",
      languages: ["HTML", "CSS", "JavaScript"],
      image: weatherAppImg,
      projectLink: `https://artianz225.github.io/reactCalculator/`,
      details: "More Details",
      aboutProject: "I will update this soon",
      isFlipped: false
    },
  ]);

  const toggleFlipped = (id) => {
    setPortfolioContent(portfolioContents.map(contents =>
      id === contents.id ? { ...contents, isFlipped: !contents.isFlipped } : { ...contents, isFlipped: false }
    ));
  };

  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])
  
  return (
    <div className="portfolio-container" id='portfolio'>
      <div className="viewer-overlay">
        <div className="viewer-contents">
        </div>
      </div>
      <div className="portfolio-wrapper">
        <div data-aos="fade-down" className="portfolio-page-tittle">
          <h3>PORTFOLIO</h3>
        </div>

          <div data-aos="fade-up" className="portfolio-grid-container">
            {portfolioContents.map(( contents ) => (
              <div key={contents.id} >
                {contents.isFlipped ? 
                
                <div className="portfolio-cards-container-back">
                  <IoMdCloseCircle className='closeBtn' onClick={() => toggleFlipped(contents.id)}/>
                  <div className='flip-text'>
                  <h3>{contents.tittle}</h3>
                  <p>{contents.aboutProject}</p>
                  </div>
                </div>
                
                : 

                <div className="portfolio-cards-container-front">
                <div className="portfolio-image">
                  <img src={contents.image} alt="" onClick={() => toggleFlipped(contents.id)}/>
                </div>
                <div className="portfolio-description">
                  <h3>{contents.tittle}</h3>
                </div>
                <div className="portfolio-languages-tools">
                  {contents.languages.map((language, i) => (
                    <p key={i}>{language}</p>
                  ))}
                </div>
                <div className="portfolio-footer">
                  <a href={contents.projectLink}>View Project</a>
                  <p onClick={() => toggleFlipped(contents.id)}>{contents.details}&nbsp;<HiOutlineArrowLongRight /></p>
                </div>
              </div>}
              </div>
            ))}
          </div>

        </div>
      </div>
  )
}

export default Portfolio
