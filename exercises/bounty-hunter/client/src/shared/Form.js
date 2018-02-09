// FORM -- COMPONENT
// ==============================

// IMPORTS
import React, { Component } from 'react'

// CONSTRUCTOR 
class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            living: true,
            bountyAmount: "",
            type: ""
        }
    }
    
    render() {
        return (
            <form>
                <input type="text" />
                <input type="text"/>
                <h1>Living?</h1>
                <span>Alive</span><input type="radio"/>
                <span>Dead</span><input type="radio"/>
                <input type="text"/>
                <h1>Jedi/Sith?</h1>
                Jedi <input type="radio"/>
                Sith <input type="radio"/>
            </form>
        )
    }
}

// EXPORTS

export default Form