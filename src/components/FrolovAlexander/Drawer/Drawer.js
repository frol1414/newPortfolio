import React, {Component} from "react";
import {CssBaseline, Typography, Button} from '@material-ui/core/';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHub from '@material-ui/icons/GitHub';

import './Drawer.css';

export default class Drawer extends Component {
  
  state = {
    links: [
      {id: 1, title: 'Обо мне'},
      {id: 2, title: 'Мои навыки'},
      {id: 3, title: 'Мои работы'},
      {id: 4, title: 'Контакты'},
    ],
    socialLinks: [
      {id: 1, title: 'LinkedIn', icon: <LinkedInIcon />, url: 'https://www.linkedin.com/in/alexander-frolov-a7976b163/'},
      {id: 2, title: 'GitHub', icon: <GitHub />, url: 'https://github.com/frol1414'},
    ]
  };
  
  renderLinks() {
    return this.state.links.map((link) => {
      return (
        <Button className="drawer-links-item" key={link.id}>
          {link.title}
        </Button>
      )
    })
  }
  
  renderSocialLinks() {
    return this.state.socialLinks.map((socialLink) => {
      return (
        <a href={socialLink.url} target="_blank" className="drawer-socialLinks-item" key={socialLink.id}>
          {socialLink.icon}
        </a>
      )
    })
  }
  
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Typography component="div" className="drawer-container">
          <Typography component="div" className="drawer-header">
            <h1>Logo</h1>
            <h2>Александр Фролов</h2>
            <h3>Front-end Developer</h3>
          </Typography>
          
          <Typography component="div" className="drawer-links">
            <div className="drawer-links-list">
              {this.renderLinks()}
            </div>
          </Typography>
  
          <Typography component="div" className="drawer-socialLinks">
            <div className="drawer-socialLinks-list">
              {this.renderSocialLinks()}
            </div>
          </Typography>
        </Typography>
        
        
      </React.Fragment>
    )
  }
}