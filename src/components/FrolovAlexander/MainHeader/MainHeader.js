import React from "react";
import {NavLink} from "react-router-dom";

import './MainHeader.css';

const MainHeader = () => {

  return (
    <div className="row justify-content-center">
      <div className="col-lg-10">
        <div className="main-header-card box-card">
          <NavLink to="/Frolov-Alexander/" className="main-header-links-logo">
          <div className="main-header-logo">Alexander <span>Frolov</span></div>
          </NavLink>
          
          <div className="main-header-links">
            <NavLink to="/Frolov-Alexander/about" className="main-header-links-item">
              About
            </NavLink>
            <NavLink to="/Frolov-Alexander/all-my-works" className="main-header-links-item">
              Works
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainHeader