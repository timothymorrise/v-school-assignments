import React, { Component } from 'react'
import {Link} from "react-router-dom"

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
            </div>
        )
    }
}
