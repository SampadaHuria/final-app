// src/DealOfTheDay.jsx

import React from 'react';
import './DealOfTheDay.css'; // Add your custom styles here
import backgroundImage from '../images/bg_3.jpg'; // Replace this with the actual path to your background image

const DealOfTheDay = () => {
  return (
    <section className="deal-of-the-day"> 
     <img src={backgroundImage} alt=""/>
     
      <div className="container">
        <h2>Best Price For You</h2>
        <h3>Deal of the Day</h3>
        <p>
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
        </p>
        <div className="product">
          <h4>Spinach</h4>
          <p>Rs.10 now Rs.5 only</p>
        </div>
      </div>
    </section>
  );
};

export default DealOfTheDay;
