// POSTS -- COMPONENT
// ==============================

// IMPORT FROM PACKAGES
import React, { Component } from 'react'
import { connect } from "react-redux"; 

// IMPORT FROM FILES -- ACTION CREATORS, COMPONENT, CSS
import { getPosts } from "../../redux/reducers/posts-reducer";
import { getComments } from "../../redux/reducers/comments-reducer";
import PostForm from "./shared/PostForm";
import Post from "./Post";
import "./Posts.css";

// CONSTRUCTOR
class Posts extends Component {
    componentDidMount() {
        this.props.getPosts();
        this.props.getComments();
    }

    render() {
        let { posts, comments } = this.props
        console.log("comments in Posts", comments)
        posts.sort((post1, post2) => {
            return post2.votes-post1.votes
        });
        let postComponents = posts.map(post => {
            let filteredComments = comments.filter(comment => {
                return (comment.post_id === post._id)
            })
            return <div key={post._id}>
                <Post comments={filteredComments}  {...post}/>
            </div>
        })

        return (
            <div>
                <h2>Enter your post, mama: </h2>
                <PostForm add />
                <div className="posts-border"></div>
                {postComponents}
            </div>
        )
    }
}

// EXPORTS

const mapStateToProps = (state) => {
    return {
        posts: state.posts.data,
        comments: state.comments.data
    }
}
export default connect(mapStateToProps, { getPosts, getComments } )(Posts)