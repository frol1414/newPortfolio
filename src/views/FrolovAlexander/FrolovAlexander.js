import React, {Component} from "react";
import {Switch, Route} from 'react-router-dom';
import MainF from "../../components/FrolovAlexander/MainF/MainF";
import AllMyWorks from "../../components/FrolovAlexander/AllMyWorks/AllMyWorks";
// import MainHeader from "../../components/FrolovAlexander/MainHeader/MainHeader";
import './FrolovAlexander.css';


export default class FrolovAlexander extends Component {
  render() {
    return (
      <React.Fragment>
        {/*<MainHeader />*/}
        <Switch>
          <Route path="/Frolov-Alexander/all-my-works" component={AllMyWorks} />
          <Route path="/" component={MainF} />
        </Switch>
      </React.Fragment>
    )
  }
}