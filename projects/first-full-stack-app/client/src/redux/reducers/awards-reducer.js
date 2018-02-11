// AWARDS - REDUCER
// ==============================

// IMPORT FROM PACKAGES
const axios = require("axios");

// ACTION CREATORS
export let getCategories = () => {
    return dispatch => {
        axios.get("...")
        .then(response => {
            dispatch (
                {
                    type: "GET_...",
                    payload: response.data
                }
            )
        })
        .catch(err => {
            console.error(err)
        })
    }
}

// REDUCER FUNCTIONS
let categories = (prevDataList = { loading: true, data: [] }, action ) => {
    switch(action.type) {
        case "GET_...":
            return {
                loading: false,
                data: [...action.payload]
            }
    }
}

// EXPORTS
export default categories