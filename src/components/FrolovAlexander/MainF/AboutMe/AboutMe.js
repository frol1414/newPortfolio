import React from "react";
import aboutMeImg from'../../../../images/FA/111.jpg'
import './AboutMe.css';

const AboutMe = () => (
  <div className="about-me">
    <h2 className="about-me-title">Обо мне</h2>
    <section className="about-me-container">
      <div className="about-me-container-desc">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad alias amet commodi dolorem dolores dolorum
          ducimus ea eligendi et in, minima natus perspiciatis quasi quo rerum, similique suscipit voluptas?</p>
        <span />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad alias amet commodi dolorem dolores dolorum
          ducimus ea eligendi et in, minima natus perspiciatis quasi quo rerum, similique suscipit voluptas?</p>
      </div>
      
      <div className="about-me-container-img">
        <img className="about-me-img" src={aboutMeImg}/>
      </div>
      
    </section>
  </div>
);

export default AboutMe;