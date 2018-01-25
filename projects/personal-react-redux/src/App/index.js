// APP -- COMPONENT
// ------------------------------

import React, { Component } from 'react'
import { Switch, Route } from "react-router"


export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                SWITCH
                {/* Switch */}
                <Footer />
            </div>
        )
    }
}
