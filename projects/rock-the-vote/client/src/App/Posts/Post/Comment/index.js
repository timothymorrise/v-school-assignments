// COMMENT -- COMPONENT
// ==============================

// IMPORT FROM PACKAGE
import React, { Component } from 'react';
import { connect } from "react-redux";

// IMPORT FROM FILES -- ACTION CREATORS, CSS
import "./Comment.css"
import { deleteComment } from "../../../../redux/reducers/comments-reducer";


class Comment extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let { _id } = this.props
        this.props.deleteComment(_id);
    }

    render() {
        let { text } = this.props
        return (
            <div className="comment">
                <p>{text}</p>
                <button onClick={this.handleClick}>Delete Comment</button>
            </div>
        )
    }
}

// EXPORT

export default connect(null, { deleteComment} )(Comment);
