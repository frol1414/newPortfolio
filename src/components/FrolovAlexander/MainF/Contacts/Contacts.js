import React from "react";

import './Contacts.css';
import SocialLinks from "../../UI/SocialLinks/SocialLinks";

const Contacts = () => (
  <div className="contacts">
    <h2 className="contacts-title">Contacts</h2>
    <div className="contacts-container">
      <div className="contacts-logo">
        <h2>LOGO</h2>
      </div>
      
      <div className="contacts-email">
        <p>E-Mail: frol1414@gmail.com</p>
        <p>Phone: +7(931)971-55-83</p>
      </div>
      
      <div className="contacts-socials">
        <SocialLinks />
      </div>
    </div>
  </div>
);

export default Contacts;