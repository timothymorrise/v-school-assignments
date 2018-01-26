// APP -- COMPONENT
// ------------------------------

//PACKAGES
import React, { Component } from 'react'
import { Switch, Route } from "react-router"
import axios from "axios";

//COMPONENTS
import Header from "../shared/Header";
import Footer from "../shared/Footer";


let mfURL = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLaDrN74SfdT6duuVl_8qxJ5eaaPHRX_ij&key=AIzaSyDH4tQqeR1lvtY1z4ymh0wlFz3Ljpeo7xQ&maxResults=50"

export default class App extends Component {
    // constructor(props) {
    //     super(props);

    // }
    
    componentDidMount() {
        axios.get(mfURL)
        .then()
        .catch()
    }
    
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
