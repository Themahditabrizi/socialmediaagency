import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div id="section2" className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
        Fuel Your Social Success with Our Expertise        </h1>
        <p className="primary-text">
         we're passionate about helping businesses succeed on social media. Our team of social media marketing experts has years of experience working with businesses like yours to create effective social media strategies that drive results. We believe that social media marketing should be accessible to all businesses, which is why we're here .
        </p>
        <p className="primary-text">
        Our team is made up of experienced social media marketers who know the ins and outs of the industry. We're dedicated to helping our clients achieve their social media goals, and we're always up-to-date on the latest trends and best practices.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          
        </div>
      </div>
    </div>
  );
};

export default About;