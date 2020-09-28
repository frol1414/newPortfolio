import React from "react";
import {NavLink} from "react-router-dom";
import "./Header.css";

const Header = () => (
    <div>
        <h1>Header</h1>
        <NavLink to={'/Frolov-Alexander'} label="Frolov Alexander">Frolov Alex</NavLink>
        <NavLink to={'/Frolova-Alexandra'} label="Frolova Alexandra">Frolova Alexandra</NavLink>
    </div>
)

export default Header