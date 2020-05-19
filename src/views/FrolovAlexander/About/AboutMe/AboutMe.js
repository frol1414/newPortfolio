import React from "react";
import aboutMeImg from '../../../../images/FA/222.JPG'
import first from '../../../../images/FA/77.JPG'
import second from '../../../../images/FA/22.jpg'
import third from '../../../../images/FA/33.jpg'
import four from '../../../../images/FA/44.JPG'
import five from '../../../../images/FA/55.JPG'
import six from '../../../../images/FA/66.JPG'
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
              <img src={aboutMeImg}/>
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
          <div className="col-lg-2 col-md-4 col-6 ">
            <div className="about-me__foto">
              <img src={first}/>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6 ">
            <div className="about-me__foto">
              <img src={second}/>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6 ">
            <div className="about-me__foto">
              <img src={third}/>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6 ">
            <div className="about-me__foto">
              <img src={four}/>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6 ">
            <div className="about-me__foto">
              <img src={five}/>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6 ">
            <div className="about-me__foto">
              <img src={six}/>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
  
);

export default AboutMe;