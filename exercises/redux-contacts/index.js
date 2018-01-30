import redux from ("redux");

// REDUCERS
let names = (prevNames = [], action) => {
    switch(action) {
        default:
            return prevNames;
    }
}

// ACTION CREATORS

//add
// remove

// STORE
let { createStore, combineReducers } = redux 

let store = createStore(combineReducers({}));

store.subscribe(() => {
    console.log(store.getState());
})
// function calls