// APP -- COMPONENT
// ==============================

// IMPORT FROM PACKAGES
import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

// IMPORT FROM FILE


export default class App extends Component {
    render() {
        return (
            <div>
                <Form />
                {/* DROPDOWN AND BUTTON */}
                <Switch>
                    <Route path="/:id" component="" />
                </Switch>
                
            </div>
        )
    }
}
