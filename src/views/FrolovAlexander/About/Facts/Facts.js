import React from "react";
import aboutMeImg from '../../../../images/FA/111.jpg'
import './Facts.css';

const Facts = () => (
  <div className="row justify-content-center facts">
    <div className="col-lg-10 text-center">
      <h3 className="block-title">Some facts about me</h3>
      <section className=" box-card">
        
        <div className="facts__container">
          <div className="facts__item">
            <div className="facts__point">
              <div className="facts__point-badge"></div>
            </div>
            <div className="facts__content">
              <p className="facts__text">
                I have a cat.
              </p>
            </div>
          </div>
   
          <div className="facts__item facts__item-right">
            <div className="facts__point facts__point-right">
              <div className="facts__point-badge"></div>
            </div>
            <div className="facts__content">
              <p className="facts__text">
                My mom says I'm a very smart boy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
  
);

export default Facts;