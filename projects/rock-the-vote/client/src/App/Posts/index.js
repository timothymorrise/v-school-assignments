// POSTS -- COMPONENT
// ==============================

// IMPORT FROM PACKAGES
import React, { Component } from 'react'
import { connect } from "react-redux"; 

// IMPORT FROM FILES
import PostForm from "./shared/PostForm";

// CONSTRUCTOR
class Posts extends Component {
    render() {
        return (
            <div>
                <PostForm />
            </div>
        )
    }
}

// EXPORTS

const mapStateToProps = () => {

}
export default connect(mapStateToProps, {} )(Posts)