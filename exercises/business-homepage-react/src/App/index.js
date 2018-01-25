//APP

import React, { Component } from "react";

import Nav from "./Nav";
import Info from "./Info";
import List from "./List";
import Footer from "./Footer";

import "./index.css"

function App(props) {
    let links = [
        {
            href: "/home",
            name: "Home"
        },
        {
            href: "/about",
            name: "About"
        },
        {
            href: "/contact",
            name: "Contact"
        }
    ];
    return (
        <div className="app-wrapper">
            <header>
                <h1>Welcome to {props.name}</h1>
                <Nav links={links} />
            </header>

            <Info />
            <List />
            <Footer />
        </div>
    )
}

export default App;