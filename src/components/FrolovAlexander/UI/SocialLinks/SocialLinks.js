import React from "react";

import './SocialLinks.css';

const SocialLinks = (props) => {
  
  const socialLinks = [
    {id: 1, title: 'GitHub', color: '', icon: 'fa fa-github', url: 'https://github.com/frol1414'},
    {id: 2, title: 'LinkedIn', color: '', icon: 'fa fa-linkedin', url: 'https://www.linkedin.com/in/alexander-frolov-a7976b163/'},
    {id: 3, title: 'FacebookIcon', color: 'fb-color', icon: 'fa fa-facebook', url: 'https://www.facebook.com/profile.php?id=100015746163178'},
    {id: 4, title: 'InstagramIcon', color: 'instagram-color', icon: 'fa fa-instagram', url: 'https://www.instagram.com/alexander._.frolov/'},
  ];
  
  return (
    <ul className="socialLinks-list menu">
      {socialLinks.map((socialLink) => {
         return (
           <li>
             <a href={socialLink.url} target="_blank" className={"socialLinks-item " + socialLink.color} key={socialLink.id}>
               <i className={socialLink.icon}/>
             </a>
           </li>
         )
      }
    )}
    </ul>
  )};

export default SocialLinks;