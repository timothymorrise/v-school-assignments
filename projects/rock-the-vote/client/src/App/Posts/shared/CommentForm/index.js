// COMMENT FORM -- COMPONENT
// ==============================

// IMPORT FROM PACKAGES
import React, { Component } from 'react';
import { connect } from "react-redux";

// IMPORT FROM FILES
import "./CommentForm.css"
import { postComment } from "../../../../redux/reducers/comments-reducer";

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearInputs = this.clearInputs.bind(this);
    }
    
    handleChange(e) {
        let { value } = e.target
        this.setState( { text: value } );
    }

    handleSubmit(e) {
        e.preventDefault();
        let comment = { 
            text: this.state.text,
            post_id: this.props.id
         };
        this.props.postComment(comment);
        this.clearInputs();
    }

    clearInputs() {
        this.setState( { text: "" } );
    }

    render() {
        console.log("comment form props", this.props)
        let { text } = this.state
        return (
            <form onSubmit={this.handleSubmit} className="comment-form">
                <input 
                    onChange={this.handleChange}
                    type="text"
                    name="text" 
                    value={text} />
                <button>Add Comment</button>
            </form>
        )
    }
}

// EXPORTS
export default connect(null, { postComment })(CommentForm)