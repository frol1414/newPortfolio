import React from "react";
import {Switch, Route} from 'react-router-dom';

import MainF from "./MainF/MainF";
import AllMyWorks from "./AllMyWorks/AllMyWorks";
import About from "./About/About";
import OneWork from "./OneWork/OneWork";

import './FrolovAlexander.css';

const FrolovAlexander = () => {


  return (
     <Switch>
        <Route path="/Frolov-Alexander/all-my-works" exact component={AllMyWorks}/>
        <Route path="/Frolov-Alexander/all-my-works/:id" component={OneWork} />
        <Route path="/Frolov-Alexander/about" component={About} />
        <Route path="/" component={MainF} />
    </Switch>
  )
}
export  default FrolovAlexander

