import React from "react";
import aboutMeImg from "../../images/222.JPG"
import './AboutBlock.css'

const AboutBlock = props => {

  return (
    <div className="about-block">
      <img src={aboutMeImg} alt='Frolov Alexander'/>
      <article>
        <p className="about-block__desc-first">I love coding. When I don't write code, I sleep...or eat...or cook...or travel.</p>
        <p className="about-block__desc-second">If you offer me an interesting project and I have to move somewhere, give me at east a couple of hours to pack my suitcase.
        Interesting projects are the strongest motivation!</p>
      </article>
    </div>
  )};

export default AboutBlock;