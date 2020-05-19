import React from "react";

import Contacts from "../../../components/FrolovAlexander/Contacts/Contacts";
import MainHeader from "../../../components/FrolovAlexander/MainHeader/MainHeader";
import AboutMe from "./AboutMe/AboutMe";
import MySkills from "./MySkills/MySkills";

import './About.css'
import Facts from "./Facts/Facts";

const About = () => {
  return (
    <div className="container-fluid main-container">
      <MainHeader />
      <AboutMe />
      <MySkills />
      <Facts/>
      <Contacts />
    </div>
  )};

export default About;