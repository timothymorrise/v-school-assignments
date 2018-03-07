// POSTS -- REDUCER
// ==============================

// IMPORT FROM PACKAGES
const axios = require("axios");

// VARIABLES
const postsUrl = "/posts"

/////////////////////
// ACTION CREATORS //
/////////////////////

// GET POSTS
export const getPosts = () => {
    return dispatch => {
        axios.get(postsUrl)
        .then(response => {
            dispatch (
                {
                    type: "GET_POSTS",
                    payload: response.data
                }
            )
        })
        .catch(err => {
            console.error(err)
        })
    }
}

// POST POST (yes I know it's redundant)
export const postPost = (post) => {
    return dispatch => {
        axios.post(postsUrl, post)
        .then(response => {
            dispatch (
                {
                    type: "POST_POST",
                    payload: response.data
                }
            )
        })
        .catch(err => {
            console.log(err)
        })
    }
}

// UPDATE POST
export const updatePost = () => {
    return dispatch => {
        axios.put(postsUrl + id, post)
            .then((response) => {
                dispatch({
                    type: "UPDATE_POST",
                    payload: response.data,
                    id
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}

// DELETE POST
export const deletePost = () => {
    return dispatch => {
        
    }
}


/////////////
// REDUCER //
/////////////
const posts = () => {

}

// EXPORT