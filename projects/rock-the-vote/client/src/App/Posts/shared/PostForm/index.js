// POST FORM -- COMPONENT
// ==============================

// IMPORT FROM PACKAGES
import React, { Component } from 'react'
import { connect } from "react-redux"

// IMPORT FROM FILES
import "./PostForm.css";
import { postPost, updatePost } from "../../../../redux/reducers/posts-reducer"

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title || "",
            description: this.props.description || "",
            votes: this.props.votes || 0
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.clearInputs = this.clearInputs.bind(this)
    }
    
    handleSubmit(e) {
        e.preventDefault();
        let { add, edit, _id } = this.props
        let post = {
            title: this.state.title,
            description: this.state.description,
            votes: this.state.votes
        }
        if (add) {
          this.props.postPost(post);  
        }
        if (edit) {
            this.props.updatePost(post, _id)
            this.props.toggleEdit("form")
        }
        this.clearInputs();


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

    clearInputs() {
        this.setState(
            {
                title: this.props.title || "",
                description: this.props.description || "",
                votes: this.props.votes || 0
            }
        )
    }

    render() {
        let { title, description } = this.state
        console.log("post form props check", this.props)
        return (
            <form className="post-form" onSubmit={this.handleSubmit}>
                <h2>Enter your post</h2>
               <input onChange={this.handleChange} 
                className="post-form-title"
                value={title} 
                name="title" 
                type="text" 
                placeholder="Title of your post" 
                /> 
               <input onChange={this.handleChange} 
               className="post-form-description"
               value={description} 
               name="description" 
               type="text"
               placeholder="Post a description of your issue" 
               /> 
               <h3></h3>
                <button>SUBMIT POST</button>
            </form>
        )
    }
}

export default connect(null, {postPost, updatePost})(PostForm)