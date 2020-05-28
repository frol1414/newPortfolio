import React from "react";
import aboutMeImg from '../../../../images/FA/222.JPG'
import first from '../../../../images/FA/1.jpg'
import second from '../../../../images/FA/2.jpg'
import third from '../../../../images/FA/3.jpg'
import four from '../../../../images/FA/4.jpg'
import five from '../../../../images/FA/5.jpg'
import six from '../../../../images/FA/6.jpg'
import './AboutMe.css';

const AboutMe = () => (
  <div className="row justify-content-center about-me">
    <div className="col-lg-10 text-center">
      <h3 className="block-title">About me</h3>
      <section className="about-me-container box-card">
        
        <span className="limiter"></span>
        
        <div className="row">
          <div className="col-lg-6 about-me-img-block">
            <div className="about-me-img">
              <img src={aboutMeImg} alt="Frolov Alexander"/>
            </div>
          </div>
          
          <div className="col-lg-6 about-me-desc">
            <article>
              <p>Hello, I'm Alexander Frolov, frontend-developer (and some backend) based on in St. Petersburg, Russia.</p>
              <span />
              <p>I love coding. When I don't write code, I sleep ... or eat ... or cook ... or travel. But I love coding
                ... and eating too.</p>
            </article>
          </div>
        </div>
  
        <div className="row about-me__foto-block">
          <div className="col-lg-2 col-md-4 col-12 foto-block__wrapper">
            <div className="about-me__foto">
              <img src={first} alt="Frolov Alexander"/>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-12 foto-block__wrapper">
            <div className="about-me__foto">
              <img src={second} alt="Frolov Alexander"/>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-12 foto-block__wrapper">
            <div className="about-me__foto">
              <img src={third} alt="Frolov Alexander"/>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-12 foto-block__wrapper">
            <div className="about-me__foto">
              <img src={four} alt="Frolov Alexander"/>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-12 foto-block__wrapper">
            <div className="about-me__foto">
              <img src={five} alt="Frolov Alexander"/>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-12 foto-block__wrapper">
            <div className="about-me__foto">
              <img src={six} alt="Frolov Alexander"/>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
  
);

export default AboutMe;