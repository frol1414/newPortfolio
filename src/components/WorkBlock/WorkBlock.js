import React from "react";
import './WorkBlock.css'

const WorkBlock = props => {
  let className = `work-block ${props.data.class}`
  return (
    <div className={className}>
        <div className="work-block__info">
            <p className="work-block__title">{props.data.title}</p>
            <p className="work-block__desc">{props.data.mainTech}</p>
        </div>
        <div></div>

    </div>
  )};

export default WorkBlock;