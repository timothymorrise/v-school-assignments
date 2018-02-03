// CHARACTER -- COMPONENT
// ------------------------------
import React, { Component } from 'react'

export default class Character extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
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
            <div>
                
            </div>
        )
    }
}

