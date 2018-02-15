// FORM DISPLAY -- COMPONENT
// ==============================

// IMPORT FROM PACKAGES
import React, { Component } from 'react'
import { connect } from "react-redux";

// IMPORT FROM FILES -- COMPONENTS
import DisplayCard from "./DisplayCard"
import { getNominees } from "../../../redux/reducers/nominees-reducer"

class FormDisplay extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        let { categoryId } = this.props
        this.props.getNominees(categoryId)
    }

    render() {
        console.log(this.props)
        const generateDisplayCard = () => {
            // nomineeData.map(
            //     <DisplayCard />
            // )
        }

        return (
            <div>
                form test
            </div>
        )
    }
}

// EXPORTS
const mapStateToProps = (state) => {
    return {
        nominees: state.nominees
    }
}

export default connect(mapStateToProps, {getNominees} )(FormDisplay)