// HIT -- COMPONENT
// ------------------------------
import React, { Component } from 'react'

import "./Hit.css"

export default class Hit extends Component {
    constructor(props) {
        super(props);

    }
    
    render() {
        let { name, image } = this.props.hitData
        console.log(this.props)
        return (
                <div style={{backgroundImage: `url(${image})` }}
                    className="hit">
                    <h1>{name}</h1>  
                </div>
            
        )
    }
}
