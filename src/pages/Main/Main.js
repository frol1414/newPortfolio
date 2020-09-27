import React from "react";
import './Main.css'
import WorkBlock from "../../components/WorkBlock/WorkBlock";
import {connect} from "react-redux";

const Main = props => {
  function renderWorks() {
    return props.works.map((el) => {
      return (
        <WorkBlock data={el} key={el.id}/>
      )
    })
  }
  
  return (
    <div className="main">
      <p className="page__title main__title">Alexander Frolov</p>
      <p className="main__prof-title">Front-End Developer</p>
      
      <div className="page-header-wrapper">
        <p className="page-header__title">Works</p>
        <p className="page-header__desc">Some of my super duper works</p>
      </div>
      
      <div className="main-works">
        {renderWorks()}
      </div>
  
      <div className="page-header-wrapper">
        <p className="page-header__title">About</p>
        <p className="page-header__desc">Some words about me</p>
      </div>
      
    </div>
  )};

function mapStateToProps(state) {
  return {
    works: state.works,
  }
}

export default connect(mapStateToProps)(Main)
