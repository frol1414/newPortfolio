import React from "react";
import './OneWork.css'
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import alex from "../../images/Alex.svg";

const OneWork = props => {
  const id = props.match.params.id;
  const work = useSelector(state => state.works.find(el => el.id === +id));
  
  return (
    <div className="one-work">
      <div className="logo">
        <NavLink to="/" className="logo__title">Alexander Frolov</NavLink>
        <img src={alex} alt='Frolov Alexander'/>
      </div>
      
      <p className="page__title">{work.title}</p>
      
      <div className="work-preview yellow">
        <div className="work-images">
        
        </div>
        <div className="work-technical-sheet">
          <p className="technical-sheet__title">Technical Sheet</p>
          <ul>
            {work.stack.map((el, idx) => <li className="technical-sheet__item" key={idx}>{el}</li> )}
          </ul>
        </div>
      </div>
      
      <div className="work-info-block">
        <p className="work-info__title">About this project</p>
        <p className="work-info__desc">{work.desc}</p>
      </div>
      
      <div className="work-info-block">
        <p className="work-info__title">My work in this project</p>
        <ul>
          {work.myWork.map((el, idx) => <li className="work-info__desc" key={idx}>{el}</li> )}
        </ul>
      </div>
  
      <div className="work-info-block">
        <p className="work-info__title">Resources</p>
        <p className="work-info__desc">Github: {work.github || 'Private project'}</p>
        <p className="work-info__desc">Url: {work.url || 'Private project'}</p>
      </div>
    </div>
    )};

export default OneWork

