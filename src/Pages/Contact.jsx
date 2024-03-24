import React, { useEffect } from 'react';
import './Contact.css';
import { FaMobileScreenButton, FaLocationDot } from "react-icons/fa6";
import { IoIosSend, IoMdSend } from "react-icons/io"; 
import { MdEmail } from "react-icons/md";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { BiMailSend } from "react-icons/bi";

import Aos from 'aos';
import 'aos/dist/aos.css'

function Contact() {

  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return (
    <div className="contact-container" id='contact'>
      <div className="contact-wrapper">

        <div data-aos="fade-down" className="contact-page-tittle">
          <h3>CONTACT</h3>
        </div>

        <div className="contact-grid-container">
            <div className="greetings-container">
              <p data-aos="fade-up">I would like to hear about your project and how I could help.
                 Please fill in the form, and I'll get back you as soon as possible.</p>

                 <div className="contact-cards-container">
                 
                 <div data-aos="fade-up" className="contact-cards">
                  <div className="contact-icon">
                    <FaLocationDot />
                  </div>
                  <div className="icon-details">
                    <p>Location:</p>
                    <p>Cainta Rizal, Philippines 1900</p>
                  </div>
                 </div>
                 
                 <div data-aos="fade-up" className="contact-cards">
                  <div className="contact-icon">
                    <MdEmail />
                  </div>
                  <div className="icon-details">
                    <p>Email:</p>
                    <p>artianz225@gmail.com</p>
                  </div>
                 </div>
                 
                 <div data-aos="fade-up" className="contact-cards">
                  <div className="contact-icon">
                    <FaMobileScreenButton />
                  </div>
                  <div className="icon-details">
                    <p>Contact #:</p>
                    <p>(+63) 931-121-8228</p>
                  </div>
                 </div>
                </div>
            </div>
        
            <div className="contact-form-container">
              <form>
                <input data-aos="fade-up" type="text" placeholder='Name' required/>
                <input data-aos="fade-up" type="email" placeholder='Email' required/>
                <textarea data-aos="fade-up" name="message" placeholder='Message' id="" cols="30" rows="10" required></textarea>
                <button data-aos="" className='send-msg-btn'>Send Message<BiMailSend /></button>
              </form>
            </div>

        </div>

        </div>        
    </div>
  )
}

export default Contact
