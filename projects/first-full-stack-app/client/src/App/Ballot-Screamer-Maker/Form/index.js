// FORM -- COMPONENT
// ==============================

// IMPORT FROM PACKAGES
import React, { Component } from 'react'
import { connect } from "react-redux";

// CONSTRUCTOR
class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(e) {
        let { value, name } = e.target
        this.setState(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    // call the nominees using the order number from the categories, pass that into a parameters.
    
    render() {
// generateInputs = nominees.map(nominee => {
        // <h1>nominee.name</h1>
        // <input onChange={this.setState} type="radio" name="nominee.name" value=""/>
    // })
        return (
            <form>
                
            </form>
        )
    }
}

// EXPORTS
const mapStateToProps = (state) => {
    return {
        categories: state.categories,
        nominees: state.nominees,
        ballots: state.ballots       
    }
}

export default connect(null, {  } )(Form)