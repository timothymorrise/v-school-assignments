// AWARDS - REDUCER
// ==============================

// IMPORT FROM PACKAGES
const axios = require("axios");

// VARIABLES
const awardsUrl = "/public/awards"

// ACTION CREATORS
export let getAwards = () => {
    return dispatch => {
        axios.get(awardsUrl)
        .then(response => {
            dispatch (
                {
                    type: "GET_AWARDS",
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
let awards = (prevDataList = { loading: true, data: [] }, action ) => {
    switch(action.type) {
        case "GET_AWARDS":
            return {
                loading: false,
                data: [...action.payload]
            };
        default:
            return prevDataList
    }
    
}

// EXPORTS
export default awards