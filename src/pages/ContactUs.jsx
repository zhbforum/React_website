import React from "react";
import './ContactUs.css';
import emailtwo from '../assets/images/emailtwo.png';
import phonetwo from '../assets/images/phonetwo.png';
import locationtwo from '../assets/images/locationtwo.png';

const ContactUs = () => {
    return (
      <div className="contact-container">
        <div className="contact-info">
          <button className="contact-header-btn">OUR CONTACTS</button>
          <h2 className="contact-title">Let’s Start Working Together.<br />Get in Touch with Us!</h2>
          <p className="contact-description">
            Get in touch to discuss your employee wellbeing needs today.<br />
            Please give us a call, drop us an email.
          </p>
          <ul className="contact-details">
            <li> <img src={locationtwo} alt="Location" />41 Pilgrim Avenue, Chevy Chase, Md 20815</li>
            <li><img src={phonetwo} alt="Phone" />+01234 567 890</li>
            <li><img src={emailtwo} alt="Email" />info@agency.com</li>
          </ul>
        </div>
  
        <div className="contact-form">
          <form>
            <label>
              Your Name
              <input type="text" placeholder="Manowar Hossain" />
            </label>
            <label>
              Your Email
              <input type="email" placeholder="Your Email" />
            </label>
            <label>
              Website
              <input type="url" placeholder="Your Website" />
            </label>
            <label>
              Tell About Your Project
              <textarea placeholder="Your Message" rows="4"></textarea>
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  };
  
  export default ContactUs;