import React from 'react';
import './HomePage.css';
import google from '../assets/images/Google.png';
import dropbox from '../assets/images/Dropbox.png';
import amazon from '../assets/images/Amazon.png';
import atlassian from '../assets/images/Atlassian.png';
import hubspot from '../assets/images/Hubspot.png';
import logo from '../assets/images/logo.png';

const HomePage = () => {
  return (
    <div className="hero-section">
      <div className="hero-left">
        <h1>We’re a Creative <br /> Design Agency</h1>
        <p>
          We are delivering top level digital services best experienced team, just get stared.
        </p>
        <div className="hero-buttons">
          <button className="yellow-button">Get Started</button>
          <span className="video-link">
            &#9654; How it works
          </span>
        </div>
        <div className="hero-stats">
          <div>
            <h3>20+</h3>
            <p>Years of Excellent</p>
          </div>
          <div>
            <h3>90%</h3>
            <p>Happy Client</p>
          </div>
          <div>
            <h3>80%</h3>
            <p>Project Success</p>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <img src={logo} alt="Team Working" />
        <div className="market-card">
          <p>Market Static</p>
          <h3>Agency Overview</h3>
          <p>+30% <span>Apr</span></p>
          <div className="chart"></div>
        </div>
      </div>

      <div className="partner-logos">
        <img src={google} alt="Google" />
        <img src={dropbox} alt="Dropbox" />
        <img src={amazon} alt="Amazon" />
        <img src={atlassian} alt="Atlassian" />
        <img src={hubspot} alt="Hubspot" />
      </div>
    </div>
  );
};

export default HomePage;
