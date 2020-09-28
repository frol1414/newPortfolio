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
                <div className="box-card facts__item" key={el.id}>
                  <blockquote className="blockquote">
                    <p className="mb-0">{el.title}</p>
                    <footer className="blockquote-footer">{el.desc}</footer>
                  </blockquote>
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