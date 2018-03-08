// POSTS -- COMPONENT
// ==============================

// IMPORT FROM PACKAGES
import React, { Component } from 'react'
import { connect } from "react-redux"; 

// IMPORT FROM FILES
import PostForm from "./shared/PostForm";
import Post from "./Post";
import { getPosts } from "../../redux/reducers/posts-reducer"

// CONSTRUCTOR
class Posts extends Component {
    componentDidMount() {
        this.props.getPosts();
    }

    render() {
        let { posts } = this.props
        posts.sort((post1, post2) => {
            return post2.votes-post1.votes
        })
        let postComponents = posts.map(post => {
            return <div key={post._id}>
                <Post  {...post}/>
            </div>
        })
        return (
            <div>
                <PostForm add />
                {postComponents}
            </div>
        )
    }
}

// EXPORTS

const mapStateToProps = (state) => {
    return {
        posts: state.posts.data
    }
}
export default connect(mapStateToProps, { getPosts } )(Posts)