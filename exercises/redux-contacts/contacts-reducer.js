// CONTACTS REDUCER
// ==============================

// REDUCERS
let contactsReducer = (prevNames = [], action) => {
        console.log("magic")
    switch(action.type) {
        case "ADD_CONTACT":
            console.log("jerry")
            return [...prevNames, action.payload];
        case "REMOVE_CONTACT":
            let newNames = [...prevNames]
            return newNames.filter(contact => {
                return action.id !== contact.id
            });
        default:
            return prevNames;
    }
}

// ACTION CREATORS

let addContact = (newContact) => {
    return {
        type: "ADD_CONTACT",
        payload: newContact
    }
}

let removeContact = (id) => {
   return {
        type: "REMOVE_CONTACT",
        id
    }
}

// EXPORTS
module.exports = { contactsReducer, addContact, removeContact }
