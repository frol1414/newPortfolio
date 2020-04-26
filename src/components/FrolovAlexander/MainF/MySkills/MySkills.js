import React, {Component} from "react";
import './MySkills.css';
import jquery from '../../../../images/FA/icons/jquery.svg'
import vuejs from '../../../../images/FA/icons/vuejs.svg'
import react from '../../../../images/FA/icons/react.svg'
import php from '../../../../images/FA/icons/php.svg'
import nodejs from '../../../../images/FA/icons/nodejs.svg'
import postgresql from '../../../../images/FA/icons/postgresql.svg'
import github from '../../../../images/FA/icons/github.svg'
class MySkills extends Component {
  
  state = {
    frontEndList: [
      {id: 1, title: 'jQuery', logo: jquery},
      {id: 2, title: 'Vue / Vuex', logo: vuejs},
      {id: 3, title: 'React / Redux', logo: react},
    ],
    backEndList: [
      {id: 1, title: 'Php(Laravel)', logo: php},
      {id: 2, title: 'Node.js', logo: nodejs},
      {id: 3, title: 'PostgreSQL', logo: postgresql},
    ],
    otherList: [
      {id: 1, title: 'github', logo: github},
    ],
  };
  
  renderSkillList(value) {
    return value.map((el) => {
      return (
        <li key={el.id} className="skills-list-item">
          <img src={el.logo}/>
          <p>{el.title}</p>
        </li>
      )
    })
  }
  
  render() {
    return (
      <div className="my-skills">
        <h2 className="my-skills-title"><span /> <span />My skills</h2>
        
        <section className="my-skill-block">
          <div className="my-skill-block-desc">
            <div className="skills-title-block">
              <h2 className="skills-title">Front-End</h2>
              <div className="skills-title-border"/>
            </div>
            <ul className="skills-list">
              {this.renderSkillList(this.state.frontEndList)}
            </ul>
          </div>
        </section>
  
        <section className="my-skill-block">
          <div className="my-skill-block-desc">
            <div className="skills-title-block">
              <h2 className="skills-title">Back-End</h2>
              <div className="skills-title-border"/>
            </div>
            <ul className="skills-list">
              {this.renderSkillList(this.state.backEndList)}
            </ul>
          </div>
        </section>
        
        <section className="my-skill-block">
          <div className="my-skill-block-desc">
            <div className="skills-title-block">
              <h2 className="skills-title">Back-End</h2>
              <div className="skills-title-border"/>
            </div>
            <ul className="skills-list">
              {this.renderSkillList(this.state.otherList)}
            </ul>
          </div>
        </section>
    
      </div>
    )
  }
};

export default MySkills;