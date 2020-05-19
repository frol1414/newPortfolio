import React from "react";
import './SkillsBlock.css';

const SkillsBlock = ({skills}) => {
  let className = 'box-card my-skills-block';
  if(skills.focus) {
    className += ' focus';
  }
  
  return (
    <div className="col-lg-3 col-md-12 my-skills-container">
      <div className={className}>
        {skills.focus ? <span className="my-skills-block__span"></span> : null}
        <span className="my-skills-block__title">{skills.title}</span>
        <p className="my-skills-block__desc">
          {skills.desc}
        </p>
        <div className="card-row">
          <ul className="my-skills-list">
            {skills.list.map(el => {
              return <li className="my-skills-list__item" key={el.id}> {el.title} </li>
            })}
          </ul>
        </div>
      </div>
    </div>
  )
};

export default SkillsBlock;