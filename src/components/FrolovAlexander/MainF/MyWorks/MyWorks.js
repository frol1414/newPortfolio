import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import WorkBlock from "../../UI/WorkBlock/WorkBlock";
import posh from "../../../../images/FA/jobs/posh-mobile.jpg";
import apollo from "../../../../images/FA/jobs/apollo-mobile.jpg";
import fullApollo from "../../../../images/FA/jobs/apollo-img.jpg";
import portfolio from "../../../../images/FA/jobs/portfolio-mobile.jpg";

import './MyWorks.css';

export default class MyWorks extends Component {
  
  state = {
    works: [
      {title: '111111', stack: 'вамвам', image: posh, fullImage: fullApollo, url: ''},
      {title: '222222', stack: 'вамвам', image: apollo, fullImage: fullApollo, url: ''},
      {title: '333333', stack: 'вамвам', image: portfolio, fullImage: fullApollo, url: ''},
    ],
  };
  
  render () {
    return (
      <div className="my-works">
        <h2 className="my-works-title">My works</h2>
        <section className="my-works-container">
          <WorkBlock data={this.state.works[0]}/>
          <WorkBlock data={this.state.works[1]}/>
          <WorkBlock data={this.state.works[2]}/>
        </section>
        <section className="my-works-btn-block">
          <span />
          <NavLink to="/Frolov-Alexander/all-my-works" className="all-works-btn">All my works</NavLink>
          <span />
        </section>
      </div>
    )
  }

};

