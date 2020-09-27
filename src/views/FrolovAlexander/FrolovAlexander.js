import React from "react";
import {Switch, Route} from 'react-router-dom';
<<<<<<< HEAD
import MainF from "../../components/FrolovAlexander/MainF/MainF";
import AllMyWorks from "../../components/FrolovAlexander/AllMyWorks/AllMyWorks";
// import MainHeader from "../../components/FrolovAlexander/MainHeader/MainHeader";
=======
import MainF from "./MainF/MainF";
import AllMyWorks from "./AllMyWorks/AllMyWorks";
import About from "./About/About";
import OneWork from "./OneWork/OneWork";
>>>>>>> alternative-style
import './FrolovAlexander.css';

const FrolovAlexander = () => {

<<<<<<< HEAD
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
=======
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
>>>>>>> alternative-style
