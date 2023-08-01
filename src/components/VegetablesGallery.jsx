// src/VegetablesGallery.jsx

import React from 'react';
import './VegetablesGallery.css';
import img1 from "../images/category.jpg";
import img2 from "../images/category-1.jpg";
import img3 from "../images/category-2.jpg";
import img4 from "../images/category-3.jpg";
import img5 from "../images/category-4.jpg"; // Add your custom styles here

const VegetablesGallery = () => {
  return (
    
    <div className="vegetables-gallery">
              <h2 className="center-text">Vegetable Gallery</h2>
      <div className="frame">
      <img src={img1} alt="" />
      <img src={img2} alt="" />
      <img src={img3} alt="" />
      <img src={img4} alt="" />
      <img src={img5} alt="" />
      </div>
    </div>
  );
};

export default VegetablesGallery;


