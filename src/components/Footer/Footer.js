import React from "react";
import './Footer.css'

const Footer = props => {

  return (
    <div className="footer">
        <a href='https://drive.google.com/drive/folders/1u-7bNbZAC-EPjc3TdYq6Z1utMMFe7FAV' target='_blank'
           rel='noopener noreferrer'>Download Resume</a>
        <p>&#169; Alexander Frolov, 2019-{(new Date()).getFullYear()}</p>

    </div>
  )};

export default Footer;
