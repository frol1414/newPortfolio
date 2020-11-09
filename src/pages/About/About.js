import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import './About.css'
import AboutBlock from "../../components/AboutBlock/AboutBlock";
import FactsBlock from "../../components/FactsBlock/FactsBlock";
import alex from "../../images/Alex.svg";
import {NavLink} from "react-router-dom";
import PhotoBlock from "../../components/PhotoBlock/PhotoBlock";
import Footer from "../../components/Footer/Footer";

const About = props => {
  const renderSkills = (value) => value.list.map((el) => <li className="skills__item" key={el.id}> {el.title} </li>)
  const [loading, setLoading] = useState(true)
  useEffect(() => setLoading(false), [])

  return (
    !loading ? (
    <main className="about">
      <div className="logo">
        <NavLink to="/" className="logo__title">Alexander Frolov</NavLink>
        <img src={alex} alt='Frolov Alexander'/>
      </div>

      <p className="page__title">About Me</p>

      <div className="page-header-wrapper">
        <p className="page-header__title">Hello</p>
        <p className="page-header__desc about-header__desc">Hello again, I’m Alexander Frolov, Frontend-developer (and little Backend) who is currently in St.Petersburg, Russia.</p>
      </div>

      <AboutBlock />
      <PhotoBlock data={props.photos}/>

      <div className="page-header-wrapper">
        <p className="page-header__title">Skills</p>
        <p className="page-header__desc">Some of my skills</p>
      </div>

      <div className="skills">
        <div className="backend">
          <p className="skills__title-left">{props.backEndList.title}</p>
          <ul className="about-list">
            {renderSkills(props.backEndList)}
          </ul>
        </div>

        <div className="frontend">
          <p className="skills__title-right">{props.frontEndList.title}</p>
          <ul className="skills__list about-list">
            {renderSkills(props.frontEndList)}
          </ul>
        </div>

        <div className="soft-skills">
          <p className="skills__title-left">{props.softSkillsList.title}</p>
          <ul className="skills__list about-list">
            {renderSkills(props.softSkillsList)}
          </ul>
        </div>

        <div className="other">
          <p className="skills__title-right">{props.otherList.title}</p>
          <ul className="about-list">
            {renderSkills(props.otherList)}
          </ul>
        </div>
      </div>

        <div className="page-header-wrapper">
            <p className="page-header__title">Facts</p>
            <p className="page-header__desc">Some facts about me</p>
        </div>
        <FactsBlock data={props.facts}/>
        <Footer />
    </main>
    ) : null
  )};

const mapStateToProps = ({skills, other}) => {
  return {
    backEndList: skills.backEndList,
    frontEndList: skills.frontEndList,
    softSkillsList: skills.softSkillsList,
    otherList: skills.otherList,
    photos: other.photos,
    facts: other.facts
  }
}

export default connect(mapStateToProps)(About)
