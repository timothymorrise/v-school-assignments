// NOMINEES - REDUCER
// ==============================

// IMPORT FROM PACKAGES
const axios = require("axios");

// VARIABLES
const nomineesUrl = "/public/nominees/?category_id="

// ACTION CREATORS
export let getNominees = (id) => {
    return dispatch => {
        axios.get(nomineesUrl + id)
        .then(response => {
            dispatch(
                {
                    type: "GET_NOMINEES",
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
let nominees = (prevDataList = { loading: true, data: [] }, action ) => {
    switch(action.type) {
        case "GET_NOMINEES":
            return {
                loading: false,
                data: [...action.payload]
            };
        default: 
            return prevDataList
    }
}

// EXPORTS
export default nominees