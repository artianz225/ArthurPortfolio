import React from 'react'
import './Footer.css'
import { FaFacebookF, FaGithub, FaLinkedinIn, FaSkype, FaRegCopyright } from "react-icons/fa6";

function Footer() {
  return (
    <div className="footer-container">
        <h4>Arthur John Philipps Epiz</h4>
          <div className="footer-social-links-btn-container">
            <button><FaFacebookF /></button>
            <button><FaGithub /></button>
            <button><FaLinkedinIn /></button>
            <button><FaSkype /></button>
          </div>
          <div className="copyright-container">
          <p><FaRegCopyright /> Copyright 2024 || Art Web Developer. All Right Reserve </p>
          </div>
      </div>
  )
}

export default Footer
