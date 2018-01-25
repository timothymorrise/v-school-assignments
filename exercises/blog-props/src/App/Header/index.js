//HEADER
//------------------------------
import React from 'react'

import Navbar from "./Navbar"

import "./Header.css"

function Header() {
    return (
        <header>
            <Navbar />
            <div className="header-titles">
                <h1>Clean Blog</h1>
                <h3>A Blog Theme by Start Bootstrap</h3>
                </div>
        </header>
    )
}

export default Header
