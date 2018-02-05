// APP - COMPONENT
// ------------------------------

// IMPORT FROM PACKAGES
import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

// IMPORT FROM FILES
import Sidebar from "./Sidebar";
import Character from "./Character";
import "./App.css"


export default class App extends Component {

    render() {
        return (
            <div className="page-wrapper">
                <Sidebar />
                <Switch>
                    <Route path="/:id" component={Character} />
                </Switch>
            </div>
        )
    }
}
