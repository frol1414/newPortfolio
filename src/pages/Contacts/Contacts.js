import React from "react";

import './Contacts.css'
import {NavLink} from "react-router-dom";
import alex from "../../images/Alex.svg";

const Contacts = props => {
  return (
    <main className="contacts">

      <div className="logo">
        <NavLink to="/" className="logo__title">Alexander Frolov</NavLink>
        <img src={alex} alt='Frolov Alexander'/>
      </div>

      <p className="page__title">Contacts</p>

      <div className="contacts-wrapper">
        <div className="contacts-phone yellow">
          <p>E-mail: <span>frol1414@gmail.com</span></p>
          <p>Phone: <span>+7(931)971-55-83</span></p>
          <a href='https://drive.google.com/drive/folders/1u-7bNbZAC-EPjc3TdYq6Z1utMMFe7FAV?usp=sharing' target='_blank'
             rel='noopener noreferrer'>Download CV</a>
        </div>

        <div className="contacts-socials blue">
          <a href="https://github.com/frol1414" target="_blank" rel="noopener noreferrer">Github</a>
          <a href="https://www.linkedin.com/in/alexander-frolov-a7976b163/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://www.facebook.com/profile.php?id=100015746163178" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.instagram.com/alexander._.frolov/" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </main>
  )};

export default Contacts;
