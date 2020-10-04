import React from "react";
import {NavLink} from "react-router-dom";

import './Header.css'
import burger from "../../images/burger.svg";

const Header = props => {
  
  return (
    <div className="header">
      <img className="header__btn" src={burger} alt='burger'/>
      {/*<svg className="header__btn" width="32" height="21" viewBox="0 0 32 21" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
      {/*  <path d="M2 2H29.4615" stroke="white" strokeWidth="3.92308" strokeMiterlimit="10" strokeLinecap="round"/>*/}
      {/*  <path d="M2 10.5H29.4615" stroke="white" strokeWidth="3.92308" strokeMiterlimit="10" strokeLinecap="round"/>*/}
      {/*  <path d="M2 19H29.4615" stroke="white" strokeWidth="3.92308" strokeMiterlimit="10" strokeLinecap="round"/>*/}
      {/*</svg>*/}
  
      <div className="header-list">
        <NavLink to="/about" className="header-list__item">About</NavLink>
        <NavLink to="/works" className="header-list__item">Works</NavLink>
        <NavLink to="/contacts" className="header-list__item">Contacts</NavLink>
      </div>
    </div>
  )};

export default Header;
