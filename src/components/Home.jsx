import React from "react";
// import BannerBackground from "../images/banner-bg1.jpg";
// import BannerImage from "../Assets/home-banner-image.png";
import BannerImage from "../images/category-1.jpg";
// import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* <Navbar /> */}
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          {/* <img src={BannerBackground}  alt="" /> */}
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
           Know your famer , Know your food !
          </h1>
          <p className="primary-text">
            Healthy switcher chefs do all the prep work, like peeding, chopping
            & marinating, so you can cook a fresh food.
          </p>
          <button className="secondary-button">
            Order Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
