import React from "react";
import { useSelector } from 'react-redux'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import AnimationHoc from "../../../components/FrolovAlexander/AnimationHoc";
import 'react-awesome-slider/dist/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './OneWork.css';
import MainHeader from "../../../components/FrolovAlexander/MainHeader/MainHeader";
import {NavLink} from "react-router-dom";
import comeBack from "../../../images/FA/icons/come-back.png";

const OneWork = (props) => {
  
  const id = props.match.params.id;
  const work = useSelector(state => state.works.fWorks.find(el => el.id === +id));
  
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  
  const slider = (
    <AutoplaySlider
      play={true}
      cancelOnInteraction={false}
      interval={5000}
      mobileTouch={true}
    >
      {
        work.images.map((el, idx) => <div data-src={process.env.PUBLIC_URL + el} key={idx}/>)
      }
    </AutoplaySlider>
  );
  return (
    <AnimationHoc>
      <div className={`container-fluid my-works-container`}>
          <MainHeader />
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <div className="one-work__title-block">
                <NavLink to={"/Frolov-Alexander/all-my-works/"} className="come-back"><img src={comeBack}/></NavLink>
                <h1 className="one-work__title">{work.title}</h1>
              </div>
        
              <p className="one-work__short-desc">{work.shortDesc}</p>
        
              <div className="one-work__info-block">
                <div className="info-block__stack-wrapper">
                  <div className="box-card my-skills-block">
                    <span className="my-skills-block__title">Technical Sheet</span>
                    <div className="card-row">
                      <ul className="my-skills-list">
                        {
                          work.stack.map((el, idx) => <li className="my-skills-list__item" key={idx}>{ el }</li>)
                        }
                      </ul>
                    </div>
                  </div>
                </div>
          
                <div className="info-block__foto-wrapper">
                  {slider}
                </div>
              </div>
        
        
              <div className="">
                <p className="block-title">About this project</p>
                <p className="one-work__desc">{ work.desc }</p>
                <p className="block-title">My work in this project:</p>
                <ul className="one-work__my-work">
                  { work.myWork.map((el, idx) => <li key={idx}>{el}</li>) }
                </ul>
              </div>
        
              <div className="one-work__resources">
                <p className="block-title">Resources</p>
                <span className="one-work__github">
                Github: <a href={work.github ? work.github : null} target="_blank">
                  { work.github ? work.github : 'Private repository'}
                </a>
              </span>
                <span className="one-work__url">url:
                <a href={work.url ? work.url : null} target="_blank">
                  { work.url ? work.url : ' Private part' }
                </a></span>
              </div>
      
            </div>
          </div>
        </div>
    </AnimationHoc>
  )
};

export default OneWork