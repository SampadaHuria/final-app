
import React from 'react';
import './Navbar.css';


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">SABJIVANI</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#cart">Cart</a></li>
        <li className="dropdown">
          <a href="#products">Products</a>
          <ul className="dropdown-content">
            <li><a href="#wishlist">Wishlist</a></li>
            <li><a href="#products-section">Products</a></li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
