import React from "react";
import image from "../images/heroimg.jpg";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Your Health, <br />
          Our Responsibility
        </h1>
        <p>
          Maintaining your health is our top priority. We are dedicated to
          providing exceptional care and addressing all your healthcare needs
          with the utmost professionalism. Our team of experts is here to
          support you every step of the way, ensuring your well-being and peace
          of mind.
        </p>
      </div>
      <div className="hero-img">
        <img src={image} alt="hero" />
      </div>
    </section>
  );
};

export default Hero;
