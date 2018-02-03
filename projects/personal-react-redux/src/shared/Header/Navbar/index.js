// NAVBAR -- COMPONENT
// ------------------------------

// IMPORT FROM PACKAGES
import React, { Component } from 'react'
import { Link } from "react-router-dom";

// IMPORT FROM FILES
import "./Navbar.css"

export default class Navbar extends Component {
    render() {
        return (
            <nav>
                <Link to="/">Home</Link>
                <Link to="/videos">List</Link>
                <Link to="/about">About</Link>
            </nav>
        )
    }
}
