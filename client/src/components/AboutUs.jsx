import React from "react";
import image from "../images/aboutimg.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="hero-img">
            <img src={image} alt="hero" />
          </div>
          <div className="hero-content">
            <p>
              We are dedicated to improving your health through compassionate
              and innovative care. Our experienced team offers personalized
              services to meet your individual needs. Your health and comfort
              are our main concerns, and we strive to help you achieve optimal
              well-being.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
