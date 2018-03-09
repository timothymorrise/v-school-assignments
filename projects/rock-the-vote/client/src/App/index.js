// APP -- COMPONENT
// ==============================

// IMPORT FROM PACKAGES
import React, { Component } from 'react'

// IMPORT FROM FILES -- COMPONENTS, CSS
import Posts from "./Posts";
import "./App.css"

export default class App extends Component {
    render() {
        return (
            <div className="page-wrapper">
                <h1>ROCK THE VOTE</h1>
                <Posts />
            </div>
        )
    }
}
