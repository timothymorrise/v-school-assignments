// APP - COMPONENT
// ------------------------------

import React, { Component } from 'react';
import axios from "axios";

import Sidebar from "./Sidebar";
import CharacterSwitch from "./CharacterSwitch";

const swURL = "https://swapi.co/api/people/"

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <Sidebar />
                <CharacterSwitch />
            </div>
        )
    }
}
