import React from 'react'
import {NavLink} from "react-router-dom"
import './Nav.css';

export default function Nav() {
    return(
    <div className="d-flex justify-content-center mt-3  ">
        <NavLink to="/" className={({ isActive }) =>isActive ? "activenav" : "notactive"} >Home</NavLink>
        <NavLink className={({ isActive }) =>isActive ? "activenav" : "notactive"} to="/inscription">Inscription</NavLink>
    </div>)
}
