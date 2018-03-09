// SIDEBAR -- COMPONENT
// ==============================

// IMPORT FROM PACKAGES
import React from 'react'
import { Link } from "react-router-dom";

// IMPORT FROM FILES -- CSS
import "./Sidebar.css"

function Sidebar() {
    return (
        <aside>
            <Link to="/about-me">About Me</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/contact">Contact Me</Link>
        </aside>
    )
}

export default Sidebar
