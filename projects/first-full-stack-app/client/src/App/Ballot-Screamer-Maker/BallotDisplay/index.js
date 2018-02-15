// BALLOT DISPLAY -- COMPONENT
// ==============================

// IMPORT FROM PACKAGES
import React, { Component } from 'react'


class BallotDisplay extends Component {
    render() {
        
        return (
            <div>
                

            </div>
        )
    }
}


// EXPORTS
const mapStateToProps = (state) => {
    return {
        categories: state.categories
    }
}

export default (BallotDisplay);