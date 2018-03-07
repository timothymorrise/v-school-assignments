// POST -- COMPONENT
// ==============================

// IMPORT FROM PACKAGES
import React, { Component } from 'react'

// IMPORT FROM FILES


class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: "post"
        }
    }

    handleClick(e) {
        let { value } = e.target
    }

    render() {
        const form = () => {}

        return (
            <div>
                {/* <h2>{title}</h2> */}
                {/* <p>{description}</> */}
                <button onClick={this.handleClick} name="plus">+</button>
                <button onClick={this.handleClick} name="minus">-</button>
            </div>
        )
    }
}

// EXPORT
export default Post