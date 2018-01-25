//NAVBAR
//-----------------------------------------

import React from 'react'

import "./Navbar.css"

function Navbar() {
    return (
        <nav>
            <h3>Start Bootstrap</h3>
            <div className="nav-links">
                <a href="#">HOME</a>
                <a href="#">ABOUT</a>
                <a href="#">SAMPLE POST</a>
                <a href="#">CONTACT</a>
            </div>
        </nav>
    )
}

export default Navbar
