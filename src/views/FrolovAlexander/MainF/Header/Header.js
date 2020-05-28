import React from "react";
import './Header.css';
import {NavLink} from "react-router-dom";

const Header = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-lg-10">
        <div className="header-card">
          <NavLink to="/Frolov-Alexander/" className="header-links-logo">
            <div className="header-logo">Alexander <span>Frolov</span></div>
          </NavLink>
        
          <div className="header-links">
            <NavLink to="/Frolov-Alexander/about" className="header-links-item">
              About
            </NavLink>
            <NavLink to="/Frolov-Alexander/all-my-works" className="header-links-item">
              Works
            </NavLink>
          </div>
        </div>
      </div>
    </div>
)};

export default Header;