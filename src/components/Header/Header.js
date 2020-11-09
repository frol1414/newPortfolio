import React from "react";
import {NavLink} from "react-router-dom";

import './Header.css'

const Header = props => {

  return (
    <header className="header">
      <div className="header-list">
        <NavLink to="/about" aria-label="About" className="header-list__item item-about">About</NavLink>
        <NavLink to="/works" aria-label="Works" className="header-list__item item-works">Works</NavLink>
        <NavLink to="/contacts" aria-label="Contacts" className="header-list__item item-contacts">Contacts</NavLink>
      </div>
    </header>
  )};

export default Header;
