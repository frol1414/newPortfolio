import React from "react";
import './OneWork.css'
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import alex from "../../images/Alex.svg";
import Slider from "react-slick";
// import "/"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OneWork = props => {
  const id = props.match.params.id;
  const work = useSelector(state => state.works.find(el => el.id === +id));
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dotsClass: 'slider-dots',
    arrows: false,
    fade: true,
  };
  
  return (
    <div className="one-work">
      <div className="logo">
        <NavLink to="/" className="logo__title">Alexander Frolov</NavLink>
        <img src={alex} alt='Frolov Alexander'/>
      </div>
      
      <p className="page__title">{work.title}</p>
      
      <div className="work-preview yellow">
        <div className="work-images">
          <Slider {...settings}>
            {work.images.map((el, idx) => (
              <div key={idx}>
                <img style={{width: work.imagesWidth}} src={el} className="work__img" alt="work" />
              </div>
              ))}
          </Slider>
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
        <a className="work-info__desc work-info__link"  href={work.github || null} target="_blank" rel="noopener noreferrer">
          <span> Github: </span> {work.github || 'Private project'}
        </a>
        <a className="work-info__desc work-info__link"  href={work.url || null} target="_blank" rel="noopener noreferrer">
          <span>Url: </span> {work.url || 'Private project'}
        </a>
      </div>
    </div>
    )};

export default OneWork

