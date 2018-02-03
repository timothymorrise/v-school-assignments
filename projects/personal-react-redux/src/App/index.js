// APP -- COMPONENT
// ------------------------------

//IMPORT FROM PACKAGES
import React, { Component } from 'react'
import { Switch, Route, withRouter } from "react-router-dom"
import { connect } from "react-redux";


//IMPORT FROM LOCAL FILES
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import Home from "./Home";
import List from "./List";
import About from "./About";
import VideoPage from "./VideoPage";
import "./App.css"
import { getVideos } from "../redux/video-data.js"

class App extends Component {

    componentDidMount() {
        this.props.getVideos();
    }
    
    render() {
        return (
                <div className="page-wrapper">
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/videos" component={List} />
                        <Route path="/about" component={About} />
                        <Route path="/videos/:id" component={VideoPage} />
                    </Switch>
                    <Footer />
                </div>
        )
    }
}


export default withRouter(connect(null, { getVideos })(App));
