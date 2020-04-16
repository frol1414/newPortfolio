import React from "react";
import Header from "./Header/Header";
import AboutMe from "./AboutMe/AboutMe";
import MySkills from "./MySkills/MySkills";
import MyWorks from "./MyWorks/MyWorks";
import Contacts from "./Contacts/Contacts";

import './MainF.css'

const MainF = props => {
  return (
    <div className="container">
      <Header />
      <AboutMe />
      <MySkills />
      <MyWorks />
      <Contacts />
    </div>

   
  )};

export default MainF;