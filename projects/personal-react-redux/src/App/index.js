// APP -- COMPONENT
// ------------------------------

//PACKAGES
import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom"
import axios from "axios";

//COMPONENTS
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import Home from "./Home";
import List from "./List";
import About from "./About";
import VideoPage from "./VideoPage";


//CSS
import "./App.css"


let mfURL = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLaDrN74SfdT6duuVl_8qxJ5eaaPHRX_ij&key=AIzaSyDH4tQqeR1lvtY1z4ymh0wlFz3Ljpeo7xQ&maxResults=50"

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videoData: [],
            loading: true
        }
    }

    componentDidMount() {
        
    }

    render() {
        let { videoData, loading } = this.state
        return (
            loading ?
                <div> loading </div>
                :
                <div>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Route path="/list" render={(routeProps) => (
                            <List {...routeProps} />
                        )}>
                        </Route>
                        <Route path="/about" component={About}></Route>
                    </Switch>
                    <Footer />
                </div>
        )
    }
}
