// SRC
// ==============================

// IMPORT FROM PACKAGES
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux"

// IMPORT FROM FILES
import App from "./App"

ReactDOM.render(
    <Provider>
        <App />
    </Provider>, document.getElementById("root")
)