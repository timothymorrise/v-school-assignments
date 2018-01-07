import React, { Component } from "react";
import Nav from "./Nav";
import Info from "./Info";
import List from "./List";
import Footer from "./Footer";

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
    let parentStyle = {
        backgroundColor: "fuschia"
    }
    return (
        <div className="app-wrapper">
            <Nav links={links} parentStyle={parentStyle} ></Nav>
            <h1>welcome to this sweet pea
        </h1>
            <h2>this true is {props.name}</h2>
        </div>
    )
}

export default App;