// APP -- COMPONENT
// ==============================

// IMPORT FROM PACKAGES
import React from 'react'
import { Switch, Route, Link } from "react-router-dom";

// IMPORT FROM FILES -- COMPONENTS, CSS
import Home from "./Home";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Resume from "./Resume";
import Contact from "./Contact";
import Sidebar from "./shared/Sidebar";
import "./App.css"

function App() {
    return (
        <div>
            <header>
                <h1><Link to="/">Timothy Morrise &mdash; Portfolio</Link></h1>
            </header>
            <div className="main-wrapper">
                <Sidebar />
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/projects" component={Projects}/>
                    <Route path="/about-me" component={AboutMe}/>
                    <Route path="/resume" component={Resume}/>
                    <Route path="/contact" component={Contact}/>
                </Switch>
            </div>
            <footer>
            </footer>

        </div>
    )
}

export default App

// GRAVY -- 
// ADD IMAGE LOAD FOR RIGHT CLICK
