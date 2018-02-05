// SRC
// ============================== 

// IMPORT FROM PACKAGES
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

// IMPORT FROM FILE
import App from "./App";

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
)