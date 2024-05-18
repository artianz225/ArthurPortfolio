import React, { useEffect, useRef, useState } from 'react'
import './Home.css'
import { CiSaveDown2 } from "react-icons/ci";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaSkype } from "react-icons/fa6";
import { ImSpinner4 } from "react-icons/im";

import Aos from 'aos';
import 'aos/dist/aos.css';

function Home() {
  const bannerRef = useRef(null);
  const canvasRef = useRef(null);
  const arrayColors = ['#FFCB68', '#B65237', '#1D4E5F', '#0E1A2A', '#0B000E'];

  useEffect(() => {
    const banner = bannerRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const initializeCanvas = () => {
      canvas.width = banner.offsetWidth;
      canvas.height = banner.offsetHeight;
    };

    const createDots = () => {
      const newDots = [];
      for (let index = 0; index < 100; index++) {
        newDots.push({
          x: Math.floor(Math.random() * canvas.width),
          y: Math.floor(Math.random() * canvas.height),
          size: Math.random() * 3 + 5,
          color: arrayColors[Math.floor(Math.random() * 5)]
        });
      }
      return newDots;
    };

    let dots = createDots();

    const drawDots = () => {
      dots.forEach(dot => {
        ctx.fillStyle = dot.color;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 0);
        ctx.fill();
      });
    };

    const handleMouseMove = (event) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawDots();
      const mouse = {
        x: event.pageX - banner.getBoundingClientRect().left,
        y: event.pageY - banner.getBoundingClientRect().top
      };
      dots.forEach(dot => {
        const distance = Math.sqrt((mouse.x - dot.x) ** 2 + (mouse.y - dot.y) ** 2);
        if (distance < 300) {
          ctx.strokeStyle = dot.color;
          ctx.lineWidth = .3;
          ctx.beginPath();
          ctx.moveTo(dot.x, dot.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      });
    };

    const handleMouseOut = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawDots();
    };

    const handleResize = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      initializeCanvas();
      dots = createDots();
      drawDots();
    };

    initializeCanvas();
    drawDots();

    banner.addEventListener('mousemove', handleMouseMove);
    banner.addEventListener('mouseout', handleMouseOut);
    window.addEventListener('resize', handleResize);

    return () => {
      banner.removeEventListener('mousemove', handleMouseMove);
      banner.removeEventListener('mouseout', handleMouseOut);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return (
    <div className="home-container" id='home' ref={bannerRef}>
      <canvas className="dotsCanvas" ref={canvasRef}></canvas>
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
