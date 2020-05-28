import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './WorkBlock.css';
import {NavLink} from "react-router-dom";

const WorkBlock = (props) => (
  <div className="col-lg-4">
    
      <div className="work-block">
        <div className="butFrame" >
          <img src={props.data.mainImage} alt=""/>
          <div className="butTextWrap">
            <p>{props.data.stack.join(', ')}</p>
            <p className="work-block__btn"><NavLink to={"/Frolov-Alexander/all-my-works/" + props.data.id}>Watch more...</NavLink></p>
          </div>
        </div>
        <p className="butFrame__title">{props.data.title}</p>
        <p className="butFrame__desc">{props.data.stack[1]}</p>
      </div>
  </div>
);

export default WorkBlock;