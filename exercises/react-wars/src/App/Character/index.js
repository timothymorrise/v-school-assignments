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
            loading: true
        }
        this.getStarWarMan = this.getStarWarMan.bind(this)
    }
    
    getStarWarMan() {
        let { id } = this.props.match.params
        axios.get(swURL + id)
        .then(response => {
            this.setState(
                {
                    person: response.data,
                    loading: false
                }
            )
        })
        .catch(err => {
            console.error(err)
        })
    }

    componentDidMount() {
        this.getStarWarMan();
    }

    componentWillReceiveProps(nextProps) {
        let { id } = this.props.match.params
        let { nextId } = nextProps.match.params
        if ( id !== nextId) {
            this.getStarWarMan();
        }
     }
    
    render() {
        console.log("jimmy")
        let { loading, person } = this.state
        let { name,
            height,
            hair_color,
            eye_color,
            gender
            } = person
        return (
            loading ?
            <div> Be patient ya ninny</div>
            :
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

