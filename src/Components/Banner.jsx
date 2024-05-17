import React, { useEffect, useRef, useState } from 'react';
import './Banner.css';

const Banner = () => {
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
      for (let index = 0; index < 50; index++) {
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
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
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
          ctx.lineWidth = 0.3;
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

  return (
    <div className="banner" ref={bannerRef}>
      <canvas className="dotsCanvas" ref={canvasRef}></canvas>
    </div>
  );
};

export default Banner;
