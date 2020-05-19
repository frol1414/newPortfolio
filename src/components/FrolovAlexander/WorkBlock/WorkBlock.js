import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './WorkBlock.css';

  
const WorkBlock = (props) => (
  <div className="col-lg-4">
    <div className="box-card work-block">
      <img src={props.data.image}/>
      <p className="work-block-title">{props.data.title}</p>
      <p className="work-block-stack">{props.data.stack}</p>
    </div>
  </div>
);

export default WorkBlock;