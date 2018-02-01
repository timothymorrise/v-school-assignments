// STORE
// ------------------------------

// IMPORTS
import {createStore, combineReducers, applyMiddleware } from "redux"
import videoData from "./video-data"
import thunk from "redux-thunk"

// COMBINE REDUCERS
let store = createStore(combineReducers( { videoData } ), applyMiddleware(thunk))


// EXPORTS
export default store


