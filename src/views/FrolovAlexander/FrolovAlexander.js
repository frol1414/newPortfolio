import React, {Component} from "react";
import {Switch, Route} from 'react-router-dom';
import MainF from "./MainF/MainF";
import AllMyWorks from "./AllMyWorks/AllMyWorks";
import './FrolovAlexander.css';
import About from "./About/About";


export default class FrolovAlexander extends Component {
  render() {
    return (
      <Switch>
        <Route path="/Frolov-Alexander/all-my-works" component={AllMyWorks} />
        <Route path="/Frolov-Alexander/about" component={About} />
        <Route path="/" component={MainF} />
      </Switch>
    )
  }
}