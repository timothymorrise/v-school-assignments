//APP

import React from 'react'

import Header from "./Header";
import BlogList from "./BlogList";
import Footer from "./Footer";

import "./App.css"

function App() {
    return (
        <div class="page-wrapper">
            <Header />
            <BlogList />
            <Footer />
        </div>
    )
}

export default App
