// DATALIST REDUCER
// ------------------------------

// IMPORTS
const axios = require("axios");
let mfURL = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLaDrN74SfdT6duuVl_8qxJ5eaaPHRX_ij&key=AIzaSyDH4tQqeR1lvtY1z4ymh0wlFz3Ljpeo7xQ&maxResults=50"


// ACTION CREATORS
export let getVideos = () => {
    return dispatch => {
        axios.get(mfURL)
        .then(response => {
            dispatch (
                {type: "GET_VIDEOS",
                payload: response.data.items}
            )
        })
        .catch(err => {
            console.error(err)
        })
    }
} 

// REDUCER FUNCTIONS
let videoData = (prevDatalist = { loading: true, data: [] }, action) => {
    switch (action.type) {
        case "GET_VIDEOS":
            return { 
                loading: false,
                data: [...action.payload]
            };
   
        default:
            return prevDatalist
    }
}

// EXPORTS
export default videoData