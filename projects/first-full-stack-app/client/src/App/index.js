// APP -- COMPONENT 
// ==============================

// IMPORT FROM PACKAGES
import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

// IMPORT FROM FILES -- COMPONENTS/CSS
import Sidebar from "../shared/Sidebar"
import BallotScreamer from "./Ballot-Screamer-Maker"

// CONSTRUCTOR
export default class App extends Component {
    render() {
        return (
            <div>
                {/* HEADER */}
               <Sidebar />
                <Switch >
                    {/* ROUTE - HOME */}
                    {/* AWARDS SHOW */}
                    {/* AWARDS BALLOT */}
                    {/* USER PAGE */}
                    <Route path="/awards/:award_id/:category_num" component={BallotScreamer} />
                 </Switch>
                {/* FOOTER */}
            </div>
        )
    }
}
