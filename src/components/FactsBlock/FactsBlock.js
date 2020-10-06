import React from "react";
import './FactsBlock.css'

const FactsBlock = props => {
 let className = "class-block__item "
  return (
    <div className="facts-block">
      {props.data.map((el, idx) => (
          <div key={idx} className={className + el.class}>
            <div className="class-block__item-block ">
              <p>{el.title}</p>
            </div>
            <p>- {el.desc}</p>
          </div>
      ))}
    </div>
  )};

export default FactsBlock;