// ABOUT -- COMPONENT
// ------------------------------

// IMPORT FROM PACKAGES
import React, { Component } from 'react'

// IMPORT FROM FILES - CSS
import "./About.css"

export default class About extends Component {
    render() {
        return (
            <main >
                <div className="about" >
                    <p>
                        This little App was started as a dream and ended as nightmare.
                    </p>
                    <p> It was created by finagler of miscellany and hodgepodge, Timothy Morrise. Front End used the React and Redux framework.
                        {/* insert link to bio later */}
                        
                    </p>
                    <p> Data from The Youtube API, may she bless always, our lord and master, in the name of the algorithm, the layout and the media experience, Amen.</p>
                </div>
            </main>
        )
    }
}
