// CHARACTER -- COMPONENT
// ------------------------------

// IMPORT FROM PACKAGES
import React, { Component } from 'react'
import axios from "axios"

// VARIABLES
const swURL = "https://swapi.co/api/people/"

export default class Character extends Component {
    constructor(props) {
        super(props);
        this.state = {
            person: {},
        }
        this.getStarWarMan = this.getStarWarMan.bind(this)
    }
    
    getStarWarMan(id) {
        axios.get(swURL + id)
        .then(response => {
            this.setState(
                {
                    person: response.data,
                }
            )
        })
        .catch(err => {
            console.error(err)
        })
    }

    componentDidMount() {
        let { id } = this.props.match.params
        this.getStarWarMan(id);
    }

    componentWillReceiveProps(nextProps) {
        let { id } = this.props.match.params
        let nextId = nextProps.match.params.id
        console.log(`id: ${id} ---- next Id: ${nextId}`)
        if ( id !== nextId) {
            this.getStarWarMan(nextId);      
            }
        }
    
    render() {
        let { person } = this.state
        let { name,
            height,
            hair_color,
            eye_color,
            gender
            } = person
        return (
            <div>
                <h1>{name}</h1>
                <ul>
                    <li>{height}</li>
                    <li>{hair_color}</li>
                    <li>{eye_color}</li>
                    <li>{gender}</li>
                </ul>
            </div>
        )
    }
}

