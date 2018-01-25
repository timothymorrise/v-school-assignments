// FORM -- COMPONENT
// ------------------------------

import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                firstName: "",
                lastName: "",
                email: "",
                placeOfBirth: "",
                phone: "",
                favoriteFood: "",
                about: "",
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(e) {
        let { name, value } = e.target;
        this.setState((prevState) => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }
        })
    }
    clearInputs() {
        this.setState({
            inputs: {
                firstName: "",
                lastName: "",
                email: "",
                placeOfBirth: "",
                phone: "",
                favoriteFood: "",
                about: "",
            }
        })
    }
    handleSubmit(e) {
        let { phone } = this.state.inputs
        if( Number(phone) && phone.length === 10) {
            e.preventDefault();
        this.props.addBadge(this.state.inputs)
        this.clearInputs();
        } else {
            e.preventDefault();
            alert("Invalid Phone Number. Please enter a 10 digit phone number, without dashes or other special characters. \n \nExample: \"9876543210\" rather than \"987-654-3210\"");
           
        }
        
    } 
    

    render() {
        let { 
            firstName,
            lastName,
            email,
            placeOfBirth,
            phone,
            favoriteFood,
            about,
                } = this.state.inputs
        const handleChange = this.handleChange
        const handleSubmit = this.handleSubmit
        return (
            <form onSubmit={handleSubmit} > 
                {/* First Name */}
                <input name="firstName"  
                    value={firstName} 
                    type="text" 
                    placeholder="First Name"
                    onChange={handleChange}
                    minLength="3"
                    required />
                {/* Last Name */}
                <input name="lastName" 
                    value={lastName} 
                    type="text" 
                    placeholder="Last Name"
                    onChange={handleChange}
                    minLength="3"
                    required />
                {/* Email */}
                <input name="email" 
                    value={email}                     
                    type="text" 
                    placeholder="Email"
                    onChange={handleChange}
                    minLength="3"
                    required />
                {/* Place of Birth */}
                <input name="placeOfBirth" 
                    value={placeOfBirth} 
                    type="text" 
                    placeholder="Place of Birth"
                    onChange={handleChange}
                    minLength="3"
                    required />
                {/* Phone */}
                <input name="phone" 
                    value={phone} 
                    type="text" 
                    placeholder="Phone"
                    onChange={handleChange}
                    minLength="3"
                    required />
                {/* Favorite Food */}
                <input name="favoriteFood"  
                    value={favoriteFood} 
                    type="text" 
                    placeholder="Favorite Food"
                    onChange={handleChange}
                    minLength="3"
                    required />
                {/* About */}
                <input name="about"
                    id="about" 
                    value={about} 
                    type="text" 
                    placeholder="Tell us about yourself"
                    onChange={handleChange}
                    minLength="3" 
                    required />
                <button>Submit</button>
            </form>
        )
    }
}
