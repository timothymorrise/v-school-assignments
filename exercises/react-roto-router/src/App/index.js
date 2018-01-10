//App
import React from 'react'
import {Switch, Route} from "react-router-dom"

import Home from "../Home";
import Services from "./Services";
import Service from "./Services/Service";
import About from "../About";
import NavBar from "../About";


class componentName extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/services" component={Services} />
                </Switch>
            </div>
        )
    }
}

export default App
