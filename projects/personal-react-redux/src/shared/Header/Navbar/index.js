// NAVBAR -- COMPONENT
// ------------------------------

import React, { Component } from 'react'
import { Link } from "react-router-dom";

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
