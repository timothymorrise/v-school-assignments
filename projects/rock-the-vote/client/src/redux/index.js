// STORE
// ==============================

// IMPORTS 
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// IMPORT FROM FILE -- REDUCERS

// import posts from "./reducers/ballots-reducer"
// import comments from "./reducers/comments-reducer"

// CREATE STORE/COMBINE REDUCERS
let reducer = combineReducers( {} )

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);

// EXPORT
export default store