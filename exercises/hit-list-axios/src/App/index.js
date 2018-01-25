// APP - COMPONENT
// ------------------------------
import React from 'react'
import Header from "./Header"
import HitList from "./HitList"

import "./App.css"

function App() {
    return (
        <div className="page-wrapper">
            <Header />
            <HitList />
        </div>
    )
}

export default App
