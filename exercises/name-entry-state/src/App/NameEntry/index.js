import React, { Component } from 'react'

import Form from "./Form"

export default class NameEntry extends Component {
    constructor(props) {
        super(props)
        this.state = {
            names: [],
            input: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearInput = this.clearInput.bind(this);
    }
    
    clearInput() {
        this.setState(() => {
            return {
                input: ""
            }
        })
    }
    
    handleSubmit(e) {
        console.log("jimmy")
        e.preventDefault();
        let { input } = this.state
        this.setState((prevState) => {
            return {
                names: [...prevState.names, input]
            }
        })
        console.log(this.state)
        this.clearInput()
        
    }
    handleChange(e) {
        let { value } = e.target
        this.setState({input: value})
    }
    
    

    render() {
        let { input } = this.state
        const generateList = 
            this.state.names.map((name, i) => {
                return <h2 key={i + name}>{name}</h2>
            })
        
        
        return (
            <div>
                <h1>{input}</h1>
                <Form handleSubmit={this.handleSubmit} 
                    handleChange={this.handleChange} 
                    nameEntryState={this.state} />
                {generateList}
            </div>
        )
    }
}