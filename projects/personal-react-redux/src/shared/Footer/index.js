// FOOTER -- COMPONENT
// ------------------------------

//IMPORT PACKAGES
import React, { Component } from 'react'

//IMPORT FILES
import "./Footer.css"

//CONSTRUCTOR
export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="footer-links">
                    <a className="footer-link" href="https://www.polygon.com/monster-factory" target="_blank">
                        MONSTER FACTORY
                    </a>
                    <a className="footer-link" href="https://twitter.com/cyberMormon" target="_blank">
                        TWITTER
                    </a>
                    <a className="footer-link" href="https://github.com/timothymorrise" target="_blank">
                        GITHUB
                    </a>
                    <a className="footer-link" href="http://keroberrycola.tumblr.com/" target="_blank">
                        art by kerroberrycola
                    </a>
                </div>
            </footer>
        )
    }
}
