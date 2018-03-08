// APP -- COMPONENT
// ==============================

// IMPORT FROM PACKAGES
import React, { Component } from 'react'

// IMPORT FROM FILES
import Posts from "./Posts";

export default class App extends Component {
    render() {
        return (
            <div>
                <Posts />
            </div>
        )
    }
}
