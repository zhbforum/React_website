import React from 'react';
import './ReadyToUse.css'; 

import HotelImage from '../assets/images/Hotel.png';
import DesignImage from '../assets/images/Design.png';
import CeramicImage from '../assets/images/Ceramic.png';


const ReadyToUse = () => 
    {
    const items = [
      {
        title: 'Hotel Booking Website',
        description: `Business owners and managers lead by example. 
          The values and work ethic displayed by a company's team are...`,
        image: HotelImage,
        link: '#',
      },
      
      {
        title: 'UI/UX App Design',
        description: `Business owners and managers lead by example. 
          The values and work ethic displayed by a company's team are...`,
        image: DesignImage,
        link: '#',
      },
      
      {
        title: 'Ceramic E-commerce',
        description: `Business owners and managers lead by example. 
          The values and work ethic displayed by a company's team are...`,
        image: CeramicImage,
        link: '#',
      },
    ];

  return (
    <div className="ready-to-use">
      <div className="title-container">
        <p className="subtitle">Ready To Use</p>
        <h2 className="main-title">Elegant And Impressive Inner Pages</h2>
      </div>
      <div className="cards-container">
        {items.map((item, index) => 
        (
          <div key={index} className="card">
            <img src={item.image} alt={item.title} className="card-image" />
            <div className="card-content">
              <h3 className="card-title">{item.title}</h3>
              <p className="card-description">{item.description}</p>
              <a href={item.link} className="card-link">
                Read Case Study →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReadyToUse;
