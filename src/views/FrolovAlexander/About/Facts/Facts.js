import React from "react";
import './Facts.css';
import {connect} from "react-redux";

const Facts = (props) => (
  <div className="row justify-content-center facts">
    <div className="col-lg-10 text-center">
      <h3 className="block-title">Some facts about me</h3>
     
        
        <div className="facts__container">
          {
            props.facts.map(el => {
              return (
                <div className="facts__item">
                  <div className="facts__point">
                    <div className="facts__point-badge"></div>
                  </div>
                  <div className="facts__content">
                    <p className="facts__text">
                      {el.title}
                    </p>
                    <span className="facts__desc">{el.desc}</span>
                  </div>
                </div>
              )
            })
          }
        </div>
 
    </div>
  </div>
);

function mapStateToProps(state) {
  return {
    facts: state.skills.fFacts,
  }
}

export default connect(mapStateToProps)(Facts);