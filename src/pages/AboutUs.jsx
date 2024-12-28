import React from "react";
import About from '../assets/images/About.png'
import "./AboutUs.css"; 

const AboutUs = () => {
  return (
    <div className="about-us">
      <section className="about-section">
        <div className="about-image">
          <img
            src={About}
            alt="Team working"
          />
        </div>
        <div className="about-content">
        <div className="about-main">
          <button className="about-us-btn">ABOUT US</button>
          <h2>We are skilled in providing superior services</h2>
          <p>
            Customer satisfaction is such a key part of many successful
            businesses.
          </p>
          <button className="read-more-btn">Read More →</button>
        </div>
        </div>
      </section>     
    </div>
  );
};

export default AboutUs;
