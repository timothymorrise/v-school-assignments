// BOUNTIES -- REDUCER
// ===========================-==

// REDUCER FUNCTION
const bountiesReducer = (data = [], action) => {
    switch (action.type) {
        case "ADD_BOUNTY":
            return ;
        case "DELETE_BOUNTY":
            return ;
        case "UPDATE_BOUNTY":
            return ;
        default:
            return data
    }
}

// ACTION CREATORS
const addBounty = (newBounty) => {
    return {
        type: "ADD_BOUNTY",
        newBounty
    }
}

const deleteBounty = (id) => {
    return {
        type: "DELETE_BOUNTY",
        id
    }
}

const updateBounty = (updatedBounty, id) => {
    return {
        type: "UPDATED_BOUNTY",
        updatedBounty,
        id
    }
}
// EXPORTS
