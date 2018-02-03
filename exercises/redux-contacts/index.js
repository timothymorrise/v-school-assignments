// STORE
// ==============================

// IMPORT FROM PACKAGES
const { createStore, combineReducers } = require("redux");
    
// IMPORT FROM FILES
const {contactsReducer,
        addContact,
        removeContact } = require("./contacts-reducer")

// CREATE STORE/COMBINE REDUCERS
let store = createStore(combineReducers({ contactsReducer }));


store.subscribe(() => {
    console.log(store.getState());
})

// function calls
store.dispatch(addContact(
    {
        id: 0,
        name: "John",
        phone: "801-555-5555"
    }
));
store.dispatch(addContact(
    {
        id: 1,
        name: "Clarke",
    }
));
store.dispatch(addContact(
    {
        id: 2,
        name: "Jenny"
    }
));

store.dispatch(removeContact(1));