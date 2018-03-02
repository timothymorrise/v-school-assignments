// BALLOTS REDUCER
// ==============================

/////////////////////
// ACTION CREATORS //
/////////////////////

// IMPORT FROM PACKAGES
const axios = require("axios");

// VARIABLES
const getBallotsUrl = "/ballots?awards_id="
const getBallotUrl = "/ballots?category_id="
const ballotsUrl = "/ballots/"
// GET BALLOTS
export const getBallots = (awardId) => {
    return dispatch => {
        axios.get(getBallotsUrl + awardId)
        .then(response => {
            dispatch (
                {
                    type: "GET_BALLOTS",
                    payload: response.data
                }
            )
        })
        .catch(err => {
            console.error(err)
        })
    }
}

// GET BALLOT
export const getBallot = (categoryId) => {
    return dispatch => {
        axios.get(getBallotUrl + categoryId)
        .then(response => {
            dispatch (
                {
                    type: "GET_BALLOT",
                    payload: response.data
                }
            )
        })
        .catch(err => {
            console.error(err)
        })
    }
}

// POST BALLOT
export const postBallot = (ballot) => {
    return dispatch => {
        axios.post(ballotsUrl, ballot)
        .then((response) => {
            console.log(response)
            dispatch({
                type: "POST_BALLOT",
                payload: response.data
            })
        })
        .catch(err => {
            console.error(err)
        })
    }
}

// PUT BALLOT
export const updateBallot = (ballot, id) => {
    return dispatch => {
        axios.put(ballotsUrl + id, ballot)
            .then((response) => {
                dispatch({
                    type: "UPDATE_ISSUE",
                    payload: response.data,
                    id
                })
            })
    }
}

// DELETE BALLOT
// to add later


//////////////
// REDUCER //
//////////////

const ballots = (prevData = { loadingMany: true, loadingSingle: true, data: [], currentBallot: {}}, action) => {
    switch(action.type) {
        case("GET_BALLOTS"):
            return {
                ...prevData,
                loading: false,
                data: action.payload 
            };
        case("GET_BALLOT"):
            return {
                ...prevData,
                loading: false,
                currentBallot: action.payload
            };
        case("POST_BALLOT"):
            return {
                loading: false,
                currentBallot: action.payload,
                data: [...prevData.data, action.payload]
            };
        case("UPDATE_BALLOT"):
            return {
                loading: false,
                currentBallot: action.payload
            }
        default:
            return prevData
    }
}

// EXPORTS
export default ballots