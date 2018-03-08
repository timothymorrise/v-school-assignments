// COMMENTS -- REDUCER
// ==============================

// IMPORT FROM PACKAGES
const axios = require("axios");

// VARIABLES
const commentsUrl = "/comments/"

/////////////////////
// ACTION CREATORS //
/////////////////////

// GET COMMENTS
export const getComments = () => {
    return dispatch => {
        axios.get(commentsUrl)
            .then(response => {
                dispatch(
                    {
                        type: "GET_COMMENTS",
                        payload: response.data
                    }
                )
            })
            .catch(err => {
                console.error(err)
            })
    }
}

// POST COMMENTS
export const postComment = (comment) => {
    return dispatch => {
        axios.post(commentsUrl, comment)
            .then(response => {
                dispatch(
                    {
                        type: "POST_COMMENT",
                        payload: response.data
                    }
                )
            })
            .catch(err => {
                console.error(err)
            })
    }
}

// DELETE COMMENT
export const deleteComment = (id) => {
    return dispatch => {
        axios.delete(commentsUrl + id, id)
            .then(response => {
                dispatch(
                    {
                        type: "DELETE_COMMENT",
                        id
                    }
                )
            })
            .catch(err => {
                console.error(err)
            })
    }
}

/////////////
// REDUCER //
/////////////
const comments = (prevData = { loading: true, data: [] }, action) => {
    switch (action.type) {
        case "GET_COMMENTS":
            return {
                loading: false,
                data: action.payload
            }
                ;
        case "POST_COMMENT":
            return {
                ...prevData,
                data: [...prevData.data, action.payload]
            }
                ;
        case "DELETE_COMMENT":
            console.log("firing in reducer switch")
            return {
                ...prevData,
                data: prevData.data.filter(comment => {
                    return comment._id !== action.id
                })
            }
                ;
        default:
            return prevData
    }
}

// EXPORT
export default comments