// SIDEBAR
// ==============================

//IMPORT FROM PACKAGES
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

// IMPORT FROM FILES -- CSS
import "./Sidebar.css"

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
                    data: response.data.results,
                    loading: false
                }
            )
        })
        .catch(err => {
            console.error(err)
        })
    }
    

    render() {
        
        // DECONSTRUCTIONS
        let { loading, data } = this.state
        const generateLinks = data.map((person, index) => {
                let { name } = person
                let id = index + 1
                return <Link
                    to={`/${id}`}
                    key={id + name}>{name}
                    </Link>
            })

        return (
            loading ?
            <div>be patient, Debra!</div>
            :
            <aside>
                {generateLinks} 
            </aside>
        )
    }
}
