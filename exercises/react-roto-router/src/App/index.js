// APP -- COMPONENT
// ------------------------------

import React from 'react';
import { Switch, Route } from "react-router-dom";
//GLOBAL COMPONENTS
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
// Page Components
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";

function App() {
    return (
        <div>
            <Header />
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/services" component={Services} />
            </Switch> 
            <Footer />
        </div>
    )
}

export default App
