// SIDEBAR
// ==============================

//IMPORT FROM PACKAGES
import React, { Component } from 'react'
import axios from "axios"

// VALUES
const swURL = "https://swapi.co/api/people/"

export default class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: true
        }
    }
    
    componentDidMount() {
        axios.get(swURL)
        .then(response => {
            this.setState(
                {
                    data: response,
                    loading: false
                }
            )
        })
        .catch(err => {
            console.error(err)
        })
    }
    

    render() {
        return (
            <aside>
             sidebar test   
            </aside>
        )
    }
}
