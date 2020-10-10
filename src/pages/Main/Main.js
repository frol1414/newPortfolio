import React, {useEffect, useState} from "react";
import './Main.css'
import WorkBlock from "../../components/WorkBlock/WorkBlock";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import AboutBlock from "../../components/AboutBlock/AboutBlock";
import alex from "../../images/Alex.svg";

const Main = props => {
  const renderWorks = () => props.works.filter(item => item.main).map((el) => (<WorkBlock data={el} key={el.id}/>))
  const [loading, setLoading] = useState(true)
  useEffect(() => setLoading(false), [])
  
  return (
    !loading ? (
    <div className="main">
      
      <div className="main-logo">
        <img src={alex} alt='Frolov Alexander'/>
      </div>
      
      <p className="page__title main__title">Alexander Frolov</p>
      <p className="main__prof-title">Front-End Developer</p>

      <div className="page-header-wrapper">
        <p className="page-header__title">About</p>
        <p className="page-header__desc about-header__desc">Hello, I’m Alexander Frolov, Frontend-developer (and little Backend) who is currently in St.Petersburg, Russia.</p>
      </div>

      <AboutBlock />
      <NavLink to='/about' className="main-about__btn">More information</NavLink>

    <div className="page-header-wrapper">
        <p className="page-header__title">Works</p>
        <p className="page-header__desc">Some of my super duper works</p>
    </div>

    <div className="main-works">
        {renderWorks()}
    </div>

    <NavLink to='/works' className="main-works__btn">See all my works</NavLink>
    </div>
    ):null
  )};

const mapStateToProps = (state) => ({works: state.works})

export default connect(mapStateToProps)(Main)
