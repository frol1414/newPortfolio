import React from "react";

import Contacts from "../../../components/FrolovAlexander/Contacts/Contacts";
import Main from "./Main/Main";
import Works from "./Works/Works";

import './MainF.css'
import Header from "./Header/Header";

const MainF = () => {
  return (
    <React.Fragment>
      <section className="start-content">
        <div className="row">
          <div className="col-lg-12">
            <Header />
            <Main />
          </div>
        </div>
      </section>
      
      <Works />
      <Contacts />
      
    </React.Fragment>
  )};

export default MainF;