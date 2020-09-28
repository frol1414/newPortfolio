import React from "react";
import './Main.css'
import WorkBlock from "../../components/WorkBlock/WorkBlock";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import AboutBlock from "../../components/AboutBlock/AboutBlock";

const Main = props => {
  const renderWorks = () => props.works.filter(item => item.main).map((el) => (<WorkBlock data={el} key={el.id}/>))
  
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

      <NavLink to='/works' className="main-works__btn">See all my works</NavLink>

      <div className="page-header-wrapper">
        <p className="page-header__title">About</p>
        <p className="page-header__desc">Some words about me</p>
      </div>

      <AboutBlock />
      <NavLink to='/about' className="main-about__btn">More information</NavLink>

    </div>
  )};

const mapStateToProps = (state) => ({works: state.works})

export default connect(mapStateToProps)(Main)
