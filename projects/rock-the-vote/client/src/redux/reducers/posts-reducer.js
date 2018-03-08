// POSTS -- REDUCER
// ==============================

// IMPORT FROM PACKAGES
const axios = require("axios");

// VARIABLES
const postsUrl = "/posts/"

/////////////////////
// ACTION CREATORS //
/////////////////////

// GET POSTS
export const getPosts = () => {
    return dispatch => {
        axios.get(postsUrl)
            .then(response => {
                console.log("posts in axios request", response.data)
                dispatch(
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
                dispatch(
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
export const updatePost = (post, id) => {
    return dispatch => {
        axios.put(postsUrl + id, post)
            .then((response) => {
                dispatch(
                    {
                        type: "UPDATE_POST",
                        payload: response.data,
                        id
                    }
                )
            })
            .catch(err => {
                console.log(err)
            })
    }
}

// DELETE POST
export const deletePost = (id) => {
    return dispatch => {
        axios.delete(postsUrl + id, id)
            .then(response => {
                dispatch(
                    {
                        type: "DELETE_POST",
                        id
                    }
                )
            })
            .catch(err => {
                console.log(err)
            })
    }
}


/////////////
// REDUCER //
/////////////
const posts = (prevData = {loading: true, data: []}, action) => {
    switch(action.type) {
        case "GET_POSTS":
            return {
                loading: false,
                data: action.payload
            }
        ;
        case "POST_POST":
            return {
                ...prevData,
                data: [...prevData.data, action.payload]
            }
        ;
        case "UPDATE_POST":
            return {
                ...prevData,
                data: prevData.data.map((post) => {
                    if (post._id === action.id) {
                        return action.payload
                    } else {
                        return post
                    }
                })
            }
        ;
        case "DELETE_POST":
            return {
                ...prevData,
                data: prevData.data.filter(post => {
                    return post._id !== action.id
                })
            }
        ;
        default:
            return prevData
    }
}

// EXPORT
export default posts