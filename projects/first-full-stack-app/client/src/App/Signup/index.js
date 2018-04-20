// SIGN UP -- COMPONENT
// ==============================

// IMPORT FROM PACKAGES
import React, {Component} from "react"

// IMPORT FROM FILES

// CONSTRUCTOR
class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                name: "",
                username: "",
                password: ""
            }
        }
    }

    handleChange(e) {
        e.target 
    }

    clearInputs() {
        this.setState({
            inputs: {
                name: "",
                username: "",
                password: ""
            }
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        
    }


    render()  
}

// EXPORTS
const mapStateToProps = () => {

}