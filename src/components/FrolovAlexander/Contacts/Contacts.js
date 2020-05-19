import React from "react";

import './Contacts.css';
import SocialLinks from "../SocialLinks/SocialLinks";
// import aboutMeImg from "../../../../images/FA/111.jpg";

const Contacts = () => (
  <div className="row justify-content-center contacts">
    <div className="col-lg-10 text-center">
      <h3 className="block-title">Contacts</h3>
      <section className="contacts-container box-card">
        
        <span className="limiter"></span>
  
        <div className="contacts-block">
          <p>E-Mail: frol1414@gmail.com</p>
          <p>Phone: +7(931)971-55-83</p>
          <SocialLinks />
        </div>
      </section>
    </div>
  </div>
);

export default Contacts;