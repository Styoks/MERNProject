import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import './NavLinks.css'

const NavLinks = props => {
    return <ul className="nav-links">
        <li>
            <NavLink to="/" exact>All Users</NavLink>
        </li>
        <li>
            <NavLink to="/c1/places">All Places</NavLink>
        </li>
        <li>
            <NavLink to="/places/new">Add Place</NavLink>
        </li>
        <li>
            <NavLink to="/auth">Authenticate</NavLink>
        </li>
    </ul>
}

export default NavLinks