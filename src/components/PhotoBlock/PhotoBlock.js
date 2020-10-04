import React from "react";
import './PhotoBlock.css'

const PhotoBlock = props => {
  let className = `photo-block__item `
  return (
    <div className="photo-block">
      {props.data.map((el, idx) => (
        <div key={idx} className={className + el.class}>
          <img  src={el.img} alt='Frolov Alexander'/>
        </div>
      ))}
    </div>
  )};

export default PhotoBlock;