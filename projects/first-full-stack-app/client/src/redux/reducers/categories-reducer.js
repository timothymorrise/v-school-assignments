// CATEGORIES - REDUCER
// ==============================

// IMPORT FROM PACKAGES
const axios = require("axios");

// VARIABLES
const categoriesUrl = "/public/categories/?award_show_id="

// ACTION CREATORS
export let getCategories = (id) => {
    return dispatch => {
        axios.get(categoriesUrl + id)
        .then(response => {
            dispatch (
                {
                    type: "GET_CATEGORIES",
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
        case "GET_CATEGORIES":
            return {
                loading: false,
                data: [...action.payload]
            };
        default:
            return prevDataList
    }
}

// EXPORTS
export default categories