import React from "react";
import WorkBlock from "../../../../components/FrolovAlexander/WorkBlock/WorkBlock";
import './Works.css';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";

const Works = (props) => {
  
  function renderWorks() {
    return props.works.filter(el => el.main).map(work => <WorkBlock data={work} key={work.id}/>)
  }
  
  return (
    <div className="row justify-content-center">
      <div className="col-lg-10">
        <div className=" main-works text-center">
          <h3 className="block-title">Some of my super duper works</h3>
          
          <div className="main-works-block">
            {renderWorks()}
          </div>
          
          <div className="work-btn">
            <NavLink to="/Frolov-Alexander/all-my-works">See all my super duper briliant fantastic works</NavLink>
            <p className="work-btn-desc">*Perhaps not so brilliant, but definitely excellent</p>
          </div>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    works: state.works.fWorks,
  }
}

export default connect(mapStateToProps)(Works)
