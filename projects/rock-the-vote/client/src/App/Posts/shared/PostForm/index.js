// POST FORM -- COMPONENT
// ==============================

import React, { Component } from 'react'

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            votes: 0
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(e) {
        let { value, name } = e.target
        this.setState(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    render() {
        let { title, description } = this.state
        return (
            <form>
                test
               <input onChange={this.handleChange} value={title} name="title" type="text"/> 
               <input onChange={this.handleChange} value={description} name="description" type="text"/> 
               <h3></h3>
            </form>
        )
    }
}

export default PostForm