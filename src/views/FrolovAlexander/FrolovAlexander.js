import React, {Component} from "react";
import {Switch, Route} from 'react-router-dom';
import Drawer from "../../components/FrolovAlexander/Drawer/Drawer";
import MainF from "../../components/FrolovAlexander/MainF/MainF";
import './FrolovAlexander.css';

export default class FrolovAlexander extends Component {
  render() {
    return (
      <React.Fragment>
        <Drawer/>
        <Switch>
          <Route path="/" component={MainF} />
        </Switch>
      </React.Fragment>
    )
  }
}