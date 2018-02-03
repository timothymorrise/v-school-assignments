// HEADER -- COMPONENT
// ------------------------------

// IMPORT FROM PACKAGES
import React, { Component } from 'react'

// IMPORT FROM FILES -- CHILD COMPONENTS // CSS FILES
import Navbar from "./Navbar";
import "./Header.css"

export default class Header extends Component {
    render() {
        return (
            <header>

                <img src="https://cdn.vox-cdn.com/thumbor/LNU6GLJkGZmbP69EnSFPVsVp7Ws=/1600x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/3894832/CKac3EMUwAAhdQ-.0.png" />

                <div className="header-words">
                    <h1 className="header-title">The Monster Factory Boy Counting Experience</h1>
                    <Navbar />
                </div>

            </header>
        )
    }
}
