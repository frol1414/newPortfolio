import React from "react";
import Header from "./Header/Header";
import AboutMe from "./AboutMe/AboutMe";
// import MySkills from "./MySkills/MySkills";
import Contacts from "./Contacts/Contacts";

import './MainF.css'

const MainF = props => {
  return (
    <div className="main-container">
      <Header />
      <AboutMe />
      {/*<MySkills />*/}
      <Contacts />
    </div>

   
  )};

export default MainF;