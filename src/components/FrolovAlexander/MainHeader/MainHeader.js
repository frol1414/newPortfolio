import React, {Component} from "react";
import {NavLink} from "react-router-dom";

import './MainHeader.css';
// import SocialLinks from "../UI/SocialLinks/SocialLinks";
// import frontEndImg from "../../../images/FA/2.jpg";

export default class MainHeader extends Component {
  
  state = {
    links: [
      {id: 1, title: 'About me'},
      {id: 2, title: 'My works'},
    ],
  };
  
  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="main-header-card box-card">
            <NavLink to="/Frolov-Alexander/" className="main-header-links-logo">
            <div className="main-header-logo">Alexander <span>Frolov</span></div>
            </NavLink>
            
            <div className="main-header-links">
              <NavLink to="/Frolov-Alexander/about" className="main-header-links-item">
                About me
              </NavLink>
              <NavLink to="/Frolov-Alexander/all-my-works" className="main-header-links-item">
                My works
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    )
  }
}