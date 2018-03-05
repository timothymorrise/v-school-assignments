// NOMINEES - REDUCER
// ==============================

// IMPORT FROM PACKAGES
const axios = require("axios");

// VARIABLES
const nomineesByCatUrl = "/public/nominees/?category_id="
const nomineesUrl = "/public/nominees/"
// ACTION CREATORS
export let getNominees = () => {
    return dispatch => {
        axios.get(nomineesUrl)
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

export let getSomeNominees = (id) => {
    return dispatch => { 
        axios.get(nomineesByCatUrl + id)
        .then(response => {
            dispatch(
                {
                    type: "GET_SOME_NOMINEES",
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
let nominees = (prevDataList = { loading: true, data: [], ballotData: [] }, action ) => {
    switch(action.type) {
        case "GET_SOME_NOMINEES":
            return {
                ...prevDataList,
                loading: false,
                ballotData: [...action.payload]
            };
        case "GET_NOMINEES":
            return {
                ...prevDataList,
                loading: false,
                data: [...action.payload]
            }
        default: 
            return prevDataList
    }
}

// EXPORTS
export default nominees