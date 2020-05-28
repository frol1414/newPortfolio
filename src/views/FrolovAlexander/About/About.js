import React from "react";
import AnimationHoc from "../../../components/FrolovAlexander/AnimationHoc";
import Contacts from "../../../components/FrolovAlexander/Contacts/Contacts";
import MainHeader from "../../../components/FrolovAlexander/MainHeader/MainHeader";
import AboutMe from "./AboutMe/AboutMe";
import MySkills from "./MySkills/MySkills";

import './About.css'
import Facts from "./Facts/Facts";

const About = () => {
  return (
    <AnimationHoc>
    <div className="container-fluid about-container">
      <MainHeader />
      <AboutMe />
      <MySkills />
      <Facts/>
      <Contacts />
    </div>
    </AnimationHoc>
  )};

export default About;