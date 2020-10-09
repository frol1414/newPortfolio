import React from "react";
import './WorkBlock.css'
import {NavLink} from "react-router-dom";

const WorkBlock = props => {
  let className = `work-block ${props.data.class}`
  return (
    <NavLink className={className} to={'/work/' + props.data.id}>
      <div className="work-block__info">
          <p className="work-block__title">{props.data.title}</p>
          <p className="work-block__desc">{props.data.mainTech}</p>
      </div>
      <div className="work-block__img">
        <img className="first" src={props.data.mainImage}  alt={props.data.title}/>
        <img className="second" src={props.data.mainImage2}  alt={props.data.title}/>
      </div>
    </NavLink>
  )};

export default WorkBlock;