// SRC 
// ==============================

// IMPORT FROM PACKAGES
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "redux";
 
// IMPORT FROM FILES -- COMPONENTS
import App from "./App";

ReactDOM.render(
    <Provider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, document.getElementById("root")
)
