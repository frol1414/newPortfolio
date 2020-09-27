import React, {useState} from "react";
import aboutMeImg from "../../images/222.JPG"

import './About.css'

const About = props => {
  const [skills, setSkills] = useState({
    backEndList: {
      title: 'backEnd',
      desc: 'I don’t like to wait for backend developers, so sometimes I write backутв myself',
      focus: false,
      list: [
        {id: 1, title: 'Php / Laravel'},
        {id: 2, title: 'Node.js'},
        {id: 3, title: 'PostgreSQL'}
      ]
    },
    frontEndList: {
      title: 'frontEnd',
      desc: 'I like to create',
      focus: true,
      list: [
        {id: 1, title: 'Javascript / ES6++'},
        {id: 2, title: 'React / Redux'},
        {id: 3, title: 'React Native'},
        {id: 4, title: 'Vue / Vuex'},
        {id: 5, title: 'jQuery'},
      ]
    },
    importantList: {
      title: 'important',
      desc: 'The most important skills at work! Really, the most important. No way without them.',
      focus: true,
      list: [
        {id: 1, title: 'Rcvbcbdfbdfb'},
        {id: 2, title: 'I sing... very bad'},
        {id: 3, title: 'Rgfbgfgcsd'}
      ]
    },
    otherList: {
      title: 'other',
      desc: 'I do not know what to write here...',
      focus: false,
      list: [
        {id: 1, title: 'Linux'},
        {id: 2, title: 'Github'},
        {id: 3, title: 'Webpack'},
        {id: 4, title: 'WebSockets'},
      ]
    },
  })
  return (
    <div className="about">
      <p className="page__title">About Me</p>
      
      <div className="hello-block">
        <p className="hello__title">Hello</p>
        <p className="hello__desc">Hello, I’m Alexander Frolow, frontend-developer. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      
      <div className="about__desc-block">
        <img src={aboutMeImg} alt='Frolov Alexander'/>
        <article>
          <p className="about__desc-first">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p className="about__desc-second">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </article>
      </div>
      
      <div className="skills-block">
        <p className="skills__title">Skills</p>
        <p className="skills__desc">Some of my skills</p>
      </div>
      
      <div className="skills">
        <div className="backend">
          <p className="skills__title-left">{skills.backEndList.title}</p>
          <ul>
            {skills.backEndList.list.map(el => <li className="skills__item" key={el.id}> {el.title} </li>)}
          </ul>
        </div>
        
        <div className="frontend">
          <p className="skills__title-right">{skills.frontEndList.title}</p>
          <ul className="skills__list">
            {skills.frontEndList.list.map(el => <li className="skills__item" key={el.id}> {el.title} </li>)}
          </ul>
        </div>
        
        <div className="soft-skills">
          <p className="skills__title-left">{skills.importantList.title}</p>
          <ul className="skills__list">
            {skills.importantList.list.map(el => <li className="skills__item" key={el.id}> {el.title} </li>)}
          </ul>
        </div>
        
        <div className="other">
          <p className="skills__title-right">{skills.otherList.title}</p>
          <ul>
            {skills.otherList.list.map(el => <li className="skills__item" key={el.id}> {el.title} </li>)}
          </ul>
        </div>
      </div>
      
    </div>
  )};

export default About;