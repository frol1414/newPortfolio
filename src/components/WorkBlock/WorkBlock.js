import React from "react";
import './WorkBlock.css'

const WorkBlock = props => {
  let className = `WorkBlock ${props.data.class}`
  return (
    <div className={className}>
      <p>{props.data.title}</p>
      <p>{props.data.mainTech}</p>
    </div>
  )};

export default WorkBlock;