import React from "react";
import {NavLink} from "react-router-dom";
import './MainPage.css';

const MainPage = props => (
  <div>
    <h1>MainPage</h1>
    <NavLink to={'/Frolov-Alexander'} label="Frolov Alexander">Frolov Alex</NavLink>
    <NavLink to={'/Frolova-Alexandra'} label="Frolova Alexandra">Frolova Alexandra</NavLink>
  </div>
);

export default MainPage;