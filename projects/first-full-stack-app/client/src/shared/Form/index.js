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
const mapStateToProps = () => {

}

export default connect(mapStateToProps, {  } )(Form)