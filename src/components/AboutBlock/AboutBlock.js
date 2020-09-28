import React from "react";
import aboutMeImg from "../../images/222.JPG"
import './AboutBlock.css'

const AboutBlock = props => {

  return (
    <div className="about-block">
      <img src={aboutMeImg} alt='Frolov Alexander'/>
      <article>
        <p className="about-block__desc-first">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p className="about-block__desc-second">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </article>
    </div>
  )};

export default AboutBlock;