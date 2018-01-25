import React, { Component } from "react";
import FriendList from "./FriendList"

import "./index.css"

class App extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="app-wrapper">
                 <FriendList> </FriendList>      
            </div>
        )
    }
}

export default App