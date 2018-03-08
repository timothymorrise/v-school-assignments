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
        dispatch({ type: "RESET_LOADING_BALLOTS" })
        axios.get(getBallotsUrl + awardId)
            .then(response => {
                dispatch(
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
    console.log("searching with this id", categoryId)
    return dispatch => {
        dispatch({ type: "RESET_LOADING_BALLOT" });
        axios.get(getBallotUrl + categoryId)
            .then(response => {
                let data = response.data[0]
                if (data === undefined) {
                    data = null
                }
                dispatch(
                    {
                        type: "GET_BALLOT",
                        payload: data
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
                dispatch(
                    {
                        type: "POST_BALLOT",
                        payload: response.data
                    }
                )
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
                    type: "UPDATE_POST",
                    payload: response.data,
                    id
                })
            })
    }
}

// DELETE BALLOT
// to add later
// {
//     predicted: "",
//     }

//////////////
// REDUCER //
//////////////

const ballots = (prevData = { loadingMany: true, loadingSingle: true, data: [], currentBallot: {} }, action) => {
    switch (action.type) {
        case "RESET_LOADING_BALLOT":
            return {
                ...prevData,
                loadingSingle: true
            };
        case "RESET_LOADING_BALLOTS":
            return {
                ...prevData,
                data: [],
                loadingMany: true
            };
        case "GET_BALLOTS":
            return {
                ...prevData,
                loadingMany: false,
                data: action.payload
            };
        case "GET_BALLOT":
            return {
                ...prevData,
                loadingSingle: false,
                currentBallot: action.payload
            };
        case "POST_BALLOT":
            return {
                loadingSingle: false,
                currentBallot: action.payload,
                data: [...prevData.data, action.payload]
            };
        case "UPDATE_BALLOT":
            return {
                loading: false,
                currentBallot: action.payload,
                data: prevData.data.map((ballot) => {
                    if (ballot._id === action.id) {
                        return action.payload
                    } else {
                        return ballot
                    }
                })
            }
        default:
            return prevData
    }
}

// EXPORTS
export default ballots