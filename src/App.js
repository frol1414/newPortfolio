import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import About from "./pages/About/About";
import Works from "./pages/Works/Works";
import OneWork from "./pages/OneWork/OneWork";
import Contacts from "./pages/Contacts/Contacts";

import './App.css';

function App() {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/about" component={About} />
        <Route path="/works" component={Works} />
        <Route path="/work/:id" component={OneWork} />
        <Route path="/contacts" component={Contacts} />
      </Switch>
    </div>
  );
}

export default App;
