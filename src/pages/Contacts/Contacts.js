import React from "react";

import './Contacts.css'
import {NavLink} from "react-router-dom";
import alex from "../../images/Alex.svg";

const Contacts = props => {
  return (
    <div className="contacts">
      
      <div className="logo">
        <NavLink to="/" className="logo__title">Alexander Frolov</NavLink>
        <img src={alex} alt='Frolov Alexander'/>
      </div>
      
      <p className="page__title">Contacts</p>
      
      <div className="contacts-wrapper">
        <div className="contacts-phone yellow">
          <p>E-mail: <span>frol1414@gmail.com</span></p>
          <p>Phone: <span>+7(931)971-55-83</span></p>
        </div>
        
        <div className="contacts-socials blue">
          <a href="https://github.com/frol1414">Github</a>
          <a href="https://www.linkedin.com/in/alexander-frolov-a7976b163/">LinkedIn</a>
          <a href="https://www.facebook.com/profile.php?id=100015746163178">Facebook</a>
          <a href="https://www.instagram.com/alexander._.frolov/">Instagram</a>
        </div>
      </div>
    </div>
  )};

export default Contacts;