import React, {Fragment} from 'react';
import {Switch, Route} from 'react-router-dom';
import MainPage from "./pages/MainPage/MainPage";
import AboutMe from "./pages/AboutMe/AboutMe";
import Works from "./pages/Works/Works";
import Header from "./components/Header/Header";

import './App.css';

function App() {
  return (
      <Fragment>
          <Header />
          <Switch>
              <Route path="/" component={MainPage} exact/>
              <Route path="/about" component={AboutMe} />
              <Route path="/works" component={Works} />
          </Switch>
      </Fragment>
  );
}

export default App;
