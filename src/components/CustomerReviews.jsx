// CustomerReviews.jsx

import React, { useState } from 'react';
import './CustomerReviews.css';
import shashwat from '../images/shashwat.jpeg'
import dravyanshu from '../images/raj.jpeg'
import aman from '../images/aman.jpeg'
import adarsh from '../images/adarsh.jpeg'
import nikhil from '../images/nikhil.jpeg'
import sharad from '../images/sharad.jpeg'

const reviewsData = [
  {
    id: 1,
    name: 'Shashwat Mishra',
    image: shashwat,
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 2,
    name: 'Dravyanshu Singh',
    image: dravyanshu,
    review: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 3,
    name: 'Aman Dwivedi',
    image: aman,
    review: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 4,
    name: 'Adarsh Sinha',
    image: adarsh,
    review: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 5,
    name: 'Nikhil Soni',
    image: nikhil,
    review: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 6,
    name: 'Sharad Gumber',
    image: sharad,
    review: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
 
];
const CustomerReviews = () => {
    const itemsPerPage = 3; // Number of reviews per page
    const [currentPage, setCurrentPage] = useState(1);
  
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  
    const totalPages = Math.ceil(reviewsData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentReviews = reviewsData.slice(startIndex, endIndex);
  
    return (
      <div className="customer-reviews">
        <h1>Testimony</h1>
        <h2>Our Satisfied Customers Say</h2>
        {currentReviews.map((review) => (
          <div className="review" key={review.id}>
            <img src={review.image} alt={review.name} />
            <h4>{review.name}</h4>
            <p>{review.review}</p>
          </div>
        ))}
        <div className="pagination">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={currentPage === index + 1 ? 'active' : ''}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    );
  };
  

export default CustomerReviews;
