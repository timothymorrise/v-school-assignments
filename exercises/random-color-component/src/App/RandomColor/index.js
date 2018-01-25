//RANDOM COLOR -- COMPONENT

import React, { Component } from 'react'

import "./RandomColor.css"

import axios from "axios"

const rdmClrURL = "http://www.colr.org/json/color/random"

export default class RandomColor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: ""
        }
    }
   
    componentDidMount() {
        axios.get(rdmClrURL)
        .then((response) => {
            console.log(response.data)
            let { new_color } = response.data
            this.setState({color: new_color})
        })
        .catch((err) => {
            console.log(err)
        })
    }
    

    render() {
        let { color } = this.state
        return (
            <div className="random-color" style={{backgroundColor: `#${color}`}}>
            </div>
        )
    }
}
