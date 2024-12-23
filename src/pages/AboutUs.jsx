import React from "react";
import About from '../assets/images/About.png'
import disscuss from '../assets/images/disscuss.png'
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
          <button className="about-us-btn">ABOUT US</button>
          <h2>We are skilled in providing superior services</h2>
          <p>
            Customer satisfaction is such a key part of many successful
            businesses.
          </p>
          <button className="read-more-btn">Read More →</button>
        </div>
      </section>

      <section className="why-choose-us">
        <h3>Expert advising clients on financial challenges</h3>
        <p>
          Customer satisfaction is such a key part of many successful
          businesses. Most companies...
        </p>
        <div className="why-choose-details">
          <div className="detail-item">
            <span className="icon">✔</span>
            <div>
              <h4>First working process</h4>
              <p>
                Customer satisfaction is such a key part of many successful
                businesses.
              </p>
            </div>
          </div>
          <div className="detail-item">
            <span className="icon">✔</span>
            <div>
              <h4>Dedicated Team</h4>
              <p>
                Business model that refers to an agreement between the client
                and service provider.
              </p>
            </div>
          </div>
          <div className="detail-item">
            <span className="icon">✔</span>
            <div>
              <h4>24/7 Hours Support</h4>
              <p>
                Scaling your team to provide assistance around the clock might
                sound like a...
              </p>
            </div>
          </div>
        </div>
        <div className="why-choose-image">
          <img
            src={disscuss}
            alt="Team discussion"
          />
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
