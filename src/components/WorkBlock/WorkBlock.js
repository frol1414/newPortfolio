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
      <div></div>
    </NavLink>
  )};

export default WorkBlock;