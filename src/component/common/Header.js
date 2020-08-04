import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () => {
    const activeStyle = {
        color: "orange"
    }

    return (
        <nav>
            <NavLink activeStyle={activeStyle} exact to="/">Top News</NavLink>
        </nav>
    )
}

export default Header;