import React from "react";
import ProfilePic from "../Assets/suneel.jpeg";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
          It delivers good food and be healthy. It uses for giving good food from Food Restaurants.
        
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img className="profile" src={ProfilePic} alt="" />
        <p>
          Good Food Makes You Healthy. Always Ordered Good Food And Make Your Health Good .
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Suneel Pasupuleti</h2>
      </div>
    </div>
  );
};

export default Testimonial;