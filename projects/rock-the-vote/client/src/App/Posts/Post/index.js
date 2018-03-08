// POST -- COMPONENT
// ==============================

// IMPORT FROM PACKAGES
import React, { Component } from 'react'
import { connect } from "react-redux";

// IMPORT FROM FILES
import { deletePost } from "../../../redux/reducers/posts-reducer";
import PostForm from "../shared/PostForm"
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
        if (name === "plus") {
            this.changeVote(1)
        } else if (name === "minus") {
            this.changeVote(-1)
        } else if (name === "edit-toggle") {
            console.log("click handle working")
            this.toggleEdit(this.state.toggle)
        } else if (name === "delete") {
            this.props.deletePost(this.props._id)
        }
    }

    render() {
        let { title, description, votes } = this.props
        const form = () => { }
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
                </div>
            } else if (toggle === "form") {
                return <div>
                    TELL US ABOUT IT JANET
                    <PostForm edit {...this.props} toggleEdit={this.toggleEdit} />
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
export default connect(null, { deletePost })(Post)