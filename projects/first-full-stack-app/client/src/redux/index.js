// STORE
// ==============================

// IMPORTS 
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import blah blah blah from lalala

// CREATE STORE/COMBINE REDUCERS
let store = createStore(combineReducers( {} ), applyMiddleware(thunk));

// EXPORT
export default store
