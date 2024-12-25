import React from "react";
import "./Service.css";
import business from '../assets/images/business.png';
import cards from '../assets/images/cards.png';
import communication from '../assets/images/communication.png';
import development from '../assets/images/development.png';
import flyers from '../assets/images/flyers.png';
import infographic from '../assets/images/infographic.png';
import managment from '../assets/images/managment.png';
import recources from '../assets/images/recources.png';

const Service = () => {
    const services = [
        { image: managment, title: "Product Management", vacancies: 20 },
        { image: development, title: "Web & Mobile Development", vacancies: 20 },
        { image: flyers, title: "Brochures & Flyers", vacancies: 20 },
        { image: cards, title: "Logo & name cards", vacancies: 20 },
        { image: communication, title: "Marketing & Communication", vacancies: 20 },
        { image: business, title: "Business Development", vacancies: 20 },
        { image: recources, title: "Human Resources", vacancies: 20 },
        { image: infographic, title: "Infographics & Illustrations", vacancies: 20 },
      ];
    return  (
            <div className="our-service">
              <section className="service-section">
                <div className="service-main">
                  <button className="service-btn">OUR SERVICES</button>
                  <h2>What Creative Design We Offer</h2>
                  <p>
                    Business owners and managers lead by example. The values and work
                    ethic displayed by a company's decision makers have a direct ...
                  </p>
                </div>
        
                <div className="service-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <img
                className="service-image"
                src={service.image}
                alt={service.title}
              />
              <h3>{service.title}</h3>
              <p>vacancy available {service.vacancies}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
          );
        };
        
export default Service;