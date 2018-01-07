import React, { Component } from 'react'

class Pet extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
                <li>
                    {this.props.pet.name} is a {this.props.pet.breed}
                </li>
        )
    }
}

export default Pet
