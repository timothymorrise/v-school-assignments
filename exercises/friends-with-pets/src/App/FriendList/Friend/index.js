import React, { Component } from 'react'
import Pet from "./Pet";


class Friend extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <h1>{this.props.friend.name}</h1>
                <h2>{this.props.friend.age}</h2>
                <ul>
                {this.props.friend.pets.map((pet) => {
                   return <Pet pet={pet}></Pet>
                })}
                </ul>
            </div>
        )
    }
}

export default Friend
