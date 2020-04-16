import React from 'react';
import {Switch, Route} from 'react-router-dom';
import MainPage from './views/MainPage/MainPage';
import FrolovAlexander from "./views/FrolovAlexander/FrolovAlexander";
import './App.css';

function App() {
  return (
    <Switch>
      <Route path="/Frolov-Alexander" component={FrolovAlexander} />
      <Route path="/" component={MainPage} />
    </Switch>
  );
}

export default App;
