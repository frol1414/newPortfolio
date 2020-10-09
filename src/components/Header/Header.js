import React from "react";
import {NavLink} from "react-router-dom";

import './Header.css'

const Header = props => {
  
  return (
    <div className="header">
      <div className="header-list">
        <NavLink to="/about" className="header-list__item item-about">About</NavLink>
        <NavLink to="/works" className="header-list__item item-works">Works</NavLink>
        <NavLink to="/contacts" className="header-list__item item-contacts">Contacts</NavLink>
      </div>
    </div>
  )};

export default Header;
