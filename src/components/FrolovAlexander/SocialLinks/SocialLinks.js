import React from "react";

import './SocialLinks.css';

const SocialLinks = (props) => {
  
  const socialLinks = [
    {id: 1, title: 'GitHub', icon: 'fa fa-github', className: 'socialLinks-item git', url: 'https://github.com/frol1414'},
    {id: 2, title: 'LinkedIn', icon: 'fa fa-linkedin', className: 'socialLinks-item ln', url: 'https://www.linkedin.com/in/alexander-frolov-a7976b163/'},
    {id: 3, title: 'FacebookIcon', icon: 'fa fa-facebook', className: 'socialLinks-item fb', url: 'https://www.facebook.com/profile.php?id=100015746163178'},
    {id: 4, title: 'InstagramIcon', icon: 'fa fa-instagram', className: 'socialLinks-item ins', url: 'https://www.instagram.com/alexander._.frolov/'},
  ];
  
  return (
    <ul className="menu">
      {socialLinks.map((socialLink) => {
         return (
           <li key={socialLink.id}>
             <a href={socialLink.url} target="_blank" className={socialLink.className}>
               <i className={socialLink.icon}/>
             </a>
           </li>
         )
      }
    )}
    </ul>
  )};

export default SocialLinks;