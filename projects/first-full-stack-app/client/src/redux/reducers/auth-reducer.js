// AUTH - REDUCER
// ==============================

// IMPORT FROM PACKAGES
const axios = require("axios");

// VARIABLES
const authUrl = "/auth/signup"

// ACTION CREATORS
export const signup = (userInfo) => {
    return dispatch => {
        axios.post(authUrl, userInfo)
        .then(response => {
        })
        .catch(err => {
            console.error(err)
        })
    }
}

// REDUCERS