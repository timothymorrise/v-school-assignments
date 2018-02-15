// STORE
// ==============================

// IMPORTS 
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// IMPORT FROM FILE -- REDUCERS
import awards from "./reducers/awards-reducer"
import categories from "./reducers/categories-reducer"
import nominees from "./reducers/nominees-reducer"
// import ballots from "./reducers/ballots-reducer"


// CREATE STORE/COMBINE REDUCERS
let store = createStore(combineReducers( {awards, categories, nominees} ), applyMiddleware(thunk));

// EXPORT
export default store
