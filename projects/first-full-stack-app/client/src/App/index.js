// APP -- COMPONENT 
// ==============================

// IMPORT FROM PACKAGES
import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

// IMPORT FROM FILES -- COMPONENTS/CSS
import Header from "./Header"
import Sidebar from "../shared/Sidebar"
import BallotScreamer from "./Ballot-Screamer-Maker"
import "./App.css"

// CONSTRUCTOR
export default class App extends Component {
    render() {
        return (
            <div>
            <Header />
            <main>
               <Sidebar />
                <Switch >
                    {/* ROUTE - HOME */}
                    {/* AWARDS SHOW */}
                    {/* AWARDS BALLOT */}
                    {/* USER PAGE */}
                    <Route path="/awards/:award_id/:category_num" component={BallotScreamer} />
                 </Switch>
            </main>
                {/* FOOTER */}
            </div>
        )
    }
}

// GRAVY
// user auth
// restructure data to include award ids on nominees
// allow for restrictive use of paths 
// shore up security on server end