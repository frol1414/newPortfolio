import React from "react";

import './Footer.css';
import SocialLinks from "../../../../components/FrolovAlexander/SocialLinks/SocialLinks";

const Footer = () => (
  <div className="footer">
    <div className="footer-line"></div>
    <h2 className="footer-title">Alexander Frolov</h2>
    <div className="footer-contacts-container">
      <p>E-Mail: frol1414@gmail.com</p>
      <p>Phone: +7(931)971-55-83</p>
    </div>
    <div className="footer-socials">
      <SocialLinks/>
    </div>
    
  </div>
);

export default Footer;