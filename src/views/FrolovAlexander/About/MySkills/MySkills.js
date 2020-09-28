import React from "react";
import 'react-tabs/style/react-tabs.css';
import './MySkills.css';
import SkillsBlock from "../../../../components/FrolovAlexander/skillsBlock/SkillsBlock";
import {connect} from "react-redux";

const MySkills = (props) => {
  return (
    <div className="row justify-content-center my-skills">
      <div className="col-lg-10 text-center">
        <h3 className="block-title">My Skills</h3>
        <div className="row my-skills-container">
          
          <SkillsBlock skills={props.skills.backEndList}/>
          <SkillsBlock skills={props.skills.frontEndList}/>
          <SkillsBlock skills={props.skills.importantList}/>
          <SkillsBlock skills={props.skills.otherList}/>
          
        </div>
      </div>
    </div>
  )
};

function mapStateToProps(state) {
  return {
    skills: state.skills.fSkills,
  }
}

export default connect(mapStateToProps)(MySkills);