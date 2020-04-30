import React from "react";
import aboutMeImg from'../../../../images/FA/111.jpg'
import './AboutMe.css';

const AboutMe = () => (
  <div className="row justify-content-center about-me">
    <div className="col-lg-8">
      <section className="about-me-container box-card">
        <div className="about-me-title">
          <p>About me</p>
        </div>
        
        <span className="limiter"></span>
        
        <div className="row">
          <div className="col-lg-6">
            <article className="about-me-desc">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad alias amet commodi dolorem dolores dolorum
                ducimus ea eligendi et in, minima natus perspiciatis quasi quo rerum, similique suscipit voluptas?</p>
              <span />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad alias amet commodi dolorem dolores dolorum
                ducimus ea eligendi et in, minima natus perspiciatis quasi quo rerum, similique suscipit voluptas?</p>
            </article>
          </div>
          
          <div className="col-lg-6 about-me-img-block">
            <div className="about-me-img">
              <img src={aboutMeImg}/>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  </div>
  
  // <div className="about-me">
  //   <h2 className="about-me-title">About me</h2>
  //   <section className="about-me-container">
  //     <div className="about-me-container-desc">
  //       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad alias amet commodi dolorem dolores dolorum
  //         ducimus ea eligendi et in, minima natus perspiciatis quasi quo rerum, similique suscipit voluptas?</p>
  //       <span />
  //       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad alias amet commodi dolorem dolores dolorum
  //         ducimus ea eligendi et in, minima natus perspiciatis quasi quo rerum, similique suscipit voluptas?</p>
  //     </div>
  //
  //     <div className="about-me-container-img">
  //       <img className="about-me-img" src={aboutMeImg}/>
  //     </div>
  //
  //   </section>
  // </div>
);

export default AboutMe;