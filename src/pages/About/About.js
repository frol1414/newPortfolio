import React from "react";
import {connect} from "react-redux";
import './About.css'
import AboutBlock from "../../components/AboutBlock/AboutBlock";

const About = props => {
  const renderSkills = (value) => value.list.map((el) => <li className="skills__item" key={el.id}> {el.title} </li>)

  return (
    <div className="about">
      <p className="page__title">About Me</p>
      
      <div className="page-header-wrapper">
        <p className="page-header__title">Hello</p>
        <p className="page-header__desc">Hello, I’m Alexander Frolov, frontend-developer. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      
      <AboutBlock />
      
      <div className="page-header-wrapper">
        <p className="page-header__title">Skills</p>
        <p className="page-header__desc">Some of my skills</p>
      </div>
      
      <div className="skills">
        <div className="backend">
          <p className="skills__title-left">{props.backEndList.title}</p>
          <ul>
            {renderSkills(props.backEndList)}
          </ul>
        </div>
        
        <div className="frontend">
          <p className="skills__title-right">{props.frontEndList.title}</p>
          <ul className="skills__list">
            {renderSkills(props.frontEndList)}
          </ul>
        </div>
        
        <div className="soft-skills">
          <p className="skills__title-left">{props.softSkillsList.title}</p>
          <ul className="skills__list">
            {renderSkills(props.softSkillsList)}
          </ul>
        </div>
        
        <div className="other">
          <p className="skills__title-right">{props.otherList.title}</p>
          <ul>
            {renderSkills(props.otherList)}
          </ul>
        </div>
      </div>
      
    </div>
  )};

const mapStateToProps = ({skills}) => {
  return {
    backEndList: skills.backEndList,
    frontEndList: skills.frontEndList,
    softSkillsList: skills.softSkillsList,
    otherList: skills.otherList,
  }
}

export default connect(mapStateToProps)(About)
