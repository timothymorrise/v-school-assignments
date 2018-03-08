// POST -- COMPONENT
// ==============================

// IMPORT FROM PACKAGES
import React, { Component } from 'react'
import { connect } from "react-redux";

// IMPORT FROM FILES
import { deletePost, updatePost } from "../../../redux/reducers/posts-reducer";
import Comment from "./Comment";
import CommentForm from "../shared/CommentForm";
import PostForm from "../shared/PostForm";
import "./Post.css";

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: "post"
        }
        this.handleClick = this.handleClick.bind(this);
        this.changeVote = this.changeVote.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
    }

    changeVote(increment) {
        let post = {
            votes: this.props.votes + increment
        }
        this.props.updatePost(post, this.props._id)
    }

    toggleEdit(input) {
        if (input === "post") {
            this.setState({ toggle: "form" })
        } else if (input === "form") {
            this.setState({ toggle: "post" })
        }
    }

    handleClick(e) {
        let { name } = e.target
        switch (name) {
            case "plus":
                this.changeVote(1)
                break;
            case "minus":
                this.changeVote(-1)
                break;
            case "edit-toggle":
                this.toggleEdit(this.state.toggle)
                break;
            case "delete":
                this.props.deletePost(this.props._id)
        }
    }

    render() {
        let { comments,
            description,
            _id,
            title,
            votes
         } = this.props
         console.log("comments check in post compoent", comments)
        let commentComponents = comments.map(comment => {
            return <div key={comment._id}>
                        <Comment {...comment} />
                    </div>
        })
        let component = (toggle) => {
            if (toggle === "post") {
                return <div className="post">
                    <h2>{title}</h2>
                    <h2>{votes}</h2>
                    <p>{description}</p>
                    <div>
                        <button onClick={this.handleClick} name="plus">+</button>
                        <button onClick={this.handleClick} name="minus">-</button>
                    </div>
                    <button onClick={this.handleClick} name="edit-toggle">Edit</button>
                    <button onClick={this.handleClick} name="delete">Delete</button>
                    <CommentForm id={_id} />
                    {commentComponents}
                </div>
            } else if (toggle === "form") {
                return <div>
                    <h3 className="post-edit-header">Edit comment: </h3>
                    <PostForm edit {...this.props} toggleEdit={this.toggleEdit} />
                    <CommentForm id={_id} />
                    {commentComponents}
                </div>

            }
        }
        return (
            <div>
                {component(this.state.toggle)}
            </div>
        )
    }
}

// EXPORT
export default connect(null, { deletePost, updatePost })(Post)