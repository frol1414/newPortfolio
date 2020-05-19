import React from "react";

import Contacts from "../../../components/FrolovAlexander/Contacts/Contacts";
import MainHeader from "../../../components/FrolovAlexander/MainHeader/MainHeader";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Works from "./Works/Works";
import './MainF.css'

const MainF = () => {
  return (
    <div className="container-fluid main-container">
      <MainHeader />
      
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <Header />
          <div className="box-card">
            
            <Main />
            <Works />
          </div>
        </div>
      </div>
      
      <Contacts />
    </div>
  )};

export default MainF;