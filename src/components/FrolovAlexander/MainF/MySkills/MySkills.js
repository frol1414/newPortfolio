import React, {Component} from "react";
import frontEndImg from'../../../../images/FA/2.jpg';
import './MySkills.css';

class MySkills extends Component {
  
  state = {
    frontEndList: [
      {id: 1, title: 'HTML5 / CSS3'},
      {id: 2, title: 'JavaScript / >ES6'},
      {id: 3, title: 'jQuery'},
      {id: 4, title: 'Vue / Vuex'},
      {id: 5, title: 'React / Redux'},
    ],
    backEndList: [
      {id: 1, title: 'Php'},
      {id: 2, title: 'Laravel'},
      {id: 3, title: 'Node.js'},
    ],
  };
  
  renderSkillList(value) {
    return value.map((el) => {
      return (
        <li key={el.id} className="skills-list-item">
          {el.title}
        </li>
      )
    })
  }
  
  render() {
    return (
      <div className="my-skills">
        <h2 className="my-skills-title">Мои навыки</h2>
        
        <section className="my-skill-front-end">
          <div className="img-block">
            <img src={frontEndImg}/>
          </div>
        
          <div className="front-end-desc-block">
            <h2 className="skills-title">Front-End</h2>
            <ul className="skills-list">
              {this.renderSkillList(this.state.frontEndList)}
            </ul>
          </div>
        </section>
      
        <section className="my-skill-back-end">
          <div className="front-end-desc-block">
            <h2 className="skills-title">Back-End</h2>
            <ul className="skills-list">
              {this.renderSkillList(this.state.backEndList)}
            </ul>
          </div>
  
          <div className="img-block">
            <img src={frontEndImg}/>
          </div>
        </section>
      
        <section className="my-skill-other">
          <h3 className="skills-title">Разное:</h3>
        </section>
    
      </div>
    )
  }
};

export default MySkills;